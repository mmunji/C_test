import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

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

  const talk = `
  3줄까지만 보여줍니다. 여행은 새로운 경험과 추억을 선사하지만, 올바른
  준비가 필수입니다 올바른 준비가 필수입니다 올바른 준비가 필수입니다 올바른
  준비가 필수입니다 올바른 준비가 필수입니다 올바른 준비가 필수입니다 올바른
  준비가 필수입니다 올바른 준비가 필수입니다 올바른 준비가 필수입니다 올바른
  준비가 필수입니다 올바른 준비가 필수입니다 올바른 준비가 필수입니다 올바른
  준비가 필수입니다 올바른 준비가 필수입니다 올바른 준비가 필수입니다 올바른
  준비가 필수입니다 올바른 준비가 필수입니다 준비가 필수입니다 올바른 준비가
  필수입니다준비가 필수입니다 올바른 준비가 필수입니다준비가 필수입니다
  올바른 준비가 필수입니다준비가 필수입니다 올바른 준비가 필수입니다준비가
  필수입니다 올바른 준비가 필수입니다준비가 필수입니다 올바른 준비가
  필수입니다준비가 필수입니다 올바른 준비가 필수입니다준비가 필수입니다
  올바른 준비가 필수입니다준비가 필수입니다 올바른 준비가 필수입니다준비가
  필수입니다 올바른 준비가 필수입니다준비가 필수입니다 올바른 준비가
  필수입니다준비가 필수입니다 올바른 준비가 필수입니다준비가 필수입니다
  올바른 준비가 필수입니다준비가 필수입니다 올바른 준비가 필수입니다
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

      {!showMore && showSpoiler && (
        <button
          onClick={() => setShowMore(true)}
          className="absolute bottom-0 right-0 z-10 bg-BG pl-1 text-sm font-Regular leading-[150%] text-Gray Tablet:Text-m-Medium"
        >
          ...더보기
        </button>
      )}
    </div>
  );
}
