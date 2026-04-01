# 누락된 공공 API 포털 조사 보고서

**조사일**: 2026-04-02
**대상 분야**: 에너지/환경, 농림/해양, 안전/재난, 국방/외교, 기타

---

## 1. 에너지/환경 분야

### 1.1 한국에너지공단 (KEA)
- **기관명**: 한국에너지공단 (Korea Energy Agency)
- **URL**: https://energy.or.kr (자체 OpenAPI) / https://data.go.kr (data.go.kr 경유)
- **별도 ID 필요 여부**: data.go.kr 경유 시 data.go.kr ID만으로 가능 (Pattern A)
- **data.go.kr 패턴**: **A (게이트웨이)** -- data.go.kr serviceKey로 호출 가능
- **가입방법**: data.go.kr 회원가입 후 활용신청
- **주요 API 목록**:
  - 에너지소비효율 등급 제품 정보 (apis.data.go.kr/B553530/eep)
  - 고효율 에너지기자재 인증제품 정보 (apis.data.go.kr/B553530/CRTIF)
  - 에너지/온실가스 배출량 빅데이터 (24종, 407만건)
  - 에너지이용합리화자금 지원설비 정보
  - 100대 에너지 통계 기본정보
  - 신재생에너지 관련 통계

### 1.2 한국전력거래소 (KPX)
- **기관명**: 한국전력거래소 (Korea Power Exchange)
- **URL**: https://new.kpx.or.kr (기관 홈) / https://epsis.kpx.or.kr (전력통계정보시스템 EPSIS) / data.go.kr 경유
- **별도 ID 필요 여부**: data.go.kr ID만으로 가능 (Pattern A)
- **data.go.kr 패턴**: **A (게이트웨이)**
- **가입방법**: data.go.kr 회원가입 후 활용신청
- **주요 API 목록**:
  - 현재 전력수급현황 조회
  - 오늘 전력수급현황 조회
  - 계통한계가격(SMP) 조회 (육지/제주)
  - 전력시장 발전설비 정보
  - 발전원별 발전량 조회

### 1.3 한국전력공사 (KEPCO)
- **기관명**: 한국전력공사 (Korea Electric Power Corporation)
- **URL**: https://bigdata.kepco.co.kr (전력데이터 개방포털) / https://edsm.kepco.co.kr (EDS-Market)
- **별도 ID 필요 여부**: **별도 가입 필요** -- 전력데이터 개방포털 자체 회원가입 필요. data.go.kr에도 일부 등록
- **data.go.kr 패턴**: **C (양쪽 제공, 범위 차이)** -- data.go.kr에 기본 API 있으나, 전력데이터 개방포털에 더 많은 API
- **가입방법**: bigdata.kepco.co.kr 회원가입 후 인증키 발급
- **주요 API 목록**:
  - 계약종별 전력사용량 (data.go.kr)
  - 전자입찰계약정보 (data.go.kr)
  - EDS OPEN API 서비스 (전력데이터서비스마켓)
  - Open P-Meter 전력데이터 서비스

### 1.4 한국수력원자력 (KHNP)
- **기관명**: 한국수력원자력 (Korea Hydro & Nuclear Power)
- **URL**: https://www.khnp.co.kr / data.go.kr 경유
- **별도 ID 필요 여부**: data.go.kr ID만으로 가능 (Pattern A)
- **data.go.kr 패턴**: **A (게이트웨이)**
- **가입방법**: data.go.kr 회원가입 후 활용신청 (일 10,000회 개발계정)
- **주요 API 목록**:
  - 전원별 송전량 정보 (원전별 일별 송전량)
  - 자체 재생설비 발전현황
  - 수력발전소 수문자료 현황
  - 원자력 발전소 상태 (각 호기별 운전현황)

### 1.5 한국가스공사 (KOGAS)
- **기관명**: 한국가스공사 (Korea Gas Corporation)
- **URL**: https://www.kogas.or.kr
- **별도 ID 필요 여부**: data.go.kr 경유 (주로 파일 데이터)
- **data.go.kr 패턴**: **B (인덱스만)** -- OpenAPI보다 파일 데이터 위주로 공개. 96개 데이터셋 중 OpenAPI 제공 건수 극소
- **가입방법**: data.go.kr 회원가입
- **주요 API 목록**:
  - 가스통계 DB (파일)
  - 국내 가스시설 현황 (파일)
  - KOGAS 규격표준현황 (파일)
  - 수소혼입률 온실가스 배출감축량 (파일)
  - **주의**: 대부분 파일데이터(CSV/XLS)이며 실시간 REST API 제공은 극히 제한적

