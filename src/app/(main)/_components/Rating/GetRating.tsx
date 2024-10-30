"use client";
import Image from "next/image";

import {
  StarFillMd,
  StarFillSm,
  StarHalfMd,
  StarHalfSm,
  StarMd,
  StarSm,
} from "@/../public/icons";
interface RatingProps {
  StarRating?: number;
  ratingsize: string;
  space: boolean;
}
export default function GetRating({
  StarRating = 0,
  ratingsize,
  space,
}: RatingProps) {
  let star = StarRating;
  return (
    <div className={`flex ${space == true ? "gap-1" : ""}`}>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          if (star >= 1) {
            star--;
            return (
              <Image
                key={index}
                src={ratingsize === "Md" ? StarFillMd : StarFillSm}
                alt="별"
              />
            );
          } else if (star == 0.5) {
            star -= 0.5;
            return (
              <Image
                key={index}
                src={ratingsize === "Md" ? StarHalfMd : StarHalfSm}
                alt="별"
              />
            );
          } else {
            return (
              <Image
                key={index}
                src={ratingsize === "Md" ? StarMd : StarSm}
                alt="별"
              />
            );
          }
        })}
    </div>
  );
}
