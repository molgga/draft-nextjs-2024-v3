import type { Awaitable, DefaultSession, Session, User } from 'next-auth';
import type { AdapterUser } from 'next-auth/adapters';
import type { JWT } from 'next-auth/jwt';

export interface PublicUserInfo {
  accessToken?: string;
  userId?: string;
  userName?: string;
  hello?: string;
}

export type AuthorizedUser = (User | AdapterUser) & {
  user?: PublicUserInfo;
};

export type AuthorizedToken = JWT & {
  user?: PublicUserInfo;
};

export type SessionWithUser = Awaitable<Session | DefaultSession> & {
  user?: PublicUserInfo;
};
