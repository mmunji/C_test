"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SpeechBubble from "@/components/speechBubble/SpeechBubble";
import useDevice from "@/hooks/useDevice";
import { tokenManager } from "@/services/auth/tokenManager";
import { movieAPIs } from "@/services/movie/movieAPIs";

import SlimilarPost from "./SlimilarPost";
export default function SimilarTastesMoive() {
  const [PickUserNumber, setPickUserNumber] = useState<number>(0);
  const { device } = useDevice();
  const [ReviewUsers, setReviewUsers] = useState<MovieReviewRecommed[]>([]);
  const accessToken = tokenManager.getToken();
  const [message, setmessage] = useState(
    "로그인 하고 별을 눌러 평가해보세요 :",
  );
  const ChangePickNumber = (index: number) => {
    setPickUserNumber(index);
  };
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // 실제 API 호출로 `movieAPIs.getHidingPiece`를 대체합니다.
        const response = await movieAPIs.getPeopleReviewers();
        setReviewUsers(response);
      } catch (error) {
        console.error("영화를 가져오는 중 오류 발생:", error);
      }
    };
    if (accessToken) {
      setmessage("톡을 많이 작성할수록 내 취향에 비슷해져요.");
    }
    fetchMovie();
  }, []);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 Tablet:flex-row Tablet:items-center">
        <h1 className="Text-l-Bold Laptop:Text-xxl-Bold ">
          다른 사람들은 이런 영화를 평가했어요
        </h1>
        {device == "mobile" ? (
          <SpeechBubble dir="top">{message}</SpeechBubble>
        ) : (
          <SpeechBubble dir="left">{message}</SpeechBubble>
        )}
      </div>
      <div className="flex gap-4 Laptop:hidden">
        <Swiper slidesPerView="auto" spaceBetween={20}>
          {Array.isArray(ReviewUsers) && ReviewUsers.length > 0
            ? ReviewUsers.map((Review, index) => {
                return (
                  <SwiperSlide key={index} className=" w-[60px]">
                    <div
                      className={`h-[60px] w-[60px] rounded-[60px] border-2 bg-white  ${PickUserNumber == index ? "border-Primary" : "border-transparent"} `}
                      onClick={() => ChangePickNumber(index)}
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0) 100%), url(data:image/jpeg;base64,${Review.profile}`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <span
                      className={`mt-1 line-clamp-1 text-center  ${PickUserNumber == index ? " Text-xs-Bold" : "Text-xs-Regular"} `}
                    >
                      {Review.nickname}
                    </span>
                  </SwiperSlide>
                );
              })
            : ""}
        </Swiper>
      </div>
      <SlimilarPost
        PickUserNumber={PickUserNumber}
        setPickUserNumber={setPickUserNumber}
        ReviewUsers={ReviewUsers!}
        ChangePickNumber={ChangePickNumber}
      />
    </div>
  );
}
