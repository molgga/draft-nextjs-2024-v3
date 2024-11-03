## project tree

```sh
src
├─ app // 앱 라우트
├─ features // 각 기능/항목별 모듈
├─ middlewares // 전역 미들웨어
├─ providers // 전역 프로바이더
├─ shared // 재사용, 공유 가능한 단위별 기능
│  ├─ hook
│  ├─ libs
│  ├─ store
│  ├─ types
│  ├─ ui
│  └─ util
└─ middleware.ts // nextjs 미들웨어
```

```sh
// 예시
src
├─ app // 앱 라우트
│  ├─ (main-layout) // 메인 레이아웃에 속하는 페이지 그룹
│  ├─ api // API
│  │  ├─ auth
│  │  │  └─ [...nextauth]
│  ├─ auth // 인증 관련 페이지
│  │  ├─ login
│  │  └─ logout
│  ├─ error.tsx // 전역 에러 페이지
│  ├─ globals.css
│  ├─ layout.tsx // 전역 레이아웃
│  └─ not-found.tsx // 404
│
│
├─ features // 각 기능/항목별 모듈
│  ├─ auth // 인증과 관련된 기능 모음
│  │  ├─ server
│  │  └─ ui
│  ├─ error // 에러와 관련된 기능 모음
│  │  ├─ hook
│  │  ├─ types.ts
│  │  ├─ ui
│  │  └─ utils
│  ├─ layout
│  │  ├─ hook
│  │  ├─ model
│  │  ├─ store
│  │  └─ ui
│  ├─ notice
│  │  ├─ api
│  │  ├─ model
│  │  ├─ types
│  │  └─ ui
│  └─ promotion
│
├─ middlewares // 전역 미들웨어
│  ├─ index.ts
│  ├─ middleware-auth.ts
│  ├─ middleware-logger.ts
│  ├─ next-auth-authroized.ts
│  └─ types.ts
│
│
├─ providers // 전역 프로바이더
│  ├─ auth-provider.tsx
│  ├─ auth-session-provider.tsx
│  ├─ modal-provider.tsx
│  ├─ query-provider.tsx
│  └─ toast-provider.tsx
│
│
├─ shared // 재사용, 공유 가능한 단위별 기능
│  ├─ hook
│  ├─ libs
│  │  ├─ api-client
│  │  ├─ jd-modal
│  │  └─ toast
│  ├─ store
│  ├─ types
│  ├─ ui
│  │  ├─ pagination
│  │  └─ panel
│  └─ util
│     ├─ date
│     ├─ functional
│     ├─ number
│     ├─ randomize
│     ├─ react
│     ├─ search
│     └─ string
```
