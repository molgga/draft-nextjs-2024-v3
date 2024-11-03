import { NextResponse } from "next/server";
import {
  withAuth,
  nextAuthAuthrorized,
} from "@web/middlewares/next-auth-authroized";
import { middlewareAuth, middlewareLogger } from "@web/middlewares";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

/**
 * withAuth 은 next-auth 에서 제공하는것.
 * 두번째 파라미터(nextAuthAuthrorized)에서 인증 처리를 한다.
 */
export default withAuth(
  async (request, fetchEvent) => {
    const response = NextResponse.next();
    const params = { request, response, fetchEvent };
    await middlewareLogger(params);
    await middlewareAuth(params);
    return response;
  },
  nextAuthAuthrorized({
    authProtecteds: [/^\/brand/],
    authPublics: [/^\/api\//, /^\/sample\//, /^\/auth\//],
    pathLogin: "/auth.login",
  }),
);
