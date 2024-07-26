"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SpeechBubble from "@/components/speechBubble/SpeechBubble";
import { movieAPIs } from "@/services/movie/movieAPIs";

import SlimilarPost from "./SlimilarPost";

export default function SimilarTastesMoive() {
  const [PickUserNumber, setPickUserNumber] = useState<number>(0);

  const [ReviewUsers, setReviewUsers] = useState([]);
  const ChangePickNumber = (index: number) => {
    setPickUserNumber(index);
  };
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // 실제 API 호출로 `movieAPIs.getHidingPiece`를 대체합니다.
        const response = await movieAPIs.getMovieReviewUser();
        console.log(response);
      } catch (error) {
        console.error("영화를 가져오는 중 오류 발생:", error);
      }
    };

    fetchMovie();
  }, []);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <h1 className="Text-l-Bold Laptop:Text-xxl-Bold ">
          다른 사람들은 이런 영화를 평가했어요
        </h1>
        <SpeechBubble dir="left">
          로그인 하고 별을 눌러 평가해보세요 :)
        </SpeechBubble>
      </div>
      <div className="flex gap-4 Laptop:hidden">
        <Swiper slidesPerView="auto" spaceBetween={20}>
          {Array(10)
            .fill(0)
            .map((_, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{ height: "81px", width: "60px" }}
                >
                  <div
                    className={`h-[60px] w-[60px] rounded-[60px] border-2 bg-white  ${PickUserNumber == index ? "border-Primary" : "border-transparent"}`}
                    onClick={() => ChangePickNumber(index)}
                  />
                  <span className="mt-1 flex items-center justify-center Text-xs-Regular">
                    닉네임
                  </span>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <SlimilarPost />
    </div>
  );
}
