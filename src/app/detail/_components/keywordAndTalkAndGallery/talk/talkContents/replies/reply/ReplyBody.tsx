import clsx from "clsx";
import React, { useState } from "react";

import useNeedTalkMoreButton from "@/app/detail/_hooks/useNeedTalkMoreButton";

export default function ReplyBody() {
  const [showMore, setShowMore] = useState(false);
  const { contentRef, showMoreButton } = useNeedTalkMoreButton("reply");

  const reply = `
  3줄까지만 보여줍니다. 여행은 새로운 경험과 추억을 선사하지만, 올바른
  준비가 필수입니다. 이번 블로그 포스트에서는 여행자가 가져가야 할 10가지
  필수 아이템을 상세히 소개합니다. 첫째, 편안한 여행을 위한 양질의 여행
  가방. 두 번째는 다양한 환경에 대비할 수 있는 다용도 의류. 세 번째
  `;

  return (
    <div className="relative mt-[6px] Tablet:mt-2">
      <p
        ref={contentRef}
        className={clsx(
          "text-Gray_Orange Text-s-Regular Tablet:Text-m-Medium",
          {
            "line-clamp-3 h-[63px] overflow-hidden Tablet:h-[72px]": !showMore,
          },
        )}
      >
        {reply}
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
