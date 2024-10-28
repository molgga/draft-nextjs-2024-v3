import { type NextAuthMiddlewareOptions } from 'next-auth/middleware';
import { withAuth } from 'next-auth/middleware';

export { withAuth };

/**
 * nextjs middleware 에서 사용하기 위한 미들웨어.
 *
 * next-auth 에서 제공하는 "withAuth" 를 통해 callbacks.authorized 가 실행되면서 token 정보등을 전달해준다.
 * token 검증 등에 부가 처리를 하거나, path 에 따라 로그인 페이지 등으로 이동한다.
 */
export const createNextAuthAuthrorized = (): NextAuthMiddlewareOptions => {
  const authProtecteds = [/^\/brand/];
  const authPublics = [/^\/api\//, /^\/sample\//, /^\/auth\//];
  const pathLogin = '/auth/login';

  return {
    callbacks: {
      authorized: ({ token, req }) => {
        try {
          // console.log('# preAuthorized:', ' hasTokenUser:', !!token?.user);
          const pathname = req.nextUrl.pathname;
          const isProtectedRoute = authProtecteds.some((p) => p.test(pathname));

          // middleware config matcher 에서 확인 불필요한 패스들은 1차적으로 걸러준다.
          // const isStaticRoute = pathname.startsWith('/_next/static');
          // if (isStaticRoute) {
          //   return true;
          // }

          // 인증이 불필요한 페이지는 통과
          const isPublicRoute = authPublics.some((p) => p.test(pathname));
          if (isPublicRoute) {
            return true;
          }

          if (isProtectedRoute) {
            const hasNotToken = !token;
            const hasTokenButError = Boolean(token?.error);
            if (
              !pathname.startsWith(pathLogin) && // 로그인 페이지가 아니고
              (hasNotToken || hasTokenButError) // 토큰에 이상이 있다면
            ) {
              // next-auth-options 의 pages.signIn 에 정의된 path 로 이동된다.
              return false; // 로그인 페이지로 이동
            }
          }
          return true;
        } catch (err) {
          return true;
        }
      },
    },
  };
};
