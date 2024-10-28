/**
 * API 클라이언트 meta 타입 정의
 */
export interface QueryMetaVo {
  isRequireAuthModal?: boolean; // true = 에러일 때 로그인 모달 열지 여부
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
