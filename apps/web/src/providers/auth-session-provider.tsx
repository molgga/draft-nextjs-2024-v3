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
  // SessionProvider 는 RCC 에서만 사용 가능한 것으로 보임 (getServerSession 는 RSC 에서만 사용 가능)
  return (
    <SessionProvider
      session={session}
      refetchInterval={0}
      refetchOnWindowFocus={false}
      refetchWhenOffline={false}
    >
      {children}
    </SessionProvider>
  );
}
