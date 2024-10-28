import { Suspense, type PropsWithChildren } from 'react';

export function FullContentLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <>{children}</>
      </Suspense>
    </div>
  );
}
