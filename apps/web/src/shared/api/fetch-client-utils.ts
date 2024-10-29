interface ErrorProps {
  status?: number;
  message?: string;
}

/**
 * API 응답 포맷 맞추기 - 성공
 */
export function toSuccessResponse<T = unknown>(data: T) {
  return {
    data: data || null,
    error: null,
  };
}

/**
 * API 응답 포맷 맞추기 - 실패
 *
 * ! tanstack-query 사용하고 있어서 아래 throw 사용, throw 사용안하고 응답처리 해야하는 경우 사용 고려
 */
export function toErrorResponse({ status, message }: ErrorProps) {
  return {
    data: null,
    error: {
      status: status || 500,
      message: message || 'Error',
    },
  };
}

/**
 * 오류로 던지기
 * @TODO - 오류로 던지는것 메세지 처리 보완 필요 예상
 */
export function throwErrorResponse({ message }: ErrorProps) {
  throw new Error(message);
}
