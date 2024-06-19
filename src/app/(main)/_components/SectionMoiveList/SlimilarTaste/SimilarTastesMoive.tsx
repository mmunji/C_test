"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SlimilarPost from "./SlimilarPost";

export default function SimilarTastesMoive() {
  const [PickUserNumber, setPickUserNumber] = useState<number>(0);
  const ChangePickNumber = (index: number) => {
    setPickUserNumber(index);
  };
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="Text-l-Bold Laptop:Text-xxl-Bold ">
        나와 취향이 비슷한 사람들
      </h1>
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
