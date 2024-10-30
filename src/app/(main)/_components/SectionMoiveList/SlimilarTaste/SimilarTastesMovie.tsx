"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SpeechBubble from "@/components/speechBubble/SpeechBubble";
import useDevice from "@/hooks/useDevice";
import { tokenManager } from "@/services/auth/tokenManager";

import SlimilarPost from "./SlimilarPost";

interface SimilarTastesMovieType {
  data: MovieReviewRecommed[];
}
export default function SimilarTastesMovie({ data }: SimilarTastesMovieType) {
  const [PickUserNumber, setPickUserNumber] = useState<number>(0);
  const { device } = useDevice();
  const [ReviewUsers, setReviewUsers] = useState<MovieReviewRecommed[]>(data);
  const accessToken = tokenManager.getToken();
  const [message, setmessage] = useState(
    "로그인 하고 별을 눌러 평가해보세요 :",
  );
  const [title, settitle] = useState("다른 사람들은 이런 영화를 평가했어요");
  const ChangePickNumber = (index: number) => {
    setPickUserNumber(index);
  };

  useEffect(() => {
    if (accessToken) {
      setmessage("톡을 많이 작성할수록 내 취향에 비슷해져요.");
      settitle("나와 취향이 비슷한 사람들");
    }
  }, [accessToken]);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 Tablet:flex-row Tablet:items-center">
        <h1 className="Text-l-Bold Laptop:Text-xxl-Bold ">{title}</h1>
        {device == "mobile" ? (
          <SpeechBubble id={"SimilarTastesMovie"} dir="top">
            {message}
          </SpeechBubble>
        ) : (
          <SpeechBubble id={"SimilarTastesMovie"} dir="left">
            {message}
          </SpeechBubble>
        )}
      </div>
      <div className="block gap-4 Laptop:hidden">
        <Swiper slidesPerView="auto" spaceBetween={20}>
          {Array.isArray(ReviewUsers) && ReviewUsers.length > 0
            ? ReviewUsers.map((Review, index) => {
                return (
                  <SwiperSlide key={Review.userId} className=" w-[60px]">
                    <div
                      className={`h-[60px] w-[60px] rounded-[60px]    ${PickUserNumber == index ? "border-2 border-Primary" : "border-transparent"} `}
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
        ReviewUsers={data!}
        ChangePickNumber={ChangePickNumber}
      />
    </div>
  );
}
