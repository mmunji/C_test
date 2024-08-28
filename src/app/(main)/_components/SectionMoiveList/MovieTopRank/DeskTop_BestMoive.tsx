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
import BestTalkPost from "./BestTalkPost";
interface Desktop_BestMoiveProps {
  MovieData: Movie_TopTen | null;
}
export default function DeskTop_BestMovie(MovieData: Desktop_BestMoiveProps) {
  SwiperCore.use([Pagination]);
  const [StatePost, SetStatePost] = useState(0);
  const {
    hovered,
    sethovered,
    swiper,
    setSwiper,
    forceUpdate,
    handleNext,
    handlePrev,
  } = useMovieSwiper();
  const onHandlePost = (index: number) => {
    SetStatePost(index);
  };
  return (
    <div
      className=" hidden Desktop:flex "
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        className="mySwiper"
        modules={[Pagination]}
        onSlideChange={forceUpdate}
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        {Array.isArray(MovieData.MovieData) && MovieData.MovieData.length > 0
          ? MovieData.MovieData.map((MovieDetailData, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{
                    width: StatePost === index ? "768px" : "240px",
                  }}
                >
                  <div
                    className={`flex gap-6 ${StatePost === index ? "w-[768px]" : "w-[240px]"}`}
                  >
                    <PostCard
                      num={index + 1}
                      onClick={() => onHandlePost(index)}
                      background={MovieDetailData.poster_path}
                    />
                    {StatePost === index ? (
                      <div className="flex flex-col justify-between transition-all">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-end gap-3">
                            <h1 className="Text-xxl-Bold">
                              {MovieDetailData.movienm}
                            </h1>
                            <div className="flex gap-[10px] Text-xs-Regular">
                              <span>
                                {dayjs(MovieDetailData.release_date).format(
                                  "YYYY",
                                )}
                              </span>
                              <div className="border-[1px]"></div>
                              <span>{MovieDetailData.genres[0].name}</span>
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
                              <span>{MovieDetailData.rate}</span>
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
                        <div className=" flex w-[368px] flex-col  gap-[12px]  Desktop:w-[504px] ">
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
                              className="flex items-center text-Gray_Orange"
                            >
                              자세히보기{" "}
                              <Image src={ChevronRightMd} alt="화살표" />
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
                                  profileImg={reviewData.profile}
                                />
                              );
                            },
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
      {swiper && !swiper.isBeginning && (
        <Button
          onClick={handlePrev}
          variant="arrow1"
          className={`absolute flex ${hovered ? "opacity-100" : "opacity-0"} left-3  top-1/2 z-[5] translate-x-[-50%] translate-y-[-50%] bg-black transition-opacity duration-300`}
        >
          <Image src={ChevronLeftMd} alt="이전" />
        </Button>
      )}

      {swiper && !swiper.isEnd && (
        <Button
          onClick={handleNext}
          variant="arrow2"
          className={`absolute  flex ${hovered ? "opacity-100" : "opacity-0"} right-0 top-1/2 z-[5] translate-x-[-50%] translate-y-[-50%] bg-black transition-opacity duration-300`}
        >
          <Image src={ChevronRightMd} alt="다음" />
        </Button>
      )}
    </div>
  );
}
