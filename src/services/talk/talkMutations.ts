import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { UseFormSetValue } from "react-hook-form";

import { revalidateMyPage } from "@/services/my/actions";

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
      revalidateMyPage("my");
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.myTalk(movieId),
      });
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.myStar(movieId),
      });
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

export function useLikeTalk({
  type,
  movieId,
  parentReviewId,
}: {
  type: "talk" | "reply";
  movieId?: number;
  parentReviewId?: number;
}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (talkId: number) => talkAPIs.like(talkId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.myTalk(movieId),
      });
      if (type === "talk") {
        queryClient.invalidateQueries({
          queryKey: TALK_QUERY_KEYS.infiniteTalks(movieId),
        });
      } else if (type === "reply") {
        queryClient.invalidateQueries({
          queryKey: TALK_QUERY_KEYS.infiniteMovieReplies(parentReviewId),
        });
      }
    },
  });
}

export function useDislikeTalk({
  type,
  movieId,
  parentReviewId,
}: {
  type: "talk" | "reply";
  movieId?: number;
  parentReviewId?: number;
}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (talkId: number) => talkAPIs.dislike(talkId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.myTalk(movieId),
      });
      if (type === "talk") {
        queryClient.invalidateQueries({
          queryKey: TALK_QUERY_KEYS.infiniteTalks(movieId),
        });
      } else if (type === "reply") {
        queryClient.invalidateQueries({
          queryKey: TALK_QUERY_KEYS.infiniteMovieReplies(parentReviewId),
        });
      }
    },
  });
}

interface ReplyValue {
  replyValue: string;
}

export function useAddReply({
  movieId,
  parentReviewId,
  setValue,
}: {
  movieId: number;
  parentReviewId: number;
  setValue: UseFormSetValue<ReplyValue>;
}) {
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
      revalidateMyPage("my");
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.myTalk(movieId),
      });

      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.infiniteTalks(movieId),
      });

      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.infiniteMovieReplies(parentReviewId),
      });

      setValue("replyValue", "");
    },
  });
}

export function useEditTalk(
  setClickedEdit: (clickedEditMyTalk: boolean) => void,
  movieId: number,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      talkId,
      movieName,
      star,
      content,
      spoiler,
      genreList,
    }: {
      talkId: number | undefined;
      movieName: string | undefined;
      star: number | undefined;
      content: string | undefined;
      spoiler: boolean | undefined;
      genreList: number[];
    }) =>
      talkAPIs.editTalk(talkId, movieName, star, content, spoiler, genreList),
    onSuccess: () => {
      revalidateMyPage("my");
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.myTalk(movieId),
      });
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.myStar(movieId),
      });
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.infiniteTalks(movieId),
      });

      setClickedEdit(false);
    },
  });
}
export function useEditReply(
  setEditReply: Dispatch<SetStateAction<boolean>>,
  movieId: number,
  parentReviewId: number,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      talkId,
      content,
    }: {
      talkId: number | undefined;
      content: string | undefined;
    }) => talkAPIs.editReply(talkId, content),
    onSuccess: () => {
      revalidateMyPage("my");

      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.infiniteMovieReplies(parentReviewId),
      });

      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.infiniteTalks(movieId),
      });

      setEditReply(false);
    },
  });
}

export function useRemoveTalk({
  setOpenDeleteModal,
  setClickedEdit,
  movieId,
  type,
  parentReviewId,
}: {
  setOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
  setClickedEdit?: (clickedEditMyTalk: boolean) => void;
  movieId: number;
  type: "talk" | "reply";
  parentReviewId?: number;
}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ talkId }: { talkId: number | undefined }) =>
      talkAPIs.removeTalk(talkId),
    onSuccess: () => {
      revalidateMyPage("my");
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.infiniteMovieReplies(parentReviewId),
      });
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.myTalk(movieId),
      });
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.myStar(movieId),
      });
      queryClient.invalidateQueries({
        queryKey: TALK_QUERY_KEYS.infiniteTalks(movieId),
      });
      setOpenDeleteModal(false);

      if (setClickedEdit) setClickedEdit(false);
      if (type === "talk") location.reload();
    },
  });
}

export function useReportTalk(
  setOpen: Dispatch<SetStateAction<boolean>>,
  setOpenReportComplete: Dispatch<SetStateAction<boolean>>,
) {
  return useMutation({
    mutationFn: ({
      talkId,
      category,
      content,
    }: {
      talkId?: number | null;
      category: string;
      content: string;
    }) =>
      talkAPIs.reportTalk({
        talkId: talkId,
        category: category,
        content: content,
      }),
    onSuccess: () => {
      setOpen(false);
      setOpenReportComplete(true);
    },
  });
}
