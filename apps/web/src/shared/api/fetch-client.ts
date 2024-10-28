import type { RequestInit } from 'next/dist/server/web/spec-extension/request';
import type {
  RequestConfig,
  FetchResponse,
  URLSearchParamsType,
} from '@web/shared/api/types';
import { FetchMethod, FetchCache } from '@web/shared/api/types';

export const fetchClient = async <T>(
  config: RequestConfig,
  init?: RequestInit
): Promise<FetchResponse<T>> => {
  const { url, params, body } = config;
  const method = init?.method || FetchMethod.GET;
  let requestUrl = url;

  if (method.toUpperCase() === FetchMethod.GET.toString()) {
    const queryString = params
      ? new URLSearchParams(params as URLSearchParamsType).toString()
      : '';
    if (queryString) {
      requestUrl = url.includes('?')
        ? `${url}&${queryString}`
        : `${url}?${queryString}`;
    }
  }

  const cache = init?.cache
    ? init.cache
    : init?.next?.revalidate
      ? undefined
      : FetchCache.NoStore;

  const response = await fetch(requestUrl, {
    method,
    body,
    cache, // FetchCacheType.ForceCache,
    ...init,
    next: {
      // revalidate: 3,
      ...init?.next,
    },
  });

  const { status, statusText } = response;
  try {
    if (status !== 200) {
      return toErrorResponse({ status, statusText });
    }
    return toSuccessResponse<T>((await response.json()) as T);
  } catch (err) {
    return toErrorResponse({
      status: 500,
      statusText: (err as { message: string })?.message,
    });
  }
};

function toSuccessResponse<T = unknown>(data: T) {
  return {
    data: data || null,
    error: null,
  };
}

function toErrorResponse({
  status,
  statusText,
}: {
  status?: number;
  statusText?: string;
}) {
  return {
    data: null,
    error: {
      status: status || 500,
      message: statusText || 'Error',
    },
  };
}
