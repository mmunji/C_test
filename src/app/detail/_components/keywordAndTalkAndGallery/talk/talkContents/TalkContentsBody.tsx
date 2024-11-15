import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import useNeedTalkMoreButton from "@/app/detail/_hooks/useNeedTalkMoreButton";
import WithLineBreak from "@/components/withLineBreak/WithLineBreak";
import { cn } from "@/utils/cn";

interface TalkContentsBodyProps {
  talk: ReviewList;
  showSpoiler: boolean;
  setShowSpoiler: Dispatch<SetStateAction<boolean>>;
}

export default function TalkContentsBody({
  talk,
  showSpoiler,
  setShowSpoiler,
}: TalkContentsBodyProps) {
  const [showMore, setShowMore] = useState(false);
  const { contentRef, showMoreButton } = useNeedTalkMoreButton({
    type: "talk",
    showSpoiler: showSpoiler,
  });

  useEffect(() => {
    if (talk.mine) {
      setShowMore(true);
    }
  }, [talk.mine]);

  return (
    <div
      className={cn(
        "relative ml-[34px] mt-2 Tablet:mb-2 Tablet:ml-14",
        talk.badgeList.length === 0 && "mt-0",
      )}
    >
      {talk.spoiler && !showSpoiler ? (
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
              "text-wrap break-words text-sm font-Regular leading-[150%] text-Gray_Orange Tablet:Text-m-Medium",
              {
                "line-clamp-3 max-h-[63px] overflow-hidden Tablet:max-h-[72px]":
                  !showMore,
              },
            )}
          >
            {WithLineBreak(talk.content)}
          </p>
        )
      )}

      {!showMore && showSpoiler && showMoreButton && (
        <button
          onClick={() => setShowMore(true)}
          className="absolute bottom-0 right-0 z-10 bg-BG pl-3 text-sm font-Regular leading-[140%] text-Gray Tablet:Text-m-Medium Laptop:bg-D1_Gray"
        >
          더보기
        </button>
      )}
    </div>
  );
}
