import { useSession } from "next-auth/react";
import type { PublicUserInfo } from "@web/features/auth/types";

/**
 * next-auth의 useSession을 사용하여 현재 인증된 사용자 정보를 가져오는 hook
 *
 * @returns 인증 관련 정보를 담은 객체
 *  - sessionStatus: 인증 상태 ('authenticated' | 'loading' | 'unauthenticated')
 *  - sessionUser: 인증된 사용자 정보. 인증되지 않은 경우 null
 *  - isLogined: 인증 여부
 */
export const useAuthUser = () => {
  const session = useSession();
  const sessionStatus = session.status;
  const sessionUser = (session.data?.user as PublicUserInfo) || null;
  const isLogined = sessionStatus === "authenticated";
  return {
    sessionStatus,
    sessionUser,
    isLogined,
  };
};
