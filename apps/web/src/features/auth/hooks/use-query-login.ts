import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { toQueryMeta } from '@web/shared/api';

/**
 * 로그인 하기
 */
export function useQueryLogin() {
  return useMutation({
    meta: toQueryMeta({
      // globalErrorTitle: '로그인 오류',
      // globalErrorMessage: '로그인을 하지 못했습니다.',
      // disableGlobalErrorHandler: true,
    }),
    mutationFn: async (params: { username: string; password: string }) => {
      const result = await signIn('credentials', {
        redirect: false,
        ...params,
      });
      if (!result?.ok || result?.error) {
        throw new Error(result?.error || '로그인 오류');
      }
      return result;
    },
  });
}
