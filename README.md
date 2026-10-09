# React To-do List

<img src="assets\images\스크린샷 2026-10-09 171757.png"/>
개발 초기화면

React로 만든 간단한 할 일 관리 앱입니다.
할 일을 추가·수정·삭제하고 완료 여부에 따라 필터링할 수 있으며, 목록은 브라우저의 `localStorage`에 저장되어 새로고침해도 유지됩니다.

## 주요 기능

- **할 일 추가**: 입력창에 내용을 적고 `작성하기`를 누르면 목록에 추가됩니다. 빈 문자열은 추가되지 않습니다.
- **완료 처리**: 체크박스를 누르면 완료 상태가 토글되고, 완료된 항목에는 취소선이 표시됩니다.
- **수정 / 삭제**: 각 항목의 `수정` 버튼으로 내용을 바꾸고 `저장`으로 반영하며, `삭제`로 항목을 지웁니다.
- **필터링**: `전체` / `완료` / `미완료` 버튼으로 보이는 목록을 거를 수 있습니다.
- **데이터 유지**: 목록이 `localStorage`의 `todos` 키에 저장됩니다.

## 기술 스택

- React 19
- Create React App (`react-scripts` 5)
- Jest + React Testing Library

## 시작하기

Node.js 18 이상이 필요합니다.

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm start
```

## 스크립트

| 명령어          | 설명                                      |
| --------------- | ----------------------------------------- |
| `npm start`     | 개발 서버를 실행합니다.                   |
| `npm test`      | 테스트를 watch 모드로 실행합니다.         |
| `npm run build` | 배포용 빌드를 `build/` 폴더에 생성합니다. |

## 폴더 구조

```
React-To-do/
├── public/                  # 정적 파일 (index.html, 아이콘, manifest)
├── src/
│   ├── components/          # UI 컴포넌트
│   │   ├── FilterButtons.js # 전체/완료/미완료 필터 버튼
│   │   ├── TodoInput.js     # 할 일 입력 폼
│   │   └── TodoList.js      # 할 일 목록 (토글·수정·삭제)
│   ├── constants/
│   │   └── filters.js       # 필터 값과 버튼 라벨
│   ├── hooks/
│   │   └── useTodos.js      # 할 일 상태 관리 + localStorage 동기화
│   ├── App.js               # 화면 조립 및 필터 상태 관리
│   ├── App.css
│   ├── App.test.js          # 추가·필터링 동작 테스트
│   ├── index.js             # 엔트리 포인트
│   └── index.css
├── .editorconfig
├── .prettierrc
└── package.json
```

## 구조 설명

- **`useTodos` 훅**이 할 일 목록의 상태와 `addTodo` / `editTodo` / `deleteTodo` / `toggleTodo`를 제공하고, 변경될 때마다 `localStorage`에 저장합니다.
- **`App`** 은 훅에서 받은 목록을 현재 필터로 걸러 `TodoList`에 넘기고, 필터 상태는 `FilterButtons`와 공유합니다.
- 필터 값(`all`, `completed`, `active`)은 `constants/filters.js`에서 한 곳으로 관리합니다.

## 코드 스타일

- 들여쓰기 2칸, 큰따옴표, 세미콜론 사용 (`.prettierrc`, `.editorconfig`)
- ESLint는 CRA 기본 설정(`react-app`)을 사용합니다.
