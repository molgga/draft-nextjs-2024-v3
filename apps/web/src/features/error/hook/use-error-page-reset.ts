import { useState, useEffect, startTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ErrorPageProps } from "../types";

/**
 * 에러 페이지의 상태를 초기화하는 훅
 * - 에러 페이지가 언마운트될 때 현재 경로가 에러가 발생한 경로와 동일하다면 상태를 초기화
 */
export const useErrorPageReset = ({ reset }: ErrorPageProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [fullPathname] = useState(
    () => `${pathname}?${searchParams.toString()}`,
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
