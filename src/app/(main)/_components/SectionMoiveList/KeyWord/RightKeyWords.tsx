"use client";
import "swiper/css";
import "swiper/css/grid";

import { useEffect, useRef, useState } from "react";
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

  const startX = useRef(0); // 드래그 시작 좌표
  const endX = useRef(0); // 드래그 끝 좌표

  const handleTouchStart = (swiper: any) => {
    startX.current = swiper.touches.startX; // 드래그 시작 좌표 저장
  };

  const handleTouchEnd = (swiper: any) => {
    endX.current = swiper.touches.currentX; // 드래그 끝 좌표 저장

    // 드래그 방향 계산
    if (startX.current < endX.current) {
      console.log("오른쪽으로 드래그했습니다!");
    } else if (startX.current > endX.current) {
      console.log("왼쪽으로 드래그했습니다!");
    } else {
      console.log("드래그가 거의 발생하지 않았습니다.");
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
        onTouchStart={handleTouchStart} // 드래그 시작 시
        onTouchEnd={handleTouchEnd} // 드래그 끝날 때
        simulateTouch={true}
        allowTouchMove={true}
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
