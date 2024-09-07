import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { movieAPIs } from "./movieAPIs";

export function useBookmarkMovie() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (movieId: number) => {
      const { data, res } = await movieAPIs.bookmarkMovie(movieId);

      if (!res.ok) throw new Error(data?.message);
    },
    onSuccess: () => {
      router.refresh();
    },
    onError: (error) => {
      alert(error);
    },
  });
}
