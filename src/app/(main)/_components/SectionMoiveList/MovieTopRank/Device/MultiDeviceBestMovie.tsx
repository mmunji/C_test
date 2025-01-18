"use client";
import "swiper/css";
import "swiper/css/pagination";

import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";

import {
  BestTalkFire,
  ChatLineLg,
  ChevronRightMd,
  StarFillMd,
  TmdbSm,
} from "@/../public/icons";
import useFilter from "@/app/(main)/_hooks/useFilter";
import useDevice from "@/hooks/useDevice";

import { NoImageSsikongi } from "../../../../../../../public/images";
import NonPostCard from "../../../NonPostCard";
import PostCard from "../../../PostCard";
import CustomSwiper from "../../../swiper/CustomSwiper";
import MovieDetailPost from "../MovieDetailPost";

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

  return (
    <div className="  relative hidden overflow-visible   Laptop:block">
      <CustomSwiper type="topten" spaceBetween={20}>
        {Array.isArray(MovieData) && MovieData.length > 0 ? (
          MovieData.map((MovieDetailData, index) => (
            <SwiperSlide
              key={MovieDetailData.movieId}
              style={{
                width: DeviceSwiperSlide(Filter, index),
              }}
            >
              <div
                className={`flex gap-6 transition-opacity duration-700 ease-in-out`}
              >
                <div
                  className={`${
                    Filter === index ? "scale-100" : ""
                  } transition-opacity duration-500 ease-in-out`}
                >
                  <Link href={`detail/${MovieDetailData.movieId}`}>
                    {MovieDetailData.poster_path ? (
                      <PostCard
                        num={index + 1}
                        onMouseEnter={() => ChangeFilter(index)}
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
                  </Link>
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
      </CustomSwiper>
    </div>
  );
}
