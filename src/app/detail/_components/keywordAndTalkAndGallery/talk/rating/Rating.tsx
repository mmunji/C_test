import { useState } from "react";

import useRating from "@/app/detail/_hooks/useRating";

import RatingStar from "../RatingStar";
import DriveCommentText from "./DriveCommentText";
import TalkForm from "./talkForm/TalkForm";
import TextBeforeRating from "./TextBeforeRating";

export default function Rating() {
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
    <div className="flex w-full flex-col justify-center py-3 Tablet:py-8 Laptop:py-0">
      {driveTalkText === "" ? (
        <TextBeforeRating />
      ) : (
        <DriveCommentText
          ratingValue={ratingValue}
          driveTalkText={driveTalkText}
        />
      )}

      <div className="mx-auto mb-6 flex cursor-pointer">
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
        <button
          onClick={() => setShowTalkForm(true)}
          className="mx-auto flex h-[37px] w-[94px] items-center justify-center rounded-xl border-[1px] border-Gray Text-s-Medium"
        >
          톡 작성하기
        </button>
      )}
      {showTalkForm && <TalkForm />}
    </div>
  );
}