### 1.6 한국지역난방공사
- **기관명**: 한국지역난방공사 (Korea District Heating Corporation)
- **URL**: https://www.kdhc.co.kr
- **별도 ID 필요 여부**: data.go.kr 경유
- **data.go.kr 패턴**: **B (인덱스만)** -- 파일데이터 위주
- **가입방법**: data.go.kr 회원가입
- **주요 API 목록**:
  - 독립 REST API 확인 불가. 파일 데이터만 공개 상태
  - data.go.kr에서 자동변환 API로 일부 접근 가능

### 1.7 한국에너지기술연구원 (KIER)
- **기관명**: 한국에너지기술연구원 (Korea Institute of Energy Research)
- **URL**: https://www.kier.re.kr
- **별도 ID 필요 여부**: data.go.kr ID로 가능
- **data.go.kr 패턴**: **A (게이트웨이)**
- **가입방법**: data.go.kr 회원가입 후 활용신청
- **주요 API 목록**:
  - 태양광 일사량 데이터 (위도/경도 기반, 2020~2022)
  - 기상관측 기반 에너지 데이터

### 1.8 환경부/국립환경과학원/한국환경공단
- **기관명**: 환경부 산하 기관들
- **URL**:
  - https://www.airkorea.or.kr (에어코리아 -- 한국환경공단)
  - http://water.nier.go.kr (물환경정보시스템 -- 국립환경과학원)
  - https://www.bigdata-environment.kr (환경 빅데이터 플랫폼)
- **별도 ID 필요 여부**: 에어코리아는 data.go.kr 경유 가능 (Pattern A). 물환경정보시스템은 별도 사이트.
- **data.go.kr 패턴**: **C (양쪽 제공)** -- 에어코리아 API는 data.go.kr 경유 가능하지만, 환경 빅데이터 플랫폼은 자체 포털
- **가입방법**: data.go.kr 또는 각 사이트별 회원가입
- **주요 API 목록**:
  - **에어코리아**: 측정소별 실시간 대기오염 정보, 통합대기환경지수, 대기질 예보통보, 초미세먼지 주간예보 (PM10, PM2.5, O3, NO2, CO, SO2)
  - **국립환경과학원**: 수질 DB (수심, 수온, DO, BOD, COD, SS, TN, TP, TOC 등), 수질측정망 정보
  - **환경 빅데이터 플랫폼**: 환경 빅데이터 OpenAPI (자체 포털)

### 1.9 한국환경연구원 (KEI) / EIASS
- **기관명**: 한국환경연구원 (Korea Environment Institute)
- **URL**: https://www.kei.re.kr / https://www.eiass.go.kr (환경영향평가 정보지원시스템)
- **별도 ID 필요 여부**: data.go.kr 경유 가능 (일부). EIASS는 별도 가입 필요
- **data.go.kr 패턴**: **C (양쪽 제공)** -- data.go.kr에 일부 있으나 EIASS에 14개 서비스 47종 API 보유
- **가입방법**: data.go.kr 또는 EIASS 자체 회원가입
- **주요 API 목록 (EIASS 14개 서비스)**:
  - 대기질 정보 서비스
  - 온실가스 정보 서비스
  - 악취 정보 서비스
  - 공중보건 위생 정보 서비스
  - 수질 정보 서비스
  - 토지이용 정보 서비스
  - 동식물상 정보 서비스
  - 환경영향평가 협의 현황정보 서비스
  - 그 외 6개 서비스 (총 47종 API)

### 1.10 한국수자원공사 (K-water)
- **기관명**: 한국수자원공사 (Korea Water Resources Corporation)
- **URL**: https://opendata.kwater.or.kr (자체 공공데이터 개방포털) / data.go.kr 경유
- **별도 ID 필요 여부**: **자체 포털 별도 가입 필요** (410개 데이터셋). data.go.kr에도 일부 등록
- **data.go.kr 패턴**: **C (양쪽 제공, 범위 차이)** -- data.go.kr에 기본 API, 자체 포털에 410개 전체
- **가입방법**: opendata.kwater.or.kr 회원가입 또는 data.go.kr 활용신청
- **주요 API 목록**:
  - 수문 운영 정보 (61개소 댐/보, 10분/시간/일별)
  - 댐코드 조회
  - 수문 제원 현황
  - 지방상수도 수질 정보
  - 워터피디아 지식 정보
  - 상수도 정수 수질검사 정보

### 1.11 한국원자력환경공단 (KORAD)
- **기관명**: 한국원자력환경공단
- **URL**: https://www.korad.or.kr
- **별도 ID 필요 여부**: data.go.kr 경유
- **data.go.kr 패턴**: **A (게이트웨이)** 또는 파일 데이터
- **가입방법**: data.go.kr 회원가입
- **주요 API 목록**:
  - 방사성폐기물 관리 현황 데이터 (주로 파일)

---

## 2. 농림/해양 분야

