import { type PropsWithChildren } from 'react';
import { getAuthServerSession } from '@web/features/auth/server';
import { AuthSessionProvider } from '@web/providers/auth-session-provider';

export async function AuthProvider({ children }: PropsWithChildren) {
  // 서버에서 정보를 가져와서 클라이언트 쪽으로 넘겨준다.
  const serverSession = await getAuthServerSession();

  return (
    <AuthSessionProvider session={serverSession}>
      {children}
    </AuthSessionProvider>
  );
}
