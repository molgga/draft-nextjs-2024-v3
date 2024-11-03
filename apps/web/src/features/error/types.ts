/**
 * 에러 페이지에서 사용되는 props 인터페이스
 */
export interface ErrorPageProps {
  // 발생한 에러 객체
  error: Error;
  // 에러 상태를 초기화하는 함수
  reset: () => void;
  // 에러 페이지에 표시할 제목
  title?: string | React.ReactNode;
  // 에러 페이지에 표시할 메시지
  message?: string | React.ReactNode;
}
