"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { ChevronLeftMd, ChevronRightMd, StarFillMd } from "@/../public/icons";
import HoverPostCard from "@/app/(main)/_components/HoverPostCard";
import Button from "@/components/buttons/Button";
import { getTmdbPosterUrl } from "@/utils/tmdb";

interface MasterPieceMoiveType {
  data: MovieHidingPiece[];
}

export default function MasterPieceMoive({ data }: MasterPieceMoiveType) {
  const [swiper, setSwiper] = useState<SwiperClass>();

  return (
    <div className="flex flex-col gap-5 Tablet:gap-4">
      <div className="flex flex-col gap-1 Laptop:flex-row Laptop:justify-between">
        <h2 className="Text-l-Bold Laptop:Text-xxl-Bold">
          씨네톡 속 숨겨진 명작
        </h2>
        <span className="text-L_Gray Text-m-Regular Laptop:hidden">
          리뷰수 대비 평점이 높은 작품들이에요
        </span>
        <div className="hidden gap-1 Laptop:flex">
          <Button onClick={() => swiper?.slidePrev()} variant="arrow2">
            <Image src={ChevronLeftMd} alt="이전" />
          </Button>
          <Button onClick={() => swiper?.slideNext()} variant="arrow2">
            <Image src={ChevronRightMd} alt="다음" />
          </Button>
        </div>
      </div>
      <div className="">
        <Swiper
          breakpoints={{
            0: { spaceBetween: 8 },
            768: { spaceBetween: 16 },
            1280: { spaceBetween: 20 },
            1920: { spaceBetween: 24 },
          }}
          modules={[Pagination]}
          onSwiper={(e) => {
            setSwiper(e);
          }}
          slidesPerView="auto"
        >
          {data.map((movie) => (
            <SwiperSlide className="group w-fit" key={movie.movieid}>
              <Link
                className="relative flex w-[156px] flex-col gap-2 Tablet:w-[165px] Laptop:w-[174px] Desktop:w-[240px]"
                href={`detail/${movie.movieid}`}
              >
                <div className="relative flex h-[230px] w-full items-end justify-between overflow-hidden rounded-xl Text-s-Bold Tablet:h-[240px]  Laptop:h-[260px] Desktop:h-[360px]">
                  <Image
                    className="object-cover group-hover:Laptop:blur-[3px]"
                    fill
                    alt={movie.movienm}
                    src={
                      movie.movieposter
                        ? getTmdbPosterUrl("w780", movie.movieposter)
                        : "/images/ssikongi/PNG/NoImage.png"
                    }
                  />
                  <HoverPostCard movie={movie} />
                  <div className="absolute h-full w-full bg-gradient-to-t from-black/70 Laptop:hidden" />
                </div>
                <div className="absolute bottom-0 flex w-full min-w-0 items-center justify-between gap-1 px-3 pb-3 Laptop:relative Laptop:px-0 Laptop:pb-0">
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap Text-s-Medium Tablet:Text-m-Medium">
                    {movie.movienm}
                  </p>
                  <div className="flex shrink-0 items-center gap-[2px] Laptop:gap-1">
                    <Image src={StarFillMd} alt="star" className="h-6 w-6" />
                    <span className="flex items-center Text-s-Bold Tablet:Text-m-Bold">
                      {movie.StarAvg.toFixed(1)}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
