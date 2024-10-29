import type { QueryMetaVo } from './types';

/**
 * tanstack-query meta 타입 처리
 */
export const toQueryMeta = (meta: QueryMetaVo) => {
  return meta as Record<string, unknown> | undefined;
};

/**
 * tanstack-query 쿼리키 만들기
 */
export const toQueryKeyWithParams = <T = unknown>(base: string, params?: T) => {
  return [base, { ...params }];
};
