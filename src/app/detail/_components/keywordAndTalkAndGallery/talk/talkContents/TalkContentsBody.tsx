import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

import useNeedTalkMoreButton from "@/app/detail/_hooks/useNeedTalkMoreButton";

interface TalkContentsBodyProps {
  spoiler: boolean;
  showSpoiler: boolean;
  setShowSpoiler: Dispatch<SetStateAction<boolean>>;
}

export default function TalkContentsBody({
  spoiler,
  showSpoiler,
  setShowSpoiler,
}: TalkContentsBodyProps) {
  const [showMore, setShowMore] = useState(false);
  const { contentRef, showMoreButton } = useNeedTalkMoreButton(
    "talk",
    showSpoiler,
  );

  const talk = `
  3줄까지만 보여줍니다. 여행은 새로운 경험과 추억을 선사하지만, 올바른
  준비가 필수입니다 올바른 준비가 필수입니다 올바른 준비가 필수입니다 올바른
  준비가 필수입니다 올바른 준비가 필수입니다 올바른 준비가 필수입니다 올바른
  준비가 필수입니다 올바른 준비가 필수입니다 올바른 준비가 필수입니다 올바른
  `;

  return (
    <div className="relative ml-[34px] mt-2 Tablet:mb-2 Tablet:ml-14">
      {spoiler && !showSpoiler ? (
        <section className="flex gap-2">
          <p className="text-Primary Text-s-Regular Tablet:Text-m-Medium">
            스포일러가 담겨있어요.
          </p>
          <button
            onClick={() => setShowSpoiler(true)}
            className="text-Primary Text-s-Regular Text-s-Regular Tablet:Text-m-Medium"
          >
            보기
          </button>
        </section>
      ) : (
        showSpoiler && (
          <p
            ref={contentRef}
            className={clsx(
              "text-sm font-Regular leading-[150%] text-Gray_Orange Tablet:Text-m-Medium",
              {
                "line-clamp-3 max-h-[63px] overflow-hidden Tablet:max-h-[72px]":
                  !showMore,
              },
            )}
          >
            {talk}
          </p>
        )
      )}

      {!showMore && showSpoiler && showMoreButton && (
        <button
          onClick={() => setShowMore(true)}
          className="absolute bottom-0 right-0 z-10 bg-BG pl-2 text-sm font-Regular leading-[140%] text-Gray Tablet:Text-m-Medium Laptop:bg-D1_Gray"
        >
          ...더보기
        </button>
      )}
    </div>
  );
}