### 2.1 농촌진흥청 / 농사로
- **기관명**: 농촌진흥청 (Rural Development Administration)
- **URL**: https://www.nongsaro.go.kr (농사로) / https://www.rda.go.kr
- **별도 ID 필요 여부**: **농사로 자체 API는 별도 가입 필요**. data.go.kr에도 일부 등록
- **data.go.kr 패턴**: **C (양쪽 제공)** -- data.go.kr에 일부 있으나 농사로에 더 풍부한 API
- **가입방법**: nongsaro.go.kr 회원가입 + 인증키 발급 / data.go.kr 활용신청
- **주요 API 목록**:
  - 작목별 농업기술 정보
  - 주간농사정보 (벼, 밭작물, 채소, 과수, 화훼, 축산, 특용작물)
  - 병해충 발생정보 (예보/주의보/경보)
  - 농약등록정보 검색서비스
  - 농약안전사용지침
  - 실내정원용 식물 정보
  - 포토뱅크, 품종정보, 농산물 소득표 등

### 2.2 농림축산식품 공공데이터 포털 (data.mafra.go.kr)
- **기관명**: 농림축산식품부 / 농림수산식품교육문화정보원
- **URL**: https://data.mafra.go.kr
- **별도 ID 필요 여부**: **자체 별도 가입 필요** (data.go.kr과 별도)
- **data.go.kr 패턴**: **B (인덱스만)** -- data.go.kr에 목록은 있으나, 실제 API는 data.mafra.go.kr에서 자체 키 발급
- **가입방법**: data.mafra.go.kr 회원가입 시 인증키 자동 발급
- **주요 API 목록**:
  - 스마트팜 빅데이터 제공 서비스 (온도, 습도, CO2, 양/광/관수 제어정보)
  - 품목별 데이터셋 (작기별 생산환경, 운용정보)
  - 혁신밸리 빅데이터
  - 농식품 공공데이터 포털 개방목록 조회

### 2.3 한국농수산식품유통공사 (aT) / KAMIS
- **기관명**: 한국농수산식품유통공사 (Korea Agro-Fisheries & Food Trade Corporation)
- **URL**: https://www.kamis.or.kr (농산물유통정보 KAMIS)
- **별도 ID 필요 여부**: **KAMIS 자체 별도 가입 필요** (data.go.kr 키와 호환 안 됨)
- **data.go.kr 패턴**: **B (인덱스만)** -- 목록만 제공, API 키는 KAMIS에서 직접 발급
- **가입방법**: kamis.or.kr 로그인 후 Open-API 키 발급 신청
- **주요 API 목록 (총 17종)**:
  - 일별/월별/연도별 도매가격 (76품목)
  - 소매가격 (95품목)
  - 친환경 소매가격 (52품목)
  - 일일 거래 동향
  - 성수품/제철 농산물 정보
  - 산지/도매/소매 단계별 가격정보

### 2.4 농림축산검역본부
- **기관명**: 농림축산검역본부 (Animal and Plant Quarantine Agency)
- **URL**: data.go.kr 경유
- **별도 ID 필요 여부**: data.go.kr ID로 가능
- **data.go.kr 패턴**: **A (게이트웨이)**
- **가입방법**: data.go.kr 회원가입 후 활용신청
- **주요 API 목록**:
  - 국가동물보호정보시스템 구조동물 조회 서비스
  - 시도/시군구/보호소/품종 조회 부가 API
  - 전자도서 정보

### 2.5 한국해양수산개발원 (KMI) / 수산물유통종합정보시스템
- **기관명**: 한국해양수산개발원 (Korea Maritime Institute)
- **URL**: https://fishdata.kmi.re.kr (수산물유통종합정보시스템)
- **별도 ID 필요 여부**: **별도 가입 필요**
- **data.go.kr 패턴**: **B (인덱스만)** -- 자체 포털에서 직접 API 제공
- **가입방법**: fishdata.kmi.re.kr 회원가입 후 API 키 발급
- **주요 API 목록**:
  - 주요 수산물 수급상황 실시간 모니터링
  - 수산물 유통 가격 정보
  - 수산물 유통 종합 정보

### 2.6 국립수산과학원 (NIFS)
- **기관명**: 국립수산과학원 (National Institute of Fisheries Science)
- **URL**: https://www.nifs.go.kr
- **별도 ID 필요 여부**: data.go.kr 경유
- **data.go.kr 패턴**: **A/B 혼재** -- 주로 파일 데이터. REST API 극소
- **가입방법**: data.go.kr 회원가입
- **주요 API 목록**:
  - 해양관측 데이터 (주로 파일 형태)
  - 수산생물 DB (파일 위주)
  - **참고**: 해양기상 정보는 국립해양측위정보원(KHOA)에서 별도 제공 (바다누리 이미 등록)

