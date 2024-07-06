import { useInfiniteQuery } from "@tanstack/react-query";

import { talkAPIs } from "./talkAPIs";
import { TALK_QUERY_KEYS } from "./talkQueryKeys";

export function useGetTalkQuery(movieId: string) {
  return useInfiniteQuery({
    queryKey: TALK_QUERY_KEYS.infiniteMovieQueryKeys(Number(movieId)),
    queryFn: ({ pageParam }) => talkAPIs.getTalks(Number(movieId), pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.isLast ? undefined : lastPage.totalPage + 1;
    },
  });
}
