"use client";
import type { PropsWithChildren } from "react";
import { useState } from "react";
import type { DefaultError, Mutation, Query } from "@tanstack/react-query";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useToast } from "@ui/hooks/use-toast";
import type { QueryMetaVo } from "@web/shared/libs/api-client/types";

type QueryErrorHandler = (
  error: DefaultError,
  query: Query<unknown, unknown, unknown>,
) => void;

type MutationErrorHandler = (
  error: DefaultError,
  variables: unknown,
  context: unknown,
  mutation: Mutation<unknown, unknown>,
) => void;

export function QueryProvider({ children }: PropsWithChildren) {
  const { toast: toastBox } = useToast();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (...pass) => onQueryCacheError(...pass),
        }),
        mutationCache: new MutationCache({
          onError: (...pass) => onMutationCacheError(...pass),
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
      }),
  );

  const onQueryCacheError: QueryErrorHandler = (error, query) => {
    console.log("QueryProvider onQueryCacheError");
    // console.log({ error, query });
    catchedWithMeta(error, query.meta as QueryMetaVo);
  };

  const onMutationCacheError: MutationErrorHandler = (
    error,
    variables,
    context,
    mutation,
  ) => {
    console.log("QueryProvider onMutationCacheError");
    // console.log({ error, variables, context, mutation });
    catchedWithMeta(error, mutation.meta as QueryMetaVo);
  };

  const catchedWithMeta = (error: DefaultError, meta?: QueryMetaVo) => {
    console.log("QueryProvider catchedWithMeta:", { error, meta });
    const {
      disableGlobalErrorHandler = false,
      globalErrorTitle,
      globalErrorMessage,
    } = meta || {};
    if (!disableGlobalErrorHandler) {
      const title = globalErrorTitle;
      const description =
        globalErrorMessage || error?.message || "오류가 있습니다.";
      toastBox({ variant: "destructive", title, description });
    }
    // if (requireAuthModal) {
    // 로그인 모달 띄우기
    // }
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
