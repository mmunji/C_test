"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import useFilter from "@/app/(main)/_hooks/useFilter";
import useMovieSwiper from "@/app/(main)/_hooks/useMovieSwiper";
import Button from "@/components/buttons/Button";
import useDevice from "@/hooks/useDevice";

import {
  ChevronLeftMd,
  ChevronRightMd,
} from "../../../../../../../public/icons";
import { NoImageSsikongi } from "../../../../../../../public/images";
import NonPostCard from "../../../NonPostCard";
import PostCard from "../../../PostCard";
import CustomSwiper from "../../../swiper/CustomSwiper";
import MovieDetailPost from "./Post/MovieDetailPost";

interface MultiDeviceBestMovieProps {
  MovieData: Movie_TopTen | null;
  MovieGenre: string;
}
export default function MultiDeviceBestMovie({
  MovieData,
  MovieGenre,
}: MultiDeviceBestMovieProps) {
  const { Filter, ChangeFilter } = useFilter();
  const { device } = useDevice();

  const { swiper, setSwiper, hovered, sethovered } = useMovieSwiper();
  const swiperRef = useRef<SwiperClass | null>(null);

  // hover 시 해당 슬라이드를 맨 왼쪽으로 이동
  const handleHoverSlide = async (index: number) => {
    await ChangeFilter(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // 슬라이드 이동
      swiperRef.current.update(); // Swiper 강제 업데이트
    }
  };

  function DeviceSwiperSlide(Filter: number, index: number) {
    if (device == "laptop") {
      if (Filter === index) {
        return "562px";
      } else {
        return "174px";
      }
    } else if (device == "desktop") {
      if (Filter === index) {
        return "768px";
      } else {
        return "240px";
      }
    }
  }
  useEffect(() => {
    if (swiper) {
      swiper.update();
    }
  }, [Filter, swiper]);
  return (
    <div
      className="  relative hidden overflow-visible   Laptop:block"
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
    >
      <Swiper
        slidesPerView="auto"
        className="relative"
        onSwiper={(swiper) => {
          setSwiper(swiper);
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
      >
        {Array.isArray(MovieData) && MovieData.length > 0 ? (
          MovieData.map((MovieDetailData, index) => (
            <SwiperSlide
              key={`${MovieDetailData.movieId}-${Filter}`}
              onClick={() => handleHoverSlide(index)}
              style={{
                width: `${DeviceSwiperSlide(Filter, index)} `,
              }}
            >
              <div
                className={`flex h-full w-full gap-6 transition-opacity duration-700 ease-in-out`}
              >
                <div
                  className={`${
                    Filter === index ? "scale-100" : ""
                  } transition-opacity duration-500 ease-in-out`}
                >
                  {/* <Link href={`detail/${MovieDetailData.movieId}`}> */}
                  {MovieDetailData.poster_path ? (
                    <PostCard
                      num={index + 1}
                      background={MovieDetailData.poster_path}
                    />
                  ) : (
                    <div>
                      <Image
                        src={NoImageSsikongi}
                        alt="포스터"
                        className="h-[358px] w-[238px] cursor-pointer rounded-xl Tablet:h-[344px] Tablet:w-[260px] Laptop:h-[260px] Laptop:w-[174px]  Desktop:h-[360px] Desktop:w-[240px]"
                      />
                    </div>
                  )}
                  {/* </Link> */}
                </div>
                <MovieDetailPost
                  Filter={Filter}
                  MovieDetailData={MovieDetailData}
                  index={index}
                  MovieGenre={MovieGenre}
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <NonPostCard />
        )}
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
