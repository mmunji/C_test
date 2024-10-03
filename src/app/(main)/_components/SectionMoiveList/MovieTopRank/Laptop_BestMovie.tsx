"use client";
import "swiper/css";
import "swiper/css/pagination";

import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  BestTalkFire,
  ChatLineLg,
  ChevronLeftMd,
  ChevronRightMd,
  StarFillMd,
  TmdbSm,
} from "@/../public/icons";
import Button from "@/components/buttons/Button";

import useMovieSwiper from "../../../_hooks/useMovieSwiper";
import PostCard from "../../PostCard";
import BestTalkPost from "./Post/BestTalkPost";
interface Laptop_BestMoiveProps {
  MovieData: Movie_TopTen | null;
}
export default function Laptop_BestMovie(MovieData: Laptop_BestMoiveProps) {
  SwiperCore.use([Pagination]);

  const [StatePost, SetStatePost] = useState(0);
  const { hovered, sethovered, swiper, setSwiper, forceUpdate } =
    useMovieSwiper();
  const onHandlePost = (index: number) => {
    SetStatePost(index);
  };
  return (
    <div
      className="relative hidden h-[calc(260px)]  Laptop:flex Desktop:hidden"
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        modules={[Pagination]}
        onSlideChange={forceUpdate}
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        {Array.isArray(MovieData.MovieData) &&
          MovieData.MovieData.length > 0 &&
          MovieData.MovieData.map((MovieDetailData, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  width: StatePost === index ? "562px" : "174px",
                }}
              >
                <div
                  className={`flex gap-6 ${StatePost === index ? "w-[562px]" : "w-[174px]"} transition-opacity duration-700 ease-in`}
                >
                  <div
                    className={`${
                      StatePost === index ? "scale-100" : ""
                    } transition-opacity duration-700 ease-in`}
                    style={{ width: StatePost === index ? "240px" : "240px" }} // 원하는 고정 너비
                  >
                    <PostCard
                      num={index + 1}
                      onClick={() => onHandlePost(index)}
                      background={MovieDetailData.poster_path}
                    />
                  </div>
                  <div
                    className={`${
                      StatePost === index
                        ? "visibility-visible opacity-100"
                        : "visibility-hidden opacity-0"
                    } flex flex-col justify-between transition-opacity duration-700 ease-in`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-end gap-3">
                        <h1 className="Text-xl-Bold">
                          {MovieDetailData.movienm}
                        </h1>
                        <div className=" flex gap-[10px] Text-xs-Regular">
                          <span className="text-Gray_Orange">
                            {dayjs(MovieDetailData.release_date).format("YYYY")}
                          </span>
                          <div className="border-[1px] border-Gray_Orange"></div>
                          <span className="text-Gray_Orange">
                            {MovieDetailData.genres[0]
                              ? MovieDetailData.genres[0].name
                              : ""}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <div className="flex gap-1 text-E_md">
                          <Image
                            src={TmdbSm}
                            alt="white_ start"
                            className="h-6 w-6"
                          />
                          <span>{MovieDetailData.tmdbrate.toFixed(1)}</span>
                        </div>
                        <div className="flex gap-1">
                          <Image
                            src={StarFillMd}
                            alt="Primary_Start"
                            className="h-6 w-6"
                          />
                          <span>{MovieDetailData.rate.toFixed(1)}</span>
                        </div>
                        <div className="flex gap-1">
                          <Image
                            src={ChatLineLg}
                            alt="ChatBox"
                            className="h-6 w-6"
                          />
                          <span>{MovieDetailData.reviewCount}</span>
                        </div>
                      </div>
                    </div>
                    <div className=" flex w-[368px] flex-col  gap-2  Desktop:w-[504px] ">
                      <div className="flex justify-between">
                        <div className="flex gap-1">
                          <Image
                            src={BestTalkFire}
                            alt=""
                            className="h-6 w-6"
                          />
                          <h1 className="Text-m-Bold">BEST 톡</h1>
                        </div>
                        <Link
                          href={`detail/${MovieDetailData.movieId}`}
                          className="flex items-center text-Gray_Orange Text-s-Medium"
                        >
                          자세히보기
                          <Image
                            src={ChevronRightMd}
                            alt="화살표"
                            style={{ color: "#CCC5C0" }}
                          />
                        </Link>
                      </div>
                      {MovieDetailData.reviewList.map(
                        (reviewData: MovieReviewDTO, index: number) => {
                          return (
                            <BestTalkPost
                              key={index}
                              star={reviewData.star}
                              content={reviewData.content}
                              likeCount={reviewData.likeCount}
                            />
                          );
                        },
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        {swiper && !swiper.isBeginning && (
          <Button
            onClick={() => {
              if (swiper) {
                swiper.slidePrev();
              }
            }}
            variant="arrow1"
            className={`absolute left-2 top-1/2 z-[10]  transform   transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-30"} `}
          >
            <Image src={ChevronLeftMd} alt="이전" />
          </Button>
        )}

        {swiper && !swiper.isEnd && (
          <Button
            onClick={() => {
              if (swiper) {
                swiper.slideNext();
              }
            }}
            variant="arrow2"
            className={`absolute right-4 top-1/2 z-[10]   transform transition-opacity duration-300${hovered ? "opacity-100" : "opacity-30"}  `}
          >
            <Image src={ChevronRightMd} alt="다음" />
          </Button>
        )}
      </Swiper>
    </div>
  );
}
