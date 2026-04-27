#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");

function read(relPath) {
  return fs.readFileSync(path.join(root, relPath), "utf8");
}

function walk(dir, predicate) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const absPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(absPath, predicate));
    } else if (!predicate || predicate(absPath)) {
      files.push(absPath);
    }
  }

  return files;
}

function fail(message) {
  throw new Error(message);
}

function testMarkdownLinks() {
  const markdownFiles = walk(root, (file) => file.endsWith(".md"));
  const badLinks = [];
  const linkPattern = /!?\[[^\]]*]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;

  for (const file of markdownFiles) {
    const relFile = path.relative(root, file);
    const lines = fs.readFileSync(file, "utf8").split(/\n/);

    lines.forEach((line, lineIndex) => {
      for (const match of line.matchAll(linkPattern)) {
        const url = match[1];
        if (/^(https?:|mailto:|#)/i.test(url)) continue;
        if (url.startsWith("/")) {
          badLinks.push(`${relFile}:${lineIndex + 1} absolute local path: ${url}`);
          continue;
        }

        const targetWithoutHash = decodeURI(url.split("#")[0]);
        if (!targetWithoutHash) continue;

        const target = path.normalize(path.join(path.dirname(file), targetWithoutHash));
        if (!fs.existsSync(target)) {
          badLinks.push(`${relFile}:${lineIndex + 1} missing target: ${url}`);
        }
      }
    });
  }

  if (badLinks.length) {
    fail(`Markdown link validation failed:\n${badLinks.join("\n")}`);
  }
}

function getInlineScript(html) {
  const match = html.match(/<script>([\s\S]*)<\/script>\s*<\/body>/);
  if (!match) fail("Could not find the inline dashboard script in index.html");
  return match[1];
}

function loadDashboardScript() {
  const html = read("index.html");
  const script = getInlineScript(html);
  const context = {
    console,
    document: {
      addEventListener() {},
      createElement() {
        return {
          set textContent(value) {
            this.innerHTML = String(value).replace(/[&<>"]/g, (char) => ({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              "\"": "&quot;"
            }[char]));
          }
        };
      }
    }
  };

  vm.createContext(context);
  vm.runInContext(`${script}
globalThis.__dashboard = {
  count: PORTALS_DATA.length,
  ids: PORTALS_DATA.map((portal) => portal.id),
  separateIds: PORTALS_DATA.filter((portal) => portal.signup && portal.signup.separate_id).length,
  totalApis: PORTALS_DATA.reduce((sum, portal) => sum + (portal.api_count_estimate || 0), 0),
  patterns: PORTALS_DATA.reduce((acc, portal) => {
    const pattern = portal.data_go_kr && portal.data_go_kr.pattern;
    acc[pattern] = (acc[pattern] || 0) + 1;
    return acc;
  }, {})
};`, context);

  return { html, script, dashboard: context.__dashboard };
}

function testDashboardScript() {
  const { html, dashboard } = loadDashboardScript();

  if (!Number.isInteger(dashboard.count) || dashboard.count < 100) {
    fail(`Unexpected portal count in index.html: ${dashboard.count}`);
  }

  const duplicateIds = dashboard.ids.filter((id, index) => dashboard.ids.indexOf(id) !== index);
  if (duplicateIds.length) {
    fail(`Duplicate portal ids in index.html: ${[...new Set(duplicateIds)].join(", ")}`);
  }

  if (dashboard.separateIds !== 130) {
    fail(`Expected 130 separate required IDs, got ${dashboard.separateIds}`);
  }

  if (dashboard.totalApis !== 23760) {
    fail(`Expected 23,760 estimated APIs, got ${dashboard.totalApis}`);
  }

  const expectedPatterns = ["A_gateway", "B_index_only", "C_both_differ", "not_listed"];
  const unknownPatterns = Object.keys(dashboard.patterns).filter((pattern) => !expectedPatterns.includes(pattern));
  if (unknownPatterns.length) {
    fail(`Unknown data.go.kr patterns: ${unknownPatterns.join(", ")}`);
  }

  if (/Placeholder sample|replaced by the build script/.test(html)) {
    fail("index.html still contains stale placeholder/build-script wording");
  }
}

function testDashboardDomReferences() {
  const { html } = loadDashboardScript();
  const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((match) => match[1]));
  const missing = [];

  for (const match of html.matchAll(/getElementById\('([^']+)'\)/g)) {
    if (!ids.has(match[1])) missing.push(`getElementById('${match[1]}')`);
  }

  for (const match of html.matchAll(/querySelector\('(#([^'\s>]+)[^']*)'\)/g)) {
    if (!ids.has(match[2])) missing.push(`querySelector('${match[1]}')`);
  }

  if (missing.length) {
    fail(`Missing dashboard DOM targets:\n${[...new Set(missing)].join("\n")}`);
  }
}

function testVisualShellContract() {
  const html = read("index.html");
  const header = html.split(/\n/).slice(0, 3).join("\n");

  if (!header.includes('data-visual-system="radar-unified-v2"')) {
    fail("index.html is missing data-visual-system on the <html> shell");
  }
  if (!header.includes('data-visual-surface="workspace"')) {
    fail("index.html is missing workspace surface metadata");
  }
  if (!header.includes('data-visual-page="api-portfolio"')) {
    fail("index.html is missing api-portfolio page metadata");
  }
}

const tests = [
  ["markdown links", testMarkdownLinks],
  ["dashboard script/data", testDashboardScript],
  ["dashboard DOM references", testDashboardDomReferences],
  ["visual shell contract", testVisualShellContract]
];

for (const [name, test] of tests) {
  test();
  console.log(`ok - ${name}`);
}
