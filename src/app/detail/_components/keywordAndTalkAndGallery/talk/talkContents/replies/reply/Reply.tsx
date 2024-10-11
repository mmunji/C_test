import React, { Dispatch, SetStateAction } from "react";

import ReplyBody from "./ReplyBody";
import ReplyFooter from "./ReplyFooter";
import ReplyHeader from "./ReplyHeader";

interface ReplyProps {
  reply: ReviewList;
  movieId: number;
  parentReviewId: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setTalkId: Dispatch<SetStateAction<number | null>>;
}

export default function Reply({
  reply,
  movieId,
  parentReviewId,
  setOpen,
  setTalkId,
}: ReplyProps) {
  return (
    <section className="mt-5 Tablet:mt-6">
      <ReplyHeader reply={reply} setOpen={setOpen} setTalkId={setTalkId} />
      <ReplyBody reply={reply} />
      <ReplyFooter
        reply={reply}
        movieId={movieId}
        parentReviewId={parentReviewId}
      />
    </section>
  );
}
