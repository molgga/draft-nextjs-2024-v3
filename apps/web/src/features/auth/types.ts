import type { Awaitable, DefaultSession, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";

/**
 * 사용자의 공개 정보를 담는 인터페이스
 */
export interface PublicUserInfo {
  // 사용자 인증 토큰
  accessToken?: string;
  // 사용자 고유 ID
  userId?: string;
  // 사용자 이름
  userName?: string;
  // 테스트용 필드
  hello?: string;
}

/**
 * 인증된 사용자의 정보를 담는 인터페이스
 */
export interface AuthorizedUser {
  // 사용자 고유 식별자
  id?: string;
  // 로그인 아이디
  username?: string;
  // 로그인 비밀번호
  password?: string;
  // 사용자 공개 정보
  user?: PublicUserInfo;
}

/**
 * JWT 토큰에 포함될 사용자 정보를 확장하는 타입
 */
export type AuthorizedToken = JWT & {
  // 사용자 공개 정보
  user?: PublicUserInfo;
};

/**
 * 세션에 사용자 정보를 포함하는 확장 타입
 */
export type SessionWithUser = Awaitable<Session | DefaultSession> & {
  // 사용자 공개 정보
  user?: PublicUserInfo;
};
