import { FetchCache, fetchClient, FetchMethod } from '@web/shared/api';
import type {
  NoticeCreateReq,
  NoticeCreateRes,
  NoticeDetailReq,
  NoticeDetailRes,
  NoticeListReq,
  NoticeListRes,
} from '@web/features/notice/types';

export const getNoticeDetail = async (params: NoticeDetailReq) => {
  const { id } = params;
  const url = `http://localhost:3000/api/mock/notice/${id}`;
  const response = await fetchClient<NoticeDetailRes>(
    { url },
    {
      method: FetchMethod.GET,
      // cache: FetchCache.NoStore,
      next: { revalidate: 1 },
    }
  );
  return response;
};

export const getNoticeList = async (params: NoticeListReq) => {
  console.log('getNoticeList', params);
  const url = `http://localhost:3000/api/mock/notice/list`;
  const response = await fetchClient<NoticeListRes>(
    { url },
    {
      method: FetchMethod.GET,
      cache: FetchCache.NoStore,
      // next: { revalidate: 1 },
    }
  );
  return response;
};

export const createNotice = async (params: NoticeCreateReq) => {
  console.log('createNotice', params);
  const url = `http://localhost:3000/api/mock/notice/create`;
  const response = await fetchClient<NoticeCreateRes>(
    { url, body: JSON.stringify(params) },
    {
      method: FetchMethod.POST,
      cache: FetchCache.NoStore,
      // next: { revalidate: 1 },
    }
  );
  return response;
};
