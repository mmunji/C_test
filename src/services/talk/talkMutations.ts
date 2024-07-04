import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

import { talkAPIs } from "./talkAPIs";
import { TALK_QUERY_KEYS } from "./talkQueryKeys";

export interface AddTalkParams {
  movieId: number;
  ratingValue: number;
  talk: string;
  spoiler: boolean;
  genreList: number[];
}

export function useAddTalk(setShowTalkForm: Dispatch<SetStateAction<boolean>>) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      movieId,
      ratingValue,
      talk,
      spoiler,
      genreList,
    }: AddTalkParams) => {
      const { res, data } = await talkAPIs.addTalks({
        movieId,
        star: ratingValue,
        content: talk,
        spoiler,
        genreList,
      });
      if (!res.ok) throw new Error(data?.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TALK_QUERY_KEYS.all() });

      setShowTalkForm(false);
    },
    onError: (error) => {
      alert(error);
    },
  });
}
