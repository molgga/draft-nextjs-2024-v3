import type { Awaitable, DefaultSession, Session } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

export interface PublicUserInfo {
  accessToken?: string;
  userId?: string;
  userName?: string;
  hello?: string;
}

// export type AuthorizedUser = (User | AdapterUser) & {
export interface AuthorizedUser {
  id?: string;
  username?: string;
  password?: string;
  user?: PublicUserInfo;
}

export type AuthorizedToken = JWT & {
  user?: PublicUserInfo;
};

export type SessionWithUser = Awaitable<Session | DefaultSession> & {
  user?: PublicUserInfo;
};
