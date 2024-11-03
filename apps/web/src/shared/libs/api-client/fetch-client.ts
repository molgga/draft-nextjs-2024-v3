import type { RequestInit } from "next/dist/server/web/spec-extension/request";
import type {
  RequestConfig,
  FetchResponse,
  URLSearchParamsType,
} from "@web/shared/libs/api-client/types";
import { FetchMethod, FetchCache } from "@web/shared/libs/api-client/types";
import { throwErrorResponse, toSuccessResponse } from "./fetch-client-utils";

/**
 * @TODO - fetch 써보면서 정리 필요
 */
export const fetchClient = async <T>(
  config: RequestConfig,
  init?: RequestInit,
): Promise<FetchResponse<T>> => {
  const { url, params, body } = config;
  const method = init?.method || FetchMethod.GET;
  let requestUrl = url;

  if (method.toUpperCase() === FetchMethod.GET.toString()) {
    const queryString = params
      ? new URLSearchParams(params as URLSearchParamsType).toString()
      : "";
    if (queryString) {
      requestUrl = url.includes("?")
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
  if (status !== 200) {
    const errBody = (await response.json()) as { error?: { message?: string } };
    const message = errBody?.error?.message || statusText;
    throwErrorResponse({ status, message }); // tanstack-query 사용하고 있어서 throw 처리 방식으로 사용
  }
  return toSuccessResponse<T>((await response.json()) as T);
};
