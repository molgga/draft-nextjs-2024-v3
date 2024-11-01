/**
 * API 클라이언트 meta 타입 정의
 */
export interface QueryMetaVo {
  requireAuthModal?: boolean; // true = 에러일 때 로그인 모달 열지 여부
  disableGlobalErrorHandler?: boolean; // 전역 에러 핸들러 처리 안하기(직접 핸들링)
  globalErrorTitle?: string;
  globalErrorMessage?: string;
}

export type URLSearchParamsType =
  | Record<string, string>
  | string
  | string[][]
  | URLSearchParams
  | undefined;

export type RequestParams<
  K extends string | number | symbol,
  V = unknown,
> = Record<K, V>;

export interface RequestConfig {
  url: string;
  params?: RequestParams<string>;
  body?: BodyInit | null;
}

export enum FetchMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
}

// https://nextjs.org/docs/app/building-your-application/caching
// https://github.com/vercel/next.js/issues/57632
// https://github.com/vercel/next.js/issues/55960
// @TODO - next.config.js { experimental: { staleTimes }} 캐싱 관련 설정값 확인 필요
// @TODO - 15 버전에서는 기본 캐싱 안걸리게 바뀐다는것 같은데 문서 찾아보기
export enum FetchCache {
  ForceCache = 'force-cache', // 캐싱 한다.
  NoStore = 'no-store', // 캐싱 안한다.
  NoCache = 'no-cache',
  OnlyIfCached = 'only-if-cached',
  Reload = 'reload',
}
export interface FetchResponse<D, E = FetchErrorVo> {
  data?: D | null;
  error?: E | null;
}

export interface FetchErrorVo {
  status: number;
  message: string;
}
