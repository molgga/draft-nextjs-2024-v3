import { ErrorTest1 } from '@web/features/sample-error/ui/error-test1';

export const dynamic = 'force-dynamic'; // 강제 오류 낼 거라 정적 렌더 안되게 함

export default function Page() {
  return <ErrorTest1 />;
}
