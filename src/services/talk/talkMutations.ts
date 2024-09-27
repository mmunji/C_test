import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { UseFormSetValue } from "react-hook-form";

import { talkAPIs } from "./talkAPIs";
import { TALK_QUERY_KEYS } from "./talkQueryKeys";

export interface AddTalkParams {
  movieName: string;
  movieId: number;
  ratingValue: number;
  talk: string;
  spoiler: boolean;
  genreList: number[];
}

export function useAddTalk(
  movieId: number,
  setShowTalkForm: Dispatch<SetStateAction<boolean>>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      movieName,
      movieId,
      ratingValue,
      talk,
      spoiler,
      genreList,
    }: AddTalkParams) => {
      const { res, data } = await talkAPIs.addTalks({
        movieName,
        movieId,
        star: ratingValue,
        content: talk,
        spoiler,
        genreList,
      });
      if (!res.ok) throw new Error(data?.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.infiniteTalks(movieId),
      });

      setShowTalkForm(false);
    },
    onError: (error) => {
      alert(error);
    },
  });
}

export function useLikeTalk(movieId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (talkId: number) => talkAPIs.like(talkId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.infiniteTalks(movieId),
      });
    },
  });
}

export function useDislikeTalk(movieId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (talkId: number) => talkAPIs.dislike(talkId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.infiniteTalks(movieId),
      });
    },
  });
}

interface ReplyValue {
  replyValue: string;
}

export function useAddReply(
  movieId: number,
  setValue: UseFormSetValue<ReplyValue>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      parentReviewId,
      content,
    }: {
      parentReviewId: number;
      content: string;
    }) => talkAPIs.addReply(parentReviewId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.infiniteTalks(movieId),
      });

      setValue("replyValue", "");
    },
  });
}
