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
    <section className="mt-5 Tablet:mt-6">
      <ReplyHeader
        reply={reply}
        setOpen={setOpen}
        setTalkId={setTalkId}
        movieId={movieId}
        setEditReply={setEditReply}
      />
      <ReplyBody reply={reply} editReply={editReply} />
      <ReplyFooter
        reply={reply}
        movieId={movieId}
        parentReviewId={parentReviewId}
      />
    </section>
  );
}
