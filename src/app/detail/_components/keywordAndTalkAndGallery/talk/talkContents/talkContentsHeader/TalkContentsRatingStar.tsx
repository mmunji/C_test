import Image from "next/image";
import React from "react";

import {
  HalfStar,
  StarForRating,
  UnFilledStar,
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
    src = StarForRating;
    alt = "별";
  } else if (rating > index && rating === index + 0.5) {
    src = HalfStar;
    alt = "반 별";
  } else {
    src = UnFilledStar;
    alt = "빈 별";
  }

  return <Image src={src} alt={alt} className="h-4 w-4" />;
}
