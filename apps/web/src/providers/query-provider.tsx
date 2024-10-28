'use client';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import type { DefaultError, Query } from '@tanstack/react-query';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { QueryMetaVo } from '@web/shared/api/types';

type QueryType = Query<unknown, unknown, unknown>;

export function QueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (...pass) => onQueryCacheError(...pass),
        }),
        defaultOptions: {
          queries: {
            staleTime: 1000,
            gcTime: 1000,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: false,
          },
        },
      })
  );

  const onQueryCacheError = (error: DefaultError, query: QueryType) => {
    console.log('@TODO QueryClient error:', { error, query });
    const queryMeta = query?.meta as QueryMetaVo;
    // const isOpenLoginModal = error?
    if (queryMeta?.isRequireAuthModal) {
      // 로그인 모달 띄우기
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      {/* <HydrationBoundary state={pageProps.dehydratedState}> */}
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* </HydrationBoundary> */}
    </QueryClientProvider>
  );
}
