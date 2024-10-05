import React from "react";

import { useGetReplies } from "@/services/talk/talkQueries";

import Reply from "./reply/Reply";
import ReplyForm from "./ReplyForm";

interface RepliesProps {
  movieId: number;
  parentReviewId: number;
}

export default function Replies({ movieId, parentReviewId }: RepliesProps) {
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
          />
        ))}
    </div>
  );
}
