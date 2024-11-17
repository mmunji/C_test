import React, { Dispatch, SetStateAction, useState } from "react";

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
  const [editReply, setEditReply] = useState(false);

  return (
    <section className="mt-2 Tablet:mt-3">
      <ReplyHeader
        reply={reply}
        setOpen={setOpen}
        setTalkId={setTalkId}
        movieId={movieId}
        setEditReply={setEditReply}
        parentReviewId={parentReviewId}
      />
      <ReplyBody
        reply={reply}
        editReply={editReply}
        setEditReply={setEditReply}
        movieId={movieId}
        parentReviewId={parentReviewId}
      />
      <ReplyFooter
        reply={reply}
        movieId={movieId}
        parentReviewId={parentReviewId}
      />
    </section>
  );
}
