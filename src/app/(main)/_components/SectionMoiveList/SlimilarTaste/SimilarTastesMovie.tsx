"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";

import SimilarTasteReviewers from "@/app/(main)/_components/SectionMoiveList/SlimilarTaste/SimilarTasteReviewers";
import Button from "@/components/buttons/Button";
import SpeechBubble from "@/components/speechBubble/SpeechBubble";
import { tokenManager } from "@/services/auth/tokenManager";

import {
  ChevronLeftMd,
  ChevronRightMdSvgr,
} from "../../../../../../public/icons";
import SlimilarPost from "./SlimilarPost";

interface SimilarTastesMovieType {
  reviewUsers: MovieReviewRecommed[];
}

export default function SimilarTastesMovie({
  reviewUsers,
}: SimilarTastesMovieType) {
  const [pickUserNumber, setPickUserNumber] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperClass>();
  const accessToken = tokenManager.getToken();
  const [message, setmessage] = useState(
    "로그인하면 맞춤형으로 추천받을 수 있어요.",
  );
  const [title, settitle] = useState("다른 사람들은 이런 영화를 평가했어요");
  const changePickNumber = (index: number) => {
    setPickUserNumber(index);
  };

  const selectedReviewer = reviewUsers[pickUserNumber];

  useEffect(() => {
    if (accessToken) {
      setmessage("톡을 많이 작성할수록 내 취향에 비슷해져요.");
      settitle("나와 취향이 비슷한 사람들");
    }
  }, [accessToken]);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className=" relative flex   flex-col gap-5 Tablet:flex-row Tablet:items-center">
          <h2 className="Text-l-Bold Laptop:Text-xxl-Bold ">{title}</h2>
          <div className="absolute -bottom-11 block w-max Tablet:hidden">
            <SpeechBubble id={"SimilarTastesMovie"} dir="top">
              {message}
            </SpeechBubble>
          </div>
          <div className="hidden Tablet:block">
            <SpeechBubble id={"SimilarTastesMovie"} dir="left">
              {message}
            </SpeechBubble>
          </div>
        </div>
        {!(swiper?.isBeginning && swiper?.isEnd) && (
          <div className="hidden gap-1 Laptop:flex">
            <Button onClick={() => swiper?.slidePrev()} variant={"arrow2"}>
              <Image
                src={ChevronLeftMd}
                alt="arrowRight"
                height={24}
                width={24}
                className="h-6 w-6 "
              />
            </Button>
            <Button onClick={() => swiper?.slideNext()} variant={"arrow2"}>
              <ChevronRightMdSvgr stroke="#E9E9E9" />
            </Button>
          </div>
        )}{" "}
      </div>
      <div className="flex flex-col gap-4">
        <SimilarTasteReviewers
          setSwiper={setSwiper}
          changePickNumber={changePickNumber}
          pickUserNumber={pickUserNumber}
          reviewUsers={reviewUsers}
        />
        <SlimilarPost
          key={pickUserNumber}
          selectedReviewer={selectedReviewer}
        />
      </div>
    </div>
  );
}
