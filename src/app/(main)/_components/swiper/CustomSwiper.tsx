"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperClass } from "swiper/react";

import Button from "@/components/buttons/Button";

import { ChevronLeftMd, ChevronRightMd } from "../../../../../public/icons";
import useMovieSwiper from "../../_hooks/useMovieSwiper";

interface CustomSwiperProps {
  children: ReactNode;
  type:
    | "banner"
    | "topten"
    | "keyword"
    | "MasterPiece"
    | "reviewer"
    | "reviewerMovie"
    | "WatchedMoive";
  spaceBetween?: number;
}

export default function CustomSwiper({
  children,
  type,
  spaceBetween,
}: CustomSwiperProps) {
  if (type == "banner") return <BannerSwiper>{children}</BannerSwiper>;
  if (type == "topten")
    return (
      <MovieTopTen spaceBetween={spaceBetween ?? 20}>{children}</MovieTopTen>
    );
}

//Banner Component
export function BannerSwiper({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div id="containerForBullets" />
      <Swiper
        spaceBetween={20} // 슬라이드 사이 간격
        slidesPerView={1} // 보여질 슬라이드 수
        loop={true} // 무한 반복
        pagination={{
          clickable: true,
          el: "#containerForBullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
        }} // pagination 설정
        modules={[Autoplay, Pagination]} // 필요한 모듈 추가
        autoplay={{ delay: 8000, disableOnInteraction: false }}
      >
        {children}
      </Swiper>
    </div>
  );
}

//영화TOP10 Component
export function MovieTopTen({
  children,
  spaceBetween,
}: {
  children: ReactNode;
  spaceBetween: number;
}) {
  const { swiper, setSwiper, hovered, sethovered } = useMovieSwiper();
  return (
    <div
      className="relative"
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={spaceBetween}
        className="relative"
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        {children}
      </Swiper>
      {swiper && !swiper.isBeginning && (
        <Button
          onClick={() => swiper.slidePrev()}
          variant="arrow1"
          className={`absolute  -left-4 top-[40%]   z-[100] hidden transform transition-opacity duration-300  Tablet:block   Laptop:-left-5 Laptop:top-[40%] ${hovered ? "opacity-100" : "opacity-0"} `}
        >
          <Image src={ChevronLeftMd} alt="이전" style={{ color: "#E9E9E9" }} />
        </Button>
      )}

      {swiper && !swiper.isEnd && (
        <Button
          onClick={() => swiper.slideNext()}
          variant="arrow1"
          className={`absolute -right-4 top-[40%] z-[100] hidden transform transition-opacity  duration-300   Tablet:block Laptop:-right-5 Laptop:top-[40%] ${hovered ? "opacity-100" : "opacity-0"}  `}
        >
          <Image src={ChevronRightMd} alt="다음" style={{ color: "#E9E9E9" }} />
        </Button>
      )}
    </div>
  );
}
