import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

import {
  HalfStar,
  StarForRating,
  UnFilledStar,
} from "../../../../../../public/icons";

interface StarProps {
  index: number;
  ratingValue: number;
  setRatingValue: Dispatch<SetStateAction<number>>;
  clickedValue: boolean;
  setClickedValue: Dispatch<SetStateAction<boolean>>;
  handleDriveTalk: () => void;
}

export default function RatingStar({
  ratingValue,
  index,
  setRatingValue,
  clickedValue,
  setClickedValue,
  handleDriveTalk,
}: StarProps) {
  let src;
  let alt;

  if (ratingValue >= index + 1) {
    src = StarForRating;
    alt = "별";
  } else if (ratingValue > index && ratingValue === index + 0.5) {
    src = HalfStar;
    alt = "반 별";
  } else {
    src = UnFilledStar;
    alt = "빈 별";
  }

  return (
    <div
      className="relative"
      onMouseLeave={() => {
        if (!clickedValue) setRatingValue(0);
      }}
      onClick={() => {
        setRatingValue(ratingValue);
        handleDriveTalk();
        setClickedValue(!clickedValue);
      }}
    >
      <div
        className="absolute left-0 top-0 h-full w-1/2"
        onMouseEnter={() => {
          if (!clickedValue) setRatingValue(index + 0.5);
        }}
      />
      <div
        className="absolute right-0 top-0 h-full w-1/2"
        onMouseEnter={() => {
          if (!clickedValue) setRatingValue(index + 1);
        }}
      />
      <Image
        src={src}
        alt={alt as string}
        className="max-h-11 max-w-11 pl-1 last:pl-0"
      />
    </div>
  );
}
