import { useInfiniteQuery } from "@tanstack/react-query";

import { talkAPIs } from "./talkAPIs";
import { TALK_QUERY_KEYS } from "./talkQueryKeys";

export function useGetTalkQuery(movieId: number) {
  return useInfiniteQuery({
    queryKey: TALK_QUERY_KEYS.infiniteMovieQueryKeys(movieId),
    queryFn: ({ pageParam }) => talkAPIs.getTalks(movieId, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.isLast ? undefined : lastPage.totalPage + 1;
    },
  });
}
