import { useState, useEffect, startTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { ErrorPageProps } from '../types';

export const useErrorPageReset = ({ reset }: ErrorPageProps) => {
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
          reset();
          router.refresh();
        });
      }
    };
  }, [reset, router, pathname, searchParams, fullPathname]);

  return {};
};
