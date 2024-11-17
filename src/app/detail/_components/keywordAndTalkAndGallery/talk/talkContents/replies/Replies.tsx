import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";

import Button from "@/components/buttons/Button";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useGetReplies } from "@/services/talk/talkQueries";

import Reply from "./reply/Reply";
import ReplyForm from "./ReplyForm";

interface RepliesProps {
  movieId: number;
  parentReviewId: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setTalkId: Dispatch<SetStateAction<number | null>>;
  setShowReplies: Dispatch<SetStateAction<boolean>>;
}

export default function Replies({
  movieId,
  parentReviewId,
  setOpen,
  setTalkId,
  setShowReplies,
}: RepliesProps) {
  const { data, fetchNextPage, hasNextPage } = useGetReplies(parentReviewId);
  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: fetchNextPage,
    hasNextPage: hasNextPage,
  });

  const replies = data?.pages?.flatMap((page) => page.commentList) || [];

  return (
    <div className="ml-9 mt-2 flex flex-col Tablet:ml-14 Laptop:ml-[52px]">
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

      <div ref={ref} />
      {replies.length !== 0 && (
        <Button
          onClick={() => setShowReplies(false)}
          variant="text"
          className="ml-auto"
        >
          <p className="select-none Text-xs-Regular Tablet:Text-s-Medium">
            답글접기
          </p>
        </Button>
      )}
    </div>
  );
}
