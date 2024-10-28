'use client';
import { type PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export function WrapErrorBoundary({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary FallbackComponent={WrapErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}

function WrapErrorFallback() {
  return (
    <div>
      <div>WrapErrorBoundary</div>
      <div>
        <div>error</div>
      </div>
    </div>
  );
}
