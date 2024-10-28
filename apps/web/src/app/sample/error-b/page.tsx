import { WrapErrorBoundary } from '@web/features/error/ui/wrap-error-boundary';
import { ErrorTest1 } from '@web/features/sample/ui/error-test1';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <WrapErrorBoundary>
      <ErrorTest1 />
    </WrapErrorBoundary>
  );
}
