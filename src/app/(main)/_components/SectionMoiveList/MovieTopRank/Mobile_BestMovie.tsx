"use client";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ThumbsUpFillSm } from "@/../public/icons";

import PostCard from "../../PostCard";
export default function Mobile_BestMovie() {
  return (
    <div className="flex Tablet:hidden">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        className="mySwiper"
        modules={[Pagination]}
      >
        {Array(10)
          .fill(0)
          .map((_, index) => {
            return (
              <SwiperSlide key={index} style={{ width: "238px" }}>
                <div className="flex w-[238px] flex-col gap-4  rounded-xl bg-Black pb-4 ">
                  <PostCard num={index + 1} />
                  <div className="flex flex-col gap-2 px-4">
                    <div className="Text-xs-Re gular flex   justify-between">
                      <div className="flex items-center rounded bg-Primary px-1 text-White">
                        Best
                      </div>
                      <div className="flex items-center justify-center gap-1 text-L_Gray">
                        <Image
                          src={ThumbsUpFillSm}
                          alt="white_ start"
                          className="h-4 w-4"
                        />
                        <span>0,000</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle cx="12" cy="12" r="12" fill="#D9D9D9" />
                      </svg>
                      <span className="line-clamp-2 Text-s-Regular">
                        김고은 굿씬이 진짜 미쳤음.. 생각보다 영화가 긴데
                        몰입감이 오져
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
