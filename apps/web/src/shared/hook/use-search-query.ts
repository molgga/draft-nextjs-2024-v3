import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export const useSearchQuery = <T = Record<string, unknown>>() => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQuery = (record: T) => {
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

  return {
    pathname,
    searchParams,
    updateQuery,
  };
};
