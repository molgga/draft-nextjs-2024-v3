import {
  FetchCache,
  fetchClient,
  FetchMethod,
} from "@web/shared/libs/api-client";

/**
 */
export const getDelayList = async () => {
  console.log("getDelayList");
  const url = "http://localhost:3000/api/delay";
  const response = await fetchClient(
    { url },
    {
      method: FetchMethod.GET,
      // cache: FetchCache.NoCache,
      // next: { revalidate: 1 },
    },
  );
  return response;
};
