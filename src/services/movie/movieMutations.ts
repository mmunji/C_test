import { useMutation, useQueryClient } from "@tanstack/react-query";
import { revalidateTag } from "next/cache";

import { movieAPIs } from "./movieAPIs";
import { MOVIE_QUERY_KEYS } from "./movieQueryKeys";

export function useBookmarkMovie(movieId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (movieId: number) => {
      const { data, res } = await movieAPIs.bookmarkMovie(movieId);

      if (!res.ok) throw new Error(data?.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: MOVIE_QUERY_KEYS.bookmark.detail(movieId),
      });
      revalidateTag("my");
    },
    onError: (error) => {
      alert(error);
    },
  });
}
