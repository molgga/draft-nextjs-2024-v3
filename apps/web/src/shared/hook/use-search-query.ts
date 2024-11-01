import { useEffect, useMemo, useRef } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface SearchQueryChangeVo {
  fullPathname: string;
}

type SearchQueryChangeCallback = (vo: SearchQueryChangeVo) => void;

export const useSearchQuery = <T = Record<string, unknown>>() => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fnSearchQueryChange = useRef<SearchQueryChangeCallback>();

  const fullPathname = useMemo(() => {
    return `${pathname}?${searchParams.toString()}`;
  }, [pathname, searchParams]);

  const updateSearchQuery = (record: T) => {
    const addRecord: Record<string, string> = {};
    for (const key in record) {
      const v = record[key];
      if (v !== undefined) {
        addRecord[key] = String(v);
      }
    }
    const queryString = new URLSearchParams({
      ...Object.fromEntries(searchParams),
      ...addRecord,
    }).toString();
    router.push(`${pathname}?${queryString}`);
  };

  const onSearchQueryChange = (fn: SearchQueryChangeCallback) => {
    fnSearchQueryChange.current = fn;
  };

  useEffect(() => {
    if (fnSearchQueryChange.current) {
      fnSearchQueryChange.current({ fullPathname });
    }
  }, [fullPathname]);

  return {
    pathname,
    searchParams,
    updateSearchQuery,
    onSearchQueryChange,
  };
};
