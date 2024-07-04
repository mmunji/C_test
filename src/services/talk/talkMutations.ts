import { useMutation } from "@tanstack/react-query";

import { talkAPIs } from "./talkAPIs";

export interface AddTalkParams {
  movieId: number;
  ratingValue: number;
  talk: string;
  spoiler: boolean;
}

export function useAddTalk() {
  return useMutation({
    mutationFn: async ({
      movieId,
      ratingValue,
      talk,
      spoiler,
    }: AddTalkParams) => {
      const { res, data } = await talkAPIs.addTalks({
        movieId,
        star: ratingValue,
        content: talk,
        spoiler,
      });
      if (!res.ok) throw new Error(data?.message);
    },
    onSuccess: () => {},
    onError: (error) => {
      alert(error);
    },
  });
}
