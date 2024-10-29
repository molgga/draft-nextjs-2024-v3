import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';

export const toQueryKeyWithParams = <T = unknown>(base: string, params?: T) => {
  return [base, { ...params }];
};

export function useQueryLogin() {
  return useMutation({
    mutationFn: (params: { username: string; password: string }) => {
      return signIn('credentials', { redirect: false, ...params });
    },
  });
}
