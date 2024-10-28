import { useQuery, keepPreviousData, useMutation } from '@tanstack/react-query';
// import {
//   dehydrate,
//   keepPreviousData,
//   QueryClient,
//   useMutation,
//   useQuery,
// } from '@tanstack/react-query';
import * as NoticeApi from '@web/features/notice/api/notice-api';
import { toNoticeItem } from '@web/features/notice/model/notice-item.model';
import type { NoticeListReq } from '@web/features/notice/types';

export const toQueryKeyWithParams = <T = unknown>(base: string, params?: T) => {
  return [base, { ...params }];
};

/**
 * 목록 가져오기
 */
export function useQueryNoticeList(params: NoticeListReq, enabled = true) {
  return useQuery({
    queryKey: toQueryKeyWithParams('notice-list', params),
    queryFn: () => NoticeApi.getNoticeList(params),
    placeholderData: keepPreviousData,
    enabled,
    select: (data) => {
      const { total, list } = data.data || {};
      return {
        total,
        list: (list || []).map((vo) => toNoticeItem(vo)),
      };
    },
  });
}

export function useQueryNoticeCreate() {
  return useMutation({
    mutationKey: toQueryKeyWithParams('notice-create'),
    mutationFn: NoticeApi.createNotice,
    onSuccess: () => {
      // toast.success('저장되었습니다.', {
      //   autoClose: 1500,
      //   hideProgressBar: true,
      // });
      console.log('success');
    },
    onError: (err) => {
      // toast.error(err?.message || '처리하지 못했습니다.', {
      //   autoClose: 3000,
      // });
      console.log('error', err);
    },
  });
}
