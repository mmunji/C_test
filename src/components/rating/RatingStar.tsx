import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

import {
  StarFillLg,
  StarFillXl,
  StarHalfLg,
  StarHalfXl,
  StarLg,
  StarXl,
} from "@/../public/icons";
import { revalidateMyPage } from "@/services/my/actions";
import { talkAPIs } from "@/services/talk/talkAPIs";
import { useAddTalk, useEditTalk } from "@/services/talk/talkMutations";
import useLoggedInStore from "@/stores/useLoggedIn";

interface StarProps {
  myTalk?: MyTalk;
  type: "main" | "detail" | "detail-edit";
  index: number;
  ratingValue: number;
  setRatingValue: Dispatch<SetStateAction<number>>;
  clickedValue: boolean;
  setClickedValue: Dispatch<SetStateAction<boolean>>;
  ratingSize: string;
  readyToRating?: boolean;
  StarReview?: boolean;
  movienm?: string;
  movieId?: number;
  genreList?: number[];
  handleMovieList?: (text: string) => void;
}

export default function RatingStar({
  myTalk,
  type,
  ratingValue,
  index,
  setRatingValue,
  clickedValue,
  setClickedValue,
  ratingSize,
  readyToRating,
  StarReview,
  movienm,
  movieId,
  genreList,
  handleMovieList,
}: StarProps) {
  let src;
  let alt;

  if (ratingValue >= index + 1) {
    if (ratingSize == "Lg") {
      src = StarFillLg;
      alt = "작은 별";
    } else {
      src = StarFillXl;
      alt = "큰 별";
    }
  } else if (ratingValue > index && ratingValue === index + 0.5) {
    if (ratingSize == "Lg") {
      src = StarHalfLg;
      alt = "작은 별";
    } else {
      src = StarHalfXl;
      alt = "큰 반 별";
    }
  } else {
    if (ratingSize == "Lg") {
      src = StarLg;
      alt = "작은 빈 별";
    } else {
      src = StarXl;
      alt = "큰 빈 별";
    }
  }

  const { mutate: addTalks } = useAddTalk(movieId as number);
  const { loggedIn } = useLoggedInStore();

  const { mutate: editTalk } = useEditTalk({
    movieId: movieId,
  });

  const AddStarReview = async (star: number) => {
    if (StarReview && loggedIn) {
      if (type === "detail") {
        addTalks({
          genreList: genreList || [],
          movieId: movieId!,
          movieName: movienm!,
          ratingValue: star,
          spoiler: false,
          talk: "",
        });
      } else if (type === "detail-edit") {
        editTalk({
          talkId: myTalk?.reviewId,
          content: "",
          movieName: movienm!,
          genreList: genreList || [],
          spoiler: false,
          star: ratingValue,
        });
      } else {
        const { data } = await talkAPIs.addTalks({
          movieName: movienm!,
          movieId: movieId!,
          star: star,
          content: "",
          spoiler: false,
          genreList: genreList || [],
        });
        if (!data.message) {
          if (type === "main") {
            ratingValue = 0;
            handleMovieList?.("별점 평가 완료! 💫");
          }
          revalidateMyPage("my");
        } else {
          alert(data.message);
        }
      }
    }
  };

  return (
    <div
      className="relative w-full"
      onMouseLeave={() => {
        if (type === "detail-edit" && myTalk) {
          if (!clickedValue) setRatingValue(myTalk.star);
        }
        if (type == "main") {
          if (!clickedValue) setRatingValue(0);
        }
      }}
      onClick={() => {
        setRatingValue(ratingValue);
        setClickedValue(!clickedValue);
        AddStarReview(ratingValue);
      }}
    >
      <div
        className="absolute left-0 top-0 h-full w-1/2"
        onMouseEnter={() => {
          if (!clickedValue) setRatingValue(index + 0.5);
        }}
        onTouchStart={() => {
          if (!clickedValue) setRatingValue(index + 0.5);
        }}
      />
      <div
        className="absolute right-0 top-0 h-full w-1/2"
        onMouseEnter={() => {
          if (!clickedValue) setRatingValue(index + 1);
        }}
        onTouchStart={() => {
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
