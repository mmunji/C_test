"use client";
import "swiper/css";
import "swiper/css/pagination";

import { useState } from "react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import PostCard from "../../PostCard";
import SlimilarMobilePost from "./SlimilarMobilePost";
import SlimilarUser from "./SlimilarUser";

export default function SlimilarPost() {
  const [UserStateNumder, SetUserStateNumber] = useState<number>(0);
  const onHandleStateChange = (e: number) => {
    SetUserStateNumber(e);
  };
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-col gap-5 rounded-2xl bg-Black px-5 py-5 Tablet:bg-D1_Gray Laptop:hidden ">
        <SlimilarMobilePost />
      </div>
      <div className=" hidden justify-between Laptop:flex">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          className="flex  rounded-xl px-[12px]  py-[24px]"
          breakpoints={{
            1280: {
              // Laptop 사이즈 이상
              slidesPerView: 3,
            },
            1920: {
              // Desktop 사이즈 이상
              slidesPerView: 4,
            },
          }}
        >
          {Array(10)
            .fill(0)
            .map((_, index) => {
              return (
                <SwiperSlide key={index}>
                  <SlimilarUser
                    value={UserStateNumder}
                    ClickIndex={index}
                    onClick={() => onHandleStateChange(index)}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>

      <div className="hidden flex-col gap-[16px] rounded-xl bg-D1_Gray p-[24px] text-white Laptop:flex Desktop:flex">
        <h1 className="Text-xl-Bold">닉네임님의 최근 톡</h1>
        <div className="flex gap-[24px]">
          {Array(5)
            .fill(0)
            .map((_, index) => {
              return <PostCard key={index} StarPostType="StarPost" />;
            })}
        </div>
      </div>
    </div>
  );
}
