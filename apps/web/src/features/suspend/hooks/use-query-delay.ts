import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getDelayList } from "../api/test-api";

export const useQueryDelay = () => {
  return useSuspenseQuery({
    queryKey: ["test1"],
    queryFn: () => getDelayList(),
  });
};
