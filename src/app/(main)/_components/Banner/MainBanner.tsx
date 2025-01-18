"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "@/app/globals.css";

import Link from "next/link";
import { SwiperSlide } from "swiper/react";

import useDevice from "@/hooks/useDevice";

import CustomSwiper from "../swiper/CustomSwiper";
import BannerLeftContent from "./BannerLeftContent";
import BannerRightRealTimeTalk from "./BannerRightRealTimeTalk";

interface BannerType {
  data: BannerDTO[] | null;
}

export default function MainBanner({ data }: BannerType) {
  const { device } = useDevice();
  return (
    <div className="relative w-full">
      <CustomSwiper type="banner">
        {data?.map((BannerItem) => {
          return (
            <SwiperSlide key={BannerItem.movieId}>
              <Link href={`detail/${BannerItem.movieId}`}>
                <div
                  className="relative h-[421px] w-full  overflow-hidden rounded-[20px] Tablet:h-[360px] Laptop:h-[489px] Desktop:h-[636px]"
                  style={{
                    backgroundImage: `${device == "laptop" || device == "desktop" ? `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url( https://image.tmdb.org/t/p/original/${BannerItem.backdrop_path})` : `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 1) 100%), url(https://image.tmdb.org/t/p/original/${BannerItem.backdrop_path})`} `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="absolute  inset-0  flex  flex-col gap-2 rounded-[20px] px-5  pb-4 pt-8 Tablet:flex-row Tablet:justify-between  Tablet:gap-0 Tablet:px-9 Tablet:pb-7  Laptop:px-[74px]  Laptop:py-[40px]  Desktop:h-[637px] Desktop:px-[108px] Desktop:py-[60px]"
                    style={{
                      backdropFilter: `${device == "laptop" || device == "desktop" ? `blur(5px)` : ""}`,
                      background: `${device == "laptop" || device == "desktop" ? `rgba(0, 0, 0, 0.50)` : ""}`,
                    }}
                  >
                    <BannerLeftContent BannerItem={BannerItem} />
                    <div className="h-[1px] border-[1px] border-[#FFFFFF] opacity-15 Tablet:hidden"></div>
                    <BannerRightRealTimeTalk
                      ReviewList={BannerItem.reviewList}
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </CustomSwiper>
    </div>
  );
}
