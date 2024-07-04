import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

import { keywordAPIs } from "./keywordAPIs";

interface addKeywordParams {
  movieId: number;
  value: string;
}

export function useAddKeyword(setValue: Dispatch<SetStateAction<string>>) {
  const router = useRouter();
  return useMutation({
    mutationFn: async ({ movieId, value }: addKeywordParams) => {
      const { data, res } = await keywordAPIs.addKeyword(movieId, value);
      if (!res.ok) throw new Error(data?.message);
    },
    onSuccess: () => {
      router.refresh();
      setValue("");
    },
    onError: (error) => {
      alert(error);
    },
  });
}
