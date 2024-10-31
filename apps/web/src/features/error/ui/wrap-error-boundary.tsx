'use client';
import {
  startTransition,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { FullPanel } from '@web/widgets/panel/full-center-panel';
import { ErrorBox } from './error-box';

export function WrapErrorBoundary({ children }: PropsWithChildren) {
  console.log('WrapErrorBoundary');
  return (
    <ErrorBoundary FallbackComponent={WrapErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}

function WrapErrorFallback({ resetErrorBoundary }: FallbackProps) {
  console.log('WrapErrorFallback:');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [fullPathname] = useState(
    () => `${pathname}?${searchParams.toString()}`
  );

  useEffect(() => {
    return () => {
      const currentPath = `${pathname}?${searchParams.toString()}`;
      if (fullPathname === currentPath) {
        // https://www.youtube.com/watch?v=idEL0dv2V1A
        startTransition(() => {
          resetErrorBoundary();
          router.refresh();
        });
      }
    };
  }, [resetErrorBoundary, router, pathname, searchParams, fullPathname]);

  return (
    <FullPanel>
      <ErrorBox />
    </FullPanel>
  );
}
