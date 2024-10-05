import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

import { tokenManager } from "../auth/tokenManager";
import { keywordAPIs } from "./keywordAPIs";
import { KEYWORD_QUERY_KEYS } from "./keywordQueryKeys";

interface addKeywordParams {
  movieId: number;
  value: string;
}

export function useAddKeyword(
  setValue: Dispatch<SetStateAction<string>>,
  movieId: number,
) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const accessToken = tokenManager.getToken();
  return useMutation({
    mutationFn: async ({ movieId, value }: addKeywordParams) => {
      const { data, res } = await keywordAPIs.addKeyword(movieId, value);
      if (!res.ok) throw new Error(data?.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: KEYWORD_QUERY_KEYS.myKeyword(accessToken, movieId),
      });
      router.refresh();
      setValue("");
    },
    onError: (error) => {
      alert(error);
    },
  });
}
