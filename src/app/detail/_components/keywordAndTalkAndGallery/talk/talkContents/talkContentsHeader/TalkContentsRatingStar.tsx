import Image from "next/image";
import React from "react";

import {
  StarFillSm,
  StarHalfSm,
  StarSm,
} from "../../../../../../../../public/icons";

interface TalkContentsRatingStarProps {
  rating: number;
  index: number;
}

export default function TalkContentsRatingStar({
  rating,
  index,
}: TalkContentsRatingStarProps) {
  let src;
  let alt;

  if (rating >= index + 1) {
    src = StarFillSm;
    alt = "별";
  } else if (rating > index && rating === index + 0.5) {
    src = StarHalfSm;
    alt = "반 별";
  } else {
    src = StarSm;
    alt = "빈 별";
  }

  return <Image unoptimized src={src} alt={alt} className="h-4 w-4" />;
}
