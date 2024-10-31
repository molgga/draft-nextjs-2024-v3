'use client';
import { type PropsWithChildren } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { FullPanel } from '@web/widgets/panel/full-center-panel';
import { ErrorBox } from './error-box';

export function WrapErrorBoundary({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary FallbackComponent={WrapErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}

function WrapErrorFallback({ error }: FallbackProps) {
  console.log('WrapErrorFallback:', error);
  return (
    <FullPanel>
      <ErrorBox />
    </FullPanel>
  );
}
