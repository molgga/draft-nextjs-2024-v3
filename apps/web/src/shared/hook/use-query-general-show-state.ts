interface QueryGeneralShowStateProps<T> {
  isFetching?: boolean;
  isPending?: boolean;
  isError?: boolean;
  list?: T[];
}

export const useQueryGeneralShowState = <T = unknown>({
  isFetching,
  isPending,
  isError,
  list,
}: QueryGeneralShowStateProps<T>) => {
  const showIs = (() => {
    const hasList = list && list.length > 0;
    const showList = hasList;
    const showLoading = isFetching || isPending;
    const showLoadingList = showLoading && !hasList;
    const showLoadingIndicate = showLoading && hasList;
    const showError = !showLoading && isError;
    const showEmpty = !showList && !showLoading && !showError;
    return {
      showList,
      showLoading,
      showLoadingList,
      showLoadingIndicate,
      showError,
      showEmpty,
    };
  })();

  return {
    ...showIs,
  };
};
