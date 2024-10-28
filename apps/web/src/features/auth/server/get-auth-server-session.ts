import { getServerSession } from 'next-auth';
import { createNextAuthOptions } from './next-auth-options';

/**
 * 서버 컴포넌트에서 session 정보를 받기 위해 사용한다.
 */
export const getAuthServerSession = () =>
  getServerSession(createNextAuthOptions());
