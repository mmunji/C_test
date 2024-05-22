import useRating from "@/app/detail/_hooks/useRating";

import RatingStar from "../RatingStar";
import DriveCommentText from "./DriveCommentText";
import TextBeforeRating from "./TextBeforeRating";

export default function Rating() {
  const {
    ratingValue,
    setRatingValue,
    clickedValue,
    setClickedValue,
    driveCommentText,
    handleDriveComment,
  } = useRating();

  return (
    <div className="flex w-full flex-col justify-center py-3 Tablet:py-8 Laptop:py-0">
      {driveCommentText === "" ? (
        <TextBeforeRating />
      ) : (
        <DriveCommentText
          ratingValue={ratingValue}
          driveCommentText={driveCommentText}
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
              handleDriveComment,
            }}
          />
        ))}
      </div>

      {driveCommentText !== "" && (
        <button className="mx-auto flex h-[37px] w-[94px] items-center justify-center rounded-xl border-[1px] border-Gray Text-s-Medium">
          톡 작성하기
        </button>
      )}
    </div>
  );
}
