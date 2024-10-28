'use client';
import { type PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

interface AuthSessionProviderProps extends PropsWithChildren {
  session?: Session | null;
}

export function AuthSessionProvider({
  session,
  children,
}: AuthSessionProviderProps) {
  return (
    <SessionProvider
      session={session} // null 을 주지 않으면 session 을 2번 체크 하는것 같은데.. 확인 중
      refetchInterval={0}
      refetchOnWindowFocus={false}
      refetchWhenOffline={false}
    >
      {children}
    </SessionProvider>
  );
}