### 2.7 해양경찰청
- **기관명**: 해양경찰청 (Korea Coast Guard)
- **URL**: data.go.kr 경유
- **별도 ID 필요 여부**: data.go.kr ID로 가능
- **data.go.kr 패턴**: **A/B 혼재** -- 일부 OpenAPI, 일부 파일
- **가입방법**: data.go.kr 회원가입
- **주요 API 목록**:
  - 해양조난사고 상세데이터 (파일)
  - **참고**: 해양교통안전정보시스템(KOMSA) OPEN API (https://mtisopenapi.komsa.or.kr/) -- 해양사고 통계 (2017~2023) 별도 포털

### 2.8 농협 (NH) 오픈플랫폼
- **기관명**: 농협 (National Agricultural Cooperative Federation)
- **URL**: https://developers.nonghyup.com (NH 오픈플랫폼 개발자센터) / https://nhfintech.nonghyup.com (핀테크)
- **별도 ID 필요 여부**: **별도 가입 필수** (금융 API이므로 사업자 인증 등 필요)
- **data.go.kr 패턴**: **해당 없음** -- 금융 API로 data.go.kr과 무관. 민간 API
- **가입방법**: developers.nonghyup.com 개발자 회원가입, RESTful API 테스트 환경 제공
- **주요 API 목록**:
  - 계좌조회, 이체, 입금, 출금 API
  - 핀테크 서비스 개발용 금융 API
  - **주의**: 공공데이터가 아닌 금융 오픈뱅킹 API. 사업자 심사 필요

### 2.9 수협중앙회
- **기관명**: 수협중앙회 (National Federation of Fisheries Cooperatives)
- **URL**: https://www.suhyup.co.kr
- **별도 ID 필요 여부**: 확인 불가
- **data.go.kr 패턴**: 독립 API 미확인
- **가입방법**: 해당 없음
- **주요 API 목록**:
  - **공개 REST API 확인 불가**. 수협은행 오픈뱅킹은 금융결제원 경유

---

## 3. 안전/재난 분야

### 3.1 소방청
- **기관명**: 소방청 (National Fire Agency)
- **URL**: https://www.nfa.go.kr / https://bigdata-119.kr (소방안전 빅데이터 플랫폼)
- **별도 ID 필요 여부**: data.go.kr ID로 가능 (Pattern A). 빅데이터 플랫폼은 별도
- **data.go.kr 패턴**: **A (게이트웨이)**
- **가입방법**: data.go.kr 회원가입 후 활용신청
- **주요 API 목록**:
  - 화재정보서비스 (화재통계, 발생현황, 피해통계)
  - 구급정보서비스 (의료출동 통계)
  - 구급통계서비스 (접수/출동 통계)
  - 국가 위험물 정보 조회 서비스
  - 119안전센터 현황 (파일)
  - **빅데이터 플랫폼**: bigdata-119.kr에서 추가 데이터 제공

### 3.2 한국시설안전공단 / 시설물통합정보시스템 (FMS)
- **기관명**: 한국시설안전공단 (Korea Facility Safety Agency)
- **URL**: https://www.fms.or.kr (시설물통합정보시스템)
- **별도 ID 필요 여부**: **별도 가입 필요**
- **data.go.kr 패턴**: **B (인덱스만)** -- 실제 API는 FMS 자체 제공
- **가입방법**: fms.or.kr 공공데이터 메뉴에서 신청
- **주요 API 목록**:
  - 시설물 기본정보 조회
  - 안전점검/진단 결과 정보
  - 시설물 안전정보 통합 조회

### 3.3 한국원자력안전기술원 (KINS) / IERNet
- **기관명**: 한국원자력안전기술원 (Korea Institute of Nuclear Safety)
- **URL**: https://www.kins.re.kr / https://iernet.kins.re.kr (국가환경방사선감시망)
- **별도 ID 필요 여부**: data.go.kr 경유 (파일 데이터)
- **data.go.kr 패턴**: **B (인덱스만)** -- 환경방사선량률 DB는 파일 데이터로 제공. IERNet 웹사이트에서 실시간 모니터링 제공하나 공식 REST API 미확인
- **가입방법**: data.go.kr 회원가입 (파일) / IERNet 웹사이트 직접 조회
- **주요 API 목록**:
  - 환경방사선량률 DB (파일 -- 전국 245개소)
  - IERNet 실시간 환경방사선 감시 (웹 조회, API 미공개)
  - **한계**: 실시간 REST API 공개 없음. 웹페이지 기반 조회만

### 3.4 한국가스안전공사 (KGS)
- **기관명**: 한국가스안전공사 (Korea Gas Safety Corporation)
- **URL**: https://www.kgs.or.kr
- **별도 ID 필요 여부**: data.go.kr 경유
- **data.go.kr 패턴**: **A/B 혼재** -- 96개 데이터셋 등록. 대부분 파일 데이터, 일부 자동변환 API
- **가입방법**: data.go.kr 회원가입
- **주요 API 목록**:
  - CNG 충전소 현황
  - 수소충전소 운영현황 (시설명, 주소, 충전기 수)
  - 가스사고 신고접수 정보
  - 가스통계 DB (파일)
  - 국내 가스시설 현황 (파일)
  - KGS Code 개정사항 (파일)
  - **참고**: 96개 데이터셋 중 54개 산업/고용, 39개 재난안전, 3개 공공행정

### 3.5 한국산업안전보건공단 (KOSHA)
- **기관명**: 한국산업안전보건공단 (Korea Occupational Safety and Health Agency)
- **URL**: https://www.kosha.or.kr
- **별도 ID 필요 여부**: data.go.kr ID로 가능
- **data.go.kr 패턴**: **A (게이트웨이)**
- **가입방법**: data.go.kr 회원가입 후 활용신청
- **주요 API 목록**:
  - 국내재해사례 게시판 정보 조회서비스
  - 안전보건법령 스마트검색
  - 기계/기구 안전정보

### 3.6 행정안전부 안전정보 (안전신문고/생활안전지도 관련)
- **기관명**: 행정안전부
- **URL**: data.go.kr 경유 (이미 safemap.go.kr 등록됨)
- **별도 ID 필요 여부**: data.go.kr ID로 가능
- **data.go.kr 패턴**: **A (게이트웨이)**
- **가입방법**: data.go.kr 회원가입
- **주요 API 목록**:
  - 안전정보 통합공개 조회 서비스 (전기, 승강기, 시설안전, 어린이 놀이시설, 병원, 호텔, 휴양림 등)
  - 생활안전지도 치안안전시설 (이미 기존 portals.json에 등록)

---

## 4. 국방/외교 분야

### 4.1 병무청
- **기관명**: 병무청 (Military Manpower Administration)
- **URL**: https://open.mma.go.kr (공개개방포털)
- **별도 ID 필요 여부**: **data.go.kr ID 필요** -- 병무청 자체 포털이 있으나 인증키는 data.go.kr에서 발급
- **data.go.kr 패턴**: **A (게이트웨이)** -- data.go.kr serviceKey로 호출
- **가입방법**: data.go.kr 회원가입 필수 -> 활용신청 -> 기관 담당자 승인 (2~3일 소요)
- **주요 API 목록**:
  - 사회복무요원 복무기관 정보
  - 사회복무요원 본인선택 공석 정보
  - 입영일자/부대 정보
  - 병역판정 관련 정보
  - **참고**: 인증키 1인 1개, 양도 불가. 기관 승인 방식 (자동 아님)

### 4.2 외교부
- **기관명**: 외교부 (Ministry of Foreign Affairs)
- **URL**: https://www.mofa.go.kr
- **별도 ID 필요 여부**: data.go.kr ID로 가능
- **data.go.kr 패턴**: **A (게이트웨이)**
- **가입방법**: data.go.kr 회원가입 후 활용신청
- **주요 API 목록**:
  - 국가별 안전정보 (각 공관 실시간 업데이트)
  - 국가/지역별 주요인사교류 (ISO국가코드 기반)
  - 해외안전여행 정보 (여행경보단계 등)

### 4.3 국방부
- **기관명**: 국방부 (Ministry of National Defense)
- **URL**: data.go.kr 경유
- **별도 ID 필요 여부**: data.go.kr ID로 가능
- **data.go.kr 패턴**: **A/B 혼재** -- 제한적 공개
- **가입방법**: data.go.kr 회원가입
- **주요 API 목록**:
  - 군 관련 공공데이터는 극히 제한적
  - 국방 관련 통계 일부 파일 데이터
  - **한계**: 군사보안상 실시간 API 거의 없음. 병무청이 사실상 유일한 국방 분야 API 제공기관

---

## 5. 기타 분야

### 5.1 국가보훈부 (구 국가보훈처)
- **기관명**: 국가보훈부 (Ministry of Patriots and Veterans Affairs)
- **URL**: https://www.mpva.go.kr
- **별도 ID 필요 여부**: data.go.kr 경유 가능
- **data.go.kr 패턴**: **A (게이트웨이)** 또는 자체 API
- **가입방법**: data.go.kr 회원가입
- **주요 API 목록**:
  - 보훈관서 채용정보 검색 (http://job.mpva.go.kr/govRecurit/openapi.do)
  - 보훈대상자 취업정보
  - 채용구분: 보훈특별고용, 일반직 공무원 특별채용 등

### 5.2 한국영화진흥위원회 (KOFIC) / KOBIS
- **기관명**: 영화진흥위원회 (Korean Film Council)
- **URL**: https://www.kobis.or.kr/kobisopenapi/ (KOBIS 오픈API)
- **별도 ID 필요 여부**: **KOBIS 자체 별도 가입 필요** (data.go.kr과 별도 키)
- **data.go.kr 패턴**: **C (양쪽 제공)** -- data.go.kr에 박스오피스 DB 있으나, KOBIS 직접이 더 풍부
- **가입방법**: kobis.or.kr 회원가입 후 API 키 발급
- **주요 API 목록**:
  - 일별 박스오피스
  - 주간/주말 박스오피스
  - 공통코드 조회
  - 영화목록 / 영화 상세정보
  - 영화사목록 / 영화사 상세정보
  - 영화인목록 / 영화인 상세정보
  - **포맷**: REST/SOAP 선택 가능, XML/JSON 지원

### 5.3 한국콘텐츠진흥원 (KOCCA)
- **기관명**: 한국콘텐츠진흥원 (Korea Creative Content Agency)
- **URL**: https://www.kocca.kr/kocca/subPage.do?menuNo=204795
- **별도 ID 필요 여부**: **별도 가입 필요**
- **data.go.kr 패턴**: **C (양쪽 제공)** -- data.go.kr에 일부 있으나 자체 포털이 더 풍부
- **가입방법**: kocca.kr 회원가입 후 API 키 발급
- **주요 API 목록**:
  - 지원사업 정보
  - 금융지원 정보
  - 입찰공고
  - 정기간행물
  - 국내산업정보
  - 해외산업정보

### 5.4 방송미디어통신위원회 (구 방송통신위원회)
- **기관명**: 방송미디어통신위원회 (2025.10 출범, 구 방통위 폐지)
- **URL**: https://www.kmcc.go.kr
- **별도 ID 필요 여부**: 확인 불가
- **data.go.kr 패턴**: 독립 REST API 미확인
- **가입방법**: 해당 없음
- **주요 API 목록**:
  - **공개 REST API 확인 불가**. 구 방통위 API가 새 조직으로 이관 여부 불명확

### 5.5 한국방송통신전파진흥원 (KCA)
- **기관명**: 한국방송통신전파진흥원 (Korea Communications Agency)
- **URL**: https://www.kca.kr
- **별도 ID 필요 여부**: **별도 가입 필요** (자체 OpenAPI 센터)
- **data.go.kr 패턴**: **B (인덱스만)** -- data.go.kr에 목록 있으나 자체 인증키 필요
- **가입방법**: 기관 자체 OpenAPI 센터 회원가입 후 인증키 발급
- **주요 API 목록**:
  - 전파/전자/통신 분야 국가기술자격검정 시험일정
  - 주요 공지사항 정보

### 5.6 게임물관리위원회
- **기관명**: 게임물관리위원회 (Game Rating and Administration Committee)
- **URL**: data.go.kr 경유
- **별도 ID 필요 여부**: data.go.kr ID로 가능
- **data.go.kr 패턴**: **A/B 혼재** -- 등급분류 정보는 파일 데이터, 인사/채용은 OpenAPI
- **가입방법**: data.go.kr 회원가입
- **주요 API 목록**:
  - 등급분류증명서 및 결정서 정보 (파일 데이터)
  - 인사/채용/입찰 정보 (OpenAPI)
  - **한계**: 게임 등급분류 DB의 실시간 REST API는 미제공

### 5.7 한국마사회
- **기관명**: 한국마사회 (Korea Racing Authority)
- **URL**: https://www.kra.co.kr
- **별도 ID 필요 여부**: data.go.kr 경유
- **data.go.kr 패턴**: **B -> 폐기** -- **2024년 OPEN API 10종 서비스 폐기 공지** 발표
- **가입방법**: data.go.kr (현재 대체 서비스 안내 중)
- **주요 API 목록**:
  - **폐기됨**: 기존 10종 API 서비스 폐기 및 대체 서비스 전환
  - 공공데이터 개방은 kra.co.kr 자체 페이지에서 파일 형태로 제공

### 5.8 동행복권 (로또)
- **기관명**: 기획재정부 / 동행복권
- **URL**: https://www.dhlottery.co.kr
- **별도 ID 필요 여부**: **비공식 API** -- 공식 OpenAPI 없음
- **data.go.kr 패턴**: **해당 없음** -- 공식 API 미제공
- **가입방법**: 해당 없음
- **주요 API 목록**:
  - 온라인복권 1등 당첨 판매점 현황 (data.go.kr 파일)
  - 판매점 주소 목록 (data.go.kr 파일)
  - **비공식**: dhlottery.co.kr/common.do?method=getLottoNumber (비공식 JSON 엔드포인트, 키 불필요)
  - **비공식 래퍼**: GitHub roeniss/dhlottery-api 등 커뮤니티 프로젝트

### 5.9 한국체육진흥공단 스포츠토토
- **기관명**: 한국체육진흥공단
- **URL**: https://www.kspo.or.kr
- **별도 ID 필요 여부**: 해당 없음
- **data.go.kr 패턴**: 해당 없음
- **주요 API 목록**:
  - **공개 REST API 확인 불가**. 스포츠토토 관련 공개 API 없음

### 5.10 V-World (브이월드)
- **기관명**: 국토교통부 / 국가공간정보포털
- **URL**: https://www.vworld.kr
- **별도 ID 필요 여부**: **별도 가입 필수** (V-World 자체 회원가입 + 인증키 발급)
- **data.go.kr 패턴**: **B (인덱스만)** -- data.go.kr과 별도 체계
- **가입방법**: vworld.kr 회원가입 -> Open API -> 인증키 -> 인증키 발급
- **주요 API 목록**:
  - 2D 지도 API (Leaflet/OpenLayers 연동)
  - 3D 지도 API (3D 데스크톱 API)
  - 지오코딩/역지오코딩
  - 공간데이터 검색 API
  - 6종 기본공간정보 (정사영상, 인터넷지도, 3D지도, DEM, 실내공간, 기타)
  - 900종+ 행정공간정보 (연속지적도, 토지이용, 건물통합정보 등)
  - **참고**: 이미 portals.json에 국가공간정보포털(openapi.nsdi.go.kr)이 있으나 V-World는 별도 서비스

### 5.11 한국부동산원 / 청약홈
- **기관명**: 한국부동산원 (Korea Real Estate Board, 구 한국감정원)
- **URL**: https://www.reb.or.kr (R-ONE 부동산통계) / https://applyhome.co.kr (청약홈)
- **별도 ID 필요 여부**: data.go.kr 경유 가능 (Pattern A). R-ONE 별도 API도 존재
- **data.go.kr 패턴**: **C (양쪽 제공)** -- data.go.kr에 청약/통계 API 있고, R-ONE에서도 별도 API 제공
- **가입방법**: data.go.kr 활용신청 / reb.or.kr 별도 회원가입
- **주요 API 목록**:
  - 청약홈 분양정보 조회 서비스 (APT, 오피스텔, 도시형 등)
  - 청약 신청/당첨자 정보 조회 (지역별/연령별, 가점제)
  - 청약통장 통계 조회 (가입현황, 통장별, 기간별)
  - 부동산통계 조회 (전국지가변동률, 주택가격동향, 실거래가격지수)
  - R-ONE 부동산통계정보시스템 Open API

### 5.12 주택도시보증공사 (HUG)
- **기관명**: 주택도시보증공사 (Korea Housing & Urban Guarantee Corporation)
- **URL**: https://www.khug.or.kr/openapi/ (자체 OpenAPI 포털)
- **별도 ID 필요 여부**: **자체 포털 별도 가입** + data.go.kr 경유도 가능
- **data.go.kr 패턴**: **C (양쪽 제공)** -- 양쪽 모두 API 제공
- **가입방법**: khug.or.kr OpenAPI 서비스 회원가입 / data.go.kr 활용신청
- **주요 API 목록**:
  - 분양보증 분양이행 현황
  - 분양보증 환급이행 현황
  - 분양보증 사고발생 금액 현황
  - 전세보증금반환보증 관련 정보
  - 임대보증금보증 정보
  - 민간임대 관련 정보

### 5.13 국토교통부 실거래가 (구 한국감정원 명의)
- **기관명**: 국토교통부 (Ministry of Land, Infrastructure and Transport)
- **URL**: https://rt.molit.go.kr (실거래가 공개시스템) / data.go.kr 경유
- **별도 ID 필요 여부**: data.go.kr ID로 가능 (Pattern A)
- **data.go.kr 패턴**: **A (게이트웨이)**
- **가입방법**: data.go.kr 회원가입 후 활용신청
- **주요 API 목록**:
  - 아파트 매매 실거래가 자료
  - 아파트 전월세 실거래가
  - 단독/다가구 매매
  - 연립/다세대 매매
  - 오피스텔 매매/전월세
  - 상업업무용 부동산 매매
  - 토지 매매
  - **참고**: "한국감정원"은 2020년 "한국부동산원"으로 명칭 변경. 실거래가 API는 국토교통부 명의로 data.go.kr 제공

---

## 6. 종합 정리

### 6.1 기존 portals.json에 없는 신규 발견 포털 (27개)

| # | 기관명 | 카테고리 | 별도ID | data.go.kr 패턴 | 독립 API 규모 |
|---|--------|---------|--------|----------------|-------------|
| 1 | 한국에너지공단 | ENRG | X | A | 24종+ |
| 2 | 한국전력거래소 | ENRG | X | A | 5종+ |
| 3 | 한국전력공사 (EDS) | ENRG | O | C | 다수 |
| 4 | 한국수력원자력 | ENRG | X | A | 4종+ |
| 5 | 한국가스공사 | ENRG | X | B(파일) | 극소 |
| 6 | 한국에너지기술연구원 | ENRG | X | A | 1종+ |
| 7 | 한국환경연구원/EIASS | ENV | O | C | 47종 |
| 8 | 한국수자원공사 | ENV | O | C | 다수 (410개 데이터셋) |
| 9 | 한국환경공단(에어코리아) | ENV | X | A | 5종+ |
| 10 | 환경빅데이터플랫폼 | ENV | O | B | 다수 |
| 11 | 농촌진흥청/농사로 | AGRI | O | C | 10종+ |
| 12 | 농림축산식품 포털 | AGRI | O | B | 다수 |
| 13 | KAMIS (aT) | AGRI | O | B | 17종 |
| 14 | 농림축산검역본부 | AGRI | X | A | 3종+ |
| 15 | KMI 수산물유통정보 | MARI | O | B | 다수 |
| 16 | 해양경찰청/KOMSA | SAFE | X/O | A/B | 소수 |
| 17 | NH 오픈플랫폼 | FIN | O | 해당없음 | 금융API |
| 18 | 소방청 | SAFE | X | A | 4종+ |
| 19 | 한국시설안전공단 FMS | SAFE | O | B | 소수 |
| 20 | KINS/IERNet | SAFE | X | B(파일) | 파일만 |
| 21 | 한국가스안전공사 | SAFE | X | A/B | 96개 데이터셋 |
| 22 | KOSHA | SAFE | X | A | 2종+ |
| 23 | 병무청 | MILT | X | A | 3종+ |
| 24 | 외교부 | DIPL | X | A | 2종+ |
| 25 | 국가보훈부 | ETC | X | A | 2종+ |
| 26 | KOFIC/KOBIS | CULT | O | C | 9종 |
| 27 | KOCCA | CULT | O | C | 6종+ |
| 28 | KCA | ETC | O | B | 소수 |
| 29 | V-World | LAND | O | B | 다수 |
| 30 | 한국부동산원/청약홈 | REAL | X/O | C | 5종+ |
| 31 | 주택도시보증공사 HUG | REAL | O | C | 5종+ |

### 6.2 API 미제공 또는 극히 제한적인 기관

| 기관명 | 상태 |
|--------|------|
| 한국지역난방공사 | 파일 데이터만, REST API 없음 |
| 수도권매립지관리공사 | API 확인 불가 |
| 수협중앙회 | 공개 API 없음 |
| 국방부 | 군사보안상 극히 제한적 |
| 방송미디어통신위원회 | 조직 개편(2025.10) 후 API 현황 불명 |
| 게임물관리위원회 | 등급분류 DB는 파일만 (REST API 없음) |
| 한국마사회 | 기존 10종 API 폐기 (2024) |
| 한국체육진흥공단 | 스포츠토토 API 없음 |
| 동행복권 | 공식 API 없음 (비공식 엔드포인트만 존재) |
| 국립수산과학원 | 주로 파일 데이터, REST API 극소 |

### 6.3 핵심 발견 사항

1. **에너지 분야가 가장 큰 빈 공간**: 한국에너지공단(24종 API), 전력거래소(5종+), 한전 EDS, 한수원 등 에너지 분야에 상당수의 미등록 API가 존재한다.

2. **환경 분야 EIASS가 숨은 보물**: 한국환경연구원의 EIASS 시스템이 14개 서비스 47종 API를 보유하고 있으나 인지도가 낮다.

3. **K-water 자체 포털이 대규모**: 410개 데이터셋을 자체 포털(opendata.kwater.or.kr)에서 제공하나 data.go.kr 연동은 일부만.

4. **농업 분야 3중 구조**: 농사로(농촌진흥청), data.mafra.go.kr(농림부), KAMIS(aT)가 각각 별도 포털로 운영되어 혼동 유발.

5. **KOFIC/KOBIS는 독립 API 품질 양호**: 영화진흥위원회 API는 REST/SOAP 모두 지원, JSON/XML 선택 가능하여 상대적으로 개발자 친화적.

6. **폐기된 API 주의**: 한국마사회는 2024년 10종 API를 폐기했으므로 기존 연동 서비스는 대체 필요.

7. **군사/국방은 구조적 한계**: 국방부는 보안상 API 공개가 극히 제한적이며, 병무청이 사실상 유일한 국방 관련 API 제공 기관.
