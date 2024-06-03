"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { useState } from "react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HeartLineMd, StarFillMd } from "@/../public/icons";

import PostCard from "../PostCard";
export default function MasterPieceMoive() {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-1">
        <h1 className="Desktop: Text-xxl-Bold Text-l-Bold Laptop:Text-xxl-Bold">
          씨네톡 속 숨겨진 명작
        </h1>
        <span className="text-L_Gray Text-m-Regular Laptop:hidden Desktop:hidden">
          리뷰수 대비 평점이 높은 작품들이에요
        </span>
      </div>
      {/* Post Movie Container */}
      <div className="flex  gap-2 Tablet:hidden ">
        <div className="flex h-[230px] w-[156px] items-end  justify-between rounded-xl  border-2 px-2 pb-2 Text-s-Bold Tablet:h-[240px] Tablet:w-[165px]">
          <div className="flex items-center gap-1">
            <Image src={StarFillMd} alt="평점" />
            <span>0.0</span>
          </div>
          <Image src={HeartLineMd} alt="빈 하트" />
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={6}
          spaceBetween={24}
          className="hidden gap-5 Tablet:flex Laptop:gap-5 Desktop:gap-6"
          modules={[Pagination]}
        >
          {Array(10)
            .fill(0)
            .map((_, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex w-[174px] flex-col Desktop:w-[240px]">
                    <PostCard StarPostType="StarPost" />
                    <div className="mt-3 flex justify-between">
                      <div className=" flex">
                        <Image
                          src={StarFillMd}
                          alt="star"
                          className="h-6 w-6"
                        />
                        0.0
                      </div>
                      <div>
                        <Image src={HeartLineMd} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
