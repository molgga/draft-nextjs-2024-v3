export const toQuerySearchParams = (searchParams: URLSearchParams) => {
  return Object.fromEntries(searchParams.entries());
};
