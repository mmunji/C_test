import { useState } from "react";

import useRating from "@/app/detail/_hooks/useRating";
import Button from "@/components/buttons/Button";
import SpeechBubble from "@/components/speechBubble/SpeechBubble";

import DriveCommentText from "./DriveCommentText";
import RatingStar from "./RatingStar";
import TalkForm from "./talkForm/TalkForm";
import TextBeforeRating from "./TextBeforeRating";

interface RatingProps {
  title: string;
}

export default function Rating({ title }: RatingProps) {
  const {
    ratingValue,
    setRatingValue,
    clickedValue,
    setClickedValue,
    driveTalkText,
    handleDriveTalk,
  } = useRating();
  const [showTalkForm, setShowTalkForm] = useState(false);

  return (
    <div className="relative flex w-full flex-col justify-center rounded-xl py-3 Tablet:py-8 Laptop:mb-6 Laptop:bg-D1_Gray Laptop:px-7 Laptop:py-8">
      {driveTalkText === "" ? (
        <TextBeforeRating title={title} />
      ) : (
        <DriveCommentText
          ratingValue={ratingValue}
          driveTalkText={driveTalkText}
        />
      )}

      <div className="mx-auto mb-6 flex cursor-pointer Laptop:mb-0">
        {[...Array(5)].map((_, i) => (
          <RatingStar
            key={i}
            {...{
              index: i,
              ratingValue,
              setRatingValue,
              clickedValue,
              setClickedValue,
              handleDriveTalk,
            }}
          />
        ))}
      </div>

      {clickedValue && !showTalkForm && (
        <>
          <Button
            variant="line"
            size="lg"
            onClick={() => setShowTalkForm(true)}
            className="mx-auto hidden bg-transparent Laptop:mt-6 Laptop:block"
          >
            톡 작성하기
          </Button>
          <Button
            variant="line"
            size="sm"
            onClick={() => setShowTalkForm(true)}
            className="mx-auto bg-transparent Laptop:hidden"
          >
            톡 작성하기
          </Button>
        </>
      )}
      {showTalkForm && <TalkForm />}

      {!clickedValue && (
        <div className="absolute bottom-0 left-1/2 w-[243px] translate-x-[-50%] translate-y-[50%] Tablet:bottom-5 Laptop:bottom-0">
          <SpeechBubble exit={clickedValue} dir="top">
            먼저 별점을 매기고 톡을 작성해주세요.
          </SpeechBubble>
        </div>
      )}
    </div>
  );
}
