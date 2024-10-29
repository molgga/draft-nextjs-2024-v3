import type { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import type {
  PublicUserInfo,
  AuthorizedUser,
  AuthorizedToken,
  SessionWithUser,
} from '../types';

/**
 * [!중요] next-auth 로그인 설정
 * 로그인 기능 처리와 서버 세션 정보를 받기 위한 옵션(설정)
 *
 *  - app/api/auth/[...nextauth] 에서 NextAuth 를 생성한다.
 *  - get-auth-server-session 에서 해당 설정 값을 사용해서 서버용 세션 정보를 받을 수 있는 핸들러를 랩핑한다.
 */
export const createNextAuthOptions = (): NextAuthOptions => ({
  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
  },
  session: {
    strategy: 'jwt',
    // strategy: 'session',
    maxAge: 60 * 10, // 60 * 60 * 3 (3시간)
  },
  providers: [
    Credentials({
      name: 'Credentials!',
      credentials: {
        username: { label: '로그인 ID' }, // loginId, userId 와 같이 하면 안되고 username, password 로 고정
        password: { label: '로그인 비밀번호' },
      },
      authorize: (credentials) => {
        const { username, password } = credentials || {};
        console.log('next-auth # authorize:', credentials);
        if (Boolean(username) && Boolean(password)) {
          return {
            id: '_', // https://stackoverflow.com/questions/70990262/how-to-write-authorize-function-correctly-in-typescript-for-nextauthjs
            username,
            password,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log('next-auth # callbacks signIn');
      try {
        const authorizedUser = user as AuthorizedUser;
        // API 요청 및 확인
        const response = await new Promise<PublicUserInfo>((resolve) => {
          setTimeout(() => {
            resolve({
              accessToken: `TEST_TOKEN_${Date.now().toString()}`,
              userId: Math.ceil(Math.random() * 9999).toString(),
              userName: '테스터이름',
            });
          }, 1000);
        });

        if (authorizedUser.username !== 'testuser') {
          throw new Error('일치하는 회원 정보가 없습니다.');
        }

        if (response.accessToken) {
          // 로그인 성공 + 사용자 정보 중 노출 되어도(화면 표시 등) 상관없는 정보 추가
          authorizedUser.user = { ...response };
          return true;
        }
      } catch (err) {
        console.error(err);
        throw err;
      }
      return false;
    },

    jwt({ trigger, token, user }) {
      console.log('next-auth # callbacks jwt');
      try {
        const authorizedUser = user as AuthorizedUser;
        const authorizedToken = token as AuthorizedToken;
        if (trigger === 'signIn' && authorizedUser) {
          // 로그인 사용자 정보 토큰에 옮김
          authorizedToken.user = { ...authorizedUser.user };
        }
      } catch (err) {
        token.error = 'JWT_ERROR';
      }
      return token;
    },

    session({ session, token }): SessionWithUser {
      console.log('next-auth # callbacks session');
      const authorizedToken = token as AuthorizedToken;
      // 로그인 사용자 정보 세션 정보에 포함해서 내려줌
      return {
        ...session,
        user: { ...authorizedToken.user },
      };
    },
  },
});
