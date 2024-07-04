import { useMutation } from "@tanstack/react-query";

import { keywordAPIs } from "./keywordAPIs";

interface addKeywordParams {
  movieId: number;
  value: string;
}

export function useAddKeyword() {
  return useMutation({
    mutationFn: async ({ movieId, value }: addKeywordParams) => {
      const { data, res } = await keywordAPIs.addKeyword(movieId, value);
      if (!res.ok) throw new Error(data?.message);
    },

    onSuccess: () => {},
    onError: (error) => {
      alert(error);
    },
  });
}
