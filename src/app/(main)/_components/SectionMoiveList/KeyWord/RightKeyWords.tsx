"use client";
import "swiper/css";
import "swiper/css/grid";

import { useEffect, useState } from "react";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import useMovieSwiper from "@/app/(main)/_hooks/useMovieSwiper";

import KeyWordPosts from "./KeyWordPosts";
interface KeyWordInfoProps {
  keywordInfo: MentionKeword[];
  addKeywordIndex?: () => void;
  keywordIndex: number;
  setKeywordListNumber: (index: number) => void;
}

export default function RightKeyWords({
  keywordInfo,
  keywordIndex,
  setKeywordListNumber,
}: KeyWordInfoProps) {
  const keyword = keywordInfo[keywordIndex]?.keyword;
  const [isVisible, setIsVisible] = useState(false);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const { swiper, setSwiper } = useMovieSwiper();
  const handleSlideChange = (swiper: SwiperClass) => {
    const isLast = swiper.isEnd;
    console.log(isLast);
    setIsLastSlide(isLast);
    if (isLast) {
      // 마지막 슬라이드에서 다음으로 넘어가려는 시도 시 발생할 동작
      setKeywordListNumber(keywordIndex + 1);
    } else {
      swiper.slideNext(); // 마지막 슬라이드가 아니면 정상적으로 슬라이드 이동
    }
  };

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [keywordInfo]);
  return (
    <div className="h-full w-full">
      <Swiper
        modules={[Grid]}
        slidesPerView={1}
        spaceBetween={12}
        grid={{ rows: 3, fill: "row" }}
        className=" grid Tablet:hidden "
        onSlideChange={handleSlideChange}
        onSwiper={(e) => setSwiper(e)}
      >
        {keywordInfo[keywordIndex]?.reviewList.map((review, index) => {
          if (!review) {
            return null;
          }
          return (
            <SwiperSlide key={index} className="max-h-[135px]">
              <KeyWordPosts
                review={review}
                keyword={keyword}
                isVisible={isVisible}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        modules={[Grid]}
        slidesPerView={3}
        spaceBetween={16}
        grid={{ rows: 2, fill: "row" }}
        className="hidden Tablet:grid Laptop:hidden  "
        onSlideChange={handleSlideChange}
      >
        {keywordInfo[keywordIndex]?.reviewList.map((review, index) => {
          if (!review) {
            return null;
          }
          return (
            <SwiperSlide key={index} className="max-h-[157px] w-full">
              <KeyWordPosts
                review={review}
                keyword={keyword}
                isVisible={isVisible}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className={`hidden h-full w-full  grid-cols-4  gap-5 transition-opacity duration-700 ease-in Laptop:grid Desktop:hidden `}
      >
        {Array(8)
          .fill(0)
          .map((_, index) => {
            if (!keywordInfo[keywordIndex]?.reviewList?.[index]) {
              return null;
            }
            return (
              <KeyWordPosts
                key={index}
                review={keywordInfo[keywordIndex].reviewList[index]}
                keyword={keyword}
                isVisible={isVisible}
              />
            );
          })}
      </div>
      <div
        className={`  hidden transform  grid-cols-5  gap-6 transition-opacity duration-700 ease-in Desktop:grid `}
      >
        {keywordInfo[keywordIndex]?.reviewList.map((movie, index) => {
          if (!movie) {
            return null;
          }
          return (
            <KeyWordPosts
              key={index}
              review={movie}
              keyword={keyword}
              isVisible={isVisible}
            />
          );
        })}
      </div>
    </div>
  );
}
