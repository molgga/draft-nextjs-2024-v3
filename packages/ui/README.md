## shadcn 설치

```
pnpm dlx create-turbo@latest

설치 후

packages/ui 이동
turbo 폴더 제거
src 폴더 안에 있는것 모두 제거
packages.json 에 exports 부분에 src 에 있던 기본 생성된 컴포넌트(button, card 등) path 잡혀있는 부분 제거

// tailwindcss 추가
pnpm add tailwindcss autoprefixer postcss

src/globals.css 생성
// 아래 내용 추가 후 저장
@tailwind base;
@tailwind components;
@tailwind utilities;

// ui/tsconfig.json 에 paths 추가
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]  // 추가한 후에야 설치가 됨
    }
  }
}


위에 까지 한 후 다시 설치하면 설치가 됨

npx shadcn@latest init
```
