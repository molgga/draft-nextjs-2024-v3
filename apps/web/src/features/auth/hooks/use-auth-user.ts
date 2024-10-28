import { useSession } from 'next-auth/react';
import type { PublicUserInfo } from '@web/features/auth/types';

export const useAuthUser = () => {
  const session = useSession();
  const sessionStatus = session.status;
  const sessionUser = (session.data?.user as PublicUserInfo) || null;
  const isLogined = sessionStatus === 'authenticated';

  return {
    sessionStatus,
    sessionUser,
    isLogined,
  };
};
