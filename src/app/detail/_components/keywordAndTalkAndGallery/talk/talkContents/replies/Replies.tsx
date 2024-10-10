import React, { Dispatch, SetStateAction } from "react";

import { useGetReplies } from "@/services/talk/talkQueries";

import Reply from "./reply/Reply";
import ReplyForm from "./ReplyForm";

interface RepliesProps {
  movieId: number;
  parentReviewId: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setTalkId: Dispatch<SetStateAction<number | null>>;
}

export default function Replies({
  movieId,
  parentReviewId,
  setOpen,
  setTalkId,
}: RepliesProps) {
  const { data } = useGetReplies(parentReviewId);

  const replies = data?.pages?.flatMap((page) => page.commentList) || [];

  return (
    <div className="ml-9 mt-2 Tablet:ml-14 Laptop:ml-[52px]">
      <ReplyForm parentReviewId={parentReviewId} movieId={movieId} />
      {replies.length !== 0 &&
        replies.map((reply, i) => (
          <Reply
            key={i}
            reply={reply}
            movieId={movieId}
            parentReviewId={parentReviewId}
            setOpen={setOpen}
            setTalkId={setTalkId}
          />
        ))}
    </div>
  );
}
