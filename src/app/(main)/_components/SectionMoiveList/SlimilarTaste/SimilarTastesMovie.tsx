"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import SpeechBubble from "@/components/speechBubble/SpeechBubble";
import useDevice from "@/hooks/useDevice";
import { tokenManager } from "@/services/auth/tokenManager";

import { ChevronLeftMd, ChevronRightMd } from "../../../../../../public/icons";
import SlimilarPost from "./SlimilarPost";

interface SimilarTastesMovieType {
  data: MovieReviewRecommed[];
}
export default function SimilarTastesMovie({ data }: SimilarTastesMovieType) {
  const [PickUserNumber, setPickUserNumber] = useState<number>(0);
  const { device } = useDevice();
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [ReviewUsers, setReviewUsers] = useState<MovieReviewRecommed[]>(data);
  const accessToken = tokenManager.getToken();
  const [message, setmessage] = useState(
    "로그인하면 맞춤형으로 추천받을 수 있어요.",
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
      <div className="flex justify-between">
        <div className=" relative flex   flex-col gap-5 Tablet:flex-row Tablet:items-center">
          <h1 className="Text-l-Bold Laptop:Text-xxl-Bold ">{title}</h1>

          {device == "mobile" ? (
            <div className="absolute -bottom-11">
              <SpeechBubble id={"SimilarTastesMovie"} dir="top">
                {message}
              </SpeechBubble>
            </div>
          ) : (
            <SpeechBubble id={"SimilarTastesMovie"} dir="left">
              {message}
            </SpeechBubble>
          )}
        </div>
        <div className="hidden gap-1 Laptop:flex">
          <button
            onClick={() => swiper?.slidePrev()}
            style={{
              background: "var(--Opacity-W10, rgba(255, 255, 255, 0.10))",
            }}
            className="rounded-lg p-2"
            disabled={!swiper}
          >
            <Image
              src={ChevronLeftMd}
              alt="arrowRight"
              height={24}
              width={24}
              className="h-6 w-6 "
            />
          </button>
          <button
            style={{
              background: "var(--Opacity-W10, rgba(255, 255, 255, 0.10))",
            }}
            onClick={() => swiper?.slideNext()}
            className="rounded-lg p-2 "
            disabled={!swiper}
          >
            <Image
              src={ChevronRightMd}
              alt="arrowRight"
              height={24}
              width={24}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
      <div className="block gap-4 Laptop:hidden">
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          onSwiper={(e) => setSwiper(e)}
        >
          {Array.isArray(ReviewUsers) && ReviewUsers.length > 0
            ? ReviewUsers.map((Review, index) => {
                return (
                  <SwiperSlide key={Review.userId} className=" w-[60px]">
                    <div
                      className={`h-[60px] w-[60px] rounded-[60px]  object-cover   ${PickUserNumber == index ? "border-2 border-Primary" : "border-transparent"} `}
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
        ProfileSwiper={swiper}
        setProfileSwiper={setSwiper}
        PickUserNumber={PickUserNumber}
        setPickUserNumber={setPickUserNumber}
        ReviewUsers={data!}
        ChangePickNumber={ChangePickNumber}
      />
    </div>
  );
}
