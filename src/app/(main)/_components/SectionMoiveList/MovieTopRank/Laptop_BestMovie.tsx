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

import { NoImageSsikongi } from "../../../../../../public/images";
import useMovieSwiper from "../../../_hooks/useMovieSwiper";
import NonPostCard from "../../NonPostCard";
import PostCard from "../../PostCard";
import BestTalkPost from "./Post/BestTalkPost";
interface Laptop_BestMoiveProps {
  MovieData: Movie_TopTen | null;
  MovieGenre: string;
}
export default function Laptop_BestMovie({
  MovieData,
  MovieGenre,
}: Laptop_BestMoiveProps) {
  SwiperCore.use([Pagination]);

  const [StatePost, SetStatePost] = useState(0);
  const { hovered, sethovered, swiper, setSwiper, forceUpdate } =
    useMovieSwiper();
  const onHandlePost = (index: number) => {
    SetStatePost(index);
  };
  function sortGenresByTitle(
    genres: MovieGenreDto[],
    genreTitle: string,
  ): MovieGenreDto[] {
    return [...genres].sort((a, b) => {
      if (a.name === genreTitle) return -1; // genreTitle과 같으면 앞으로 이동
      if (b.name === genreTitle) return 1;
      return 0; // 나머지는 순서를 유지
    });
  }
  return (
    <div
      className="relative hidden h-[calc(260px)]  Laptop:block Desktop:hidden"
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
        className="relative"
      >
        {Array.isArray(MovieData) && MovieData.length > 0 ? (
          MovieData.map((MovieDetailData, index) => {
            return (
              <SwiperSlide
                key={MovieDetailData.movieId}
                style={{
                  width: StatePost === index ? "562px" : "174px",
                }}
              >
                <div
                  className={`flex gap-5 ${StatePost === index ? "w-[562px]" : "w-[174px]"} transition-opacity duration-700 ease-in`}
                >
                  <div
                    className={`${
                      StatePost === index ? "scale-100" : ""
                    } transition-opacity duration-700 ease-in`}
                    style={{ width: StatePost === index ? "240px" : "240px" }} // 원하는 고정 너비
                  >
                    <Link href={`detail/${MovieDetailData.movieId}`}>
                      {MovieDetailData.poster_path ? (
                        <PostCard
                          num={index + 1}
                          onMouseEnter={() => onHandlePost(index)}
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
                  <div
                    className={`${
                      StatePost === index
                        ? "visibility-visible opacity-100"
                        : "visibility-hidden opacity-0"
                    } flex flex-col justify-between transition-opacity duration-700 ease-in`}
                  >
                    <div className="flex flex-col gap-3 ">
                      <div className="flex  items-center gap-3">
                        <Link
                          href={`detail/${MovieDetailData.movieId}`}
                          className="max-w-[50%] flex-shrink"
                        >
                          <h1 className="line-clamp-1 w-full text-Silver Text-xl-Bold">
                            {MovieDetailData.movienm}
                          </h1>
                        </Link>
                        <div className=" flex items-center gap-[10px] text-Gray_Orange Text-xs-Regular">
                          <span className="">
                            {dayjs(MovieDetailData.release_date).format("YYYY")}
                          </span>
                          <div className="h-3 w-[1px] border-r-[1px] border-L_Gray"></div>
                          <div className="flex  gap-1">
                            {sortGenresByTitle(
                              MovieDetailData.genres,
                              MovieGenre,
                            )
                              .slice(0, 3)
                              .map((genre: MovieGenreDto, index: number) => (
                                <span className="Text-xs-Regular" key={index}>
                                  {genre.name}
                                  {index <
                                    Math.min(
                                      2,
                                      MovieDetailData.genres.length - 1,
                                    ) && " /"}
                                </span>
                              ))}
                          </div>
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
                    <div className="w-[368px] Desktop:w-[504px] ">
                      <div className="flex items-center justify-between">
                        {MovieDetailData.reviewList ? (
                          <div className="flex items-center gap-1">
                            <Image
                              src={BestTalkFire}
                              alt=""
                              className="h-6 w-6"
                            />
                            <h1 className="Text-m-Bold">BEST 톡</h1>
                          </div>
                        ) : (
                          ""
                        )}
                        <Link
                          href={`detail/${MovieDetailData.movieId}`}
                          className="flex items-center gap-1 p-2 pr-1"
                        >
                          <span className="text-Gray_Orange Text-s-Medium">
                            자세히보기
                          </span>
                          <Image src={ChevronRightMd} alt="화살표" />
                        </Link>
                      </div>
                      <div className="flex flex-col gap-2">
                        {MovieDetailData.reviewList.map(
                          (reviewData: MovieReviewDTO, index: number) => {
                            return (
                              <BestTalkPost
                                key={reviewData.reviewId}
                                star={reviewData.star}
                                content={reviewData.content}
                                likeCount={reviewData.likeCount}
                                profileImg={reviewData.profile}
                                movieId={MovieDetailData.movieId}
                              />
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <NonPostCard />
        )}
      </Swiper>
      {swiper && !swiper.isBeginning && (
        <Button
          onClick={() => {
            if (swiper) {
              swiper.slidePrev();
            }
          }}
          variant="arrow1"
          className={`absolute -left-5 top-[40%] z-[50]  transform   transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"} `}
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
          variant="arrow1"
          className={`absolute -right-5 top-[40%] z-[50]   transform transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}  `}
        >
          <Image src={ChevronRightMd} alt="다음" />
        </Button>
      )}
    </div>
  );
}
