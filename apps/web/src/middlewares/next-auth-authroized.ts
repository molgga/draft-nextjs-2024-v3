import { type NextAuthMiddlewareOptions } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";

export { withAuth };

/**
 * 인증 관련 설정을 위한 인터페이스
 */
interface AuthorizedProps {
  /**
   * 인증이 필요한 경로를 정의하는 정규식 배열
   * 예: [/^\/brand/] - /brand로 시작하는 모든 경로는 인증 필요
   */
  authProtecteds?: RegExp[];

  /**
   * 인증이 필요하지 않은 공개 경로를 정의하는 정규식 배열
   * 예: [/^\/api\//, /^\/sample\//] - /api/ 또는 /sample/로 시작하는 경로는 인증 불필요
   */
  authPublics?: RegExp[];

  /**
   * 로그인 페이지 경로
   * 인증되지 않은 사용자가 보호된 경로에 접근할 때 리다이렉트될 경로
   */
  pathLogin?: string;
}

/**
 * nextjs middleware 에서 사용하기 위한 미들웨어.
 * next-auth 에서 제공하는 "withAuth" 를 통해 callbacks.authorized 가 실행되면서 token 정보등을 전달해준다.
 * token 검증 등에 부가 처리를 하거나, path 에 따라 로그인 페이지 등으로 이동한다.
 */
export const nextAuthAuthrorized = ({
  authProtecteds = [],
  authPublics = [],
  pathLogin = "",
}: AuthorizedProps): NextAuthMiddlewareOptions => {
  return {
    callbacks: {
      authorized: ({ token, req }) => {
        try {
          // console.log('# preAuthorized:', ' hasTokenUser:', !!token?.user);
          const pathname = req.nextUrl.pathname;
          const isProtectedRoute = authProtecteds.some((p) => p.test(pathname));

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
