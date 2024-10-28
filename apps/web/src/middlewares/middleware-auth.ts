import type { MiddlewareFn } from '@web/middlewares/types';

export const middlewareAuth: MiddlewareFn = async () => {
  // // 필요시 사용.
  // // getToken을 사용하여 JWT 토큰에서 세션 정보 추출, response 헤더에 추가한다.
  // const secret = process.env.NEXTAUTH_SECRET;
  // const token = (await getToken({ req: request, secret })) as AuthorizedToken;
  // if (token && token.user && token.user.accessToken) {
  //   response.headers.set(ResponseHeaderAuthTokenKey, token.user.accessToken);
  // }
};
