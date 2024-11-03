# Turborepo starter

구성 테스트용

- Nextjs 14 App router
- next-auth
- fetch
- @tanstack/react-query
- shadcn
- react-hook-form
- zod

## husky + commitlint

- 패키지 설치

```sh
# husky: https://typicode.github.io/husky/get-started.html
# commitlint: https://commitlint.js.org/guides/getting-started.html
pnpm add -D -w husky lint-staged @commitlint/types @commitlint/{cli,config-conventional}
```

- husky 파일 추가

```sh
# /.husky/_/pre-commit
pnpm lint-staged
```

- husky 파일 추가

```sh
# /.husky/_/commit-msg
pnpm commitlint --edit $1 --config commitlint.config.ts
```

- husky 설정 파일 추가

```
# /lint-staged.config.mjs
- 설정: https://github.com/lint-staged/lint-staged
```

- 커밋 컨벤션 설정 파일 추가
  - 컨벤션(@commitlint/config-conventional) 참고
    - https://www.conventionalcommits.org/en/v1.0.0/
    - https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional

```
# /commitlint.config.ts
```

.
