import { useQuery } from "@tanstack/react-query";

import { movieAPIs } from "./movieAPIs";
import { MOVIE_QUERY_KEYS } from "./movieQueryKeys";

export function useCheckBookmark(movieId: number) {
  return useQuery({
    queryKey: MOVIE_QUERY_KEYS.bookmark.detail(movieId),
    queryFn: () => movieAPIs.checkBookmark(movieId),
  });
}
