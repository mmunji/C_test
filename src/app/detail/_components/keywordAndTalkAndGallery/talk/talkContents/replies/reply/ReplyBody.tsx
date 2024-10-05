import clsx from "clsx";
import React, { useState } from "react";

import useNeedTalkMoreButton from "@/app/detail/_hooks/useNeedTalkMoreButton";

interface ReplyBodyProps {
  reply: ReviewList;
}

export default function ReplyBody({ reply }: ReplyBodyProps) {
  const [showMore, setShowMore] = useState(false);
  const { contentRef, showMoreButton } = useNeedTalkMoreButton("reply");

  const replyContent = `${reply.content}`;

  return (
    <div className="relative mt-[6px] Tablet:mt-2">
      <p
        ref={contentRef}
        className={clsx(
          "text-Gray_Orange Text-s-Regular Tablet:Text-m-Medium",
          {
            "line-clamp-3 max-h-[63px] overflow-hidden Tablet:max-h-[72px]":
              !showMore,
          },
        )}
      >
        {replyContent}
      </p>
      {!showMore && showMoreButton && (
        <button
          onClick={() => setShowMore(true)}
          className="absolute bottom-0 right-0 bg-BG pl-2 text-Gray Text-m-Medium Text-s-Medium Tablet:bg-D1_Gray"
        >
          ...더보기
        </button>
      )}
    </div>
  );
}
