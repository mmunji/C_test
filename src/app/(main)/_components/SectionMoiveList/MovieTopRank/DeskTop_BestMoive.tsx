"use client";
import "swiper/css";
import "swiper/css/pagination";

import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import {
  BestTalkFire,
  ChatLineLg,
  ChevronLeftMd,
  ChevronRightMd,
  StarFillMd,
  TmdbSm,
} from "@/../public/icons";
import Button from "@/components/buttons/Button";
import useDevice from "@/hooks/useDevice";

import { NoImageSsikongi } from "../../../../../../public/images";
import PostCard from "../../PostCard";
import BestTalkPost from "./Post/BestTalkPost";
interface Desktop_BestMoiveProps {
  MovieData: Movie_TopTen | null;
}
export default function DeskTop_BestMovie(
  MovieData: Desktop_BestMoiveProps,
  GenreType: string,
) {
  SwiperCore.use([Pagination]);
  const [StatePost, SetStatePost] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [hovered, sethovered] = useState(false);

  const onHandlePost = (index: number) => {
    SetStatePost(index);
  };

  return (
    <div
      className=" hidden Desktop:block "
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        className="mySwiper relative"
        modules={[Pagination]}
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        {Array.isArray(MovieData?.MovieData) &&
          MovieData.MovieData.length > 0 &&
          MovieData.MovieData.map((MovieDetailData, index) => (
            <SwiperSlide
              key={MovieDetailData.movieId}
              style={{
                width: StatePost === index ? "768px" : "240px",
              }}
            >
              <div
                className={`flex gap-6 ${StatePost === index ? "w-[768px]" : "w-[240px]"} transition-opacity duration-700 ease-in-out`}
              >
                <div
                  className={`${
                    StatePost === index ? "scale-100" : ""
                  } transition-opacity duration-500 ease-in-out`}
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
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between  gap-3">
                      <Link href={`detail/${MovieDetailData.movieId}`}>
                        <h1 className="line-clamp-1 w-[310px]  Text-xxl-Bold">
                          {MovieDetailData.movienm}
                        </h1>
                      </Link>
                      <div className="flex w-full items-center justify-end gap-[10px] text-Gray_Orange Text-s-Regular">
                        <span>
                          {dayjs(MovieDetailData.release_date).format("YYYY")}
                        </span>
                        <div className="flex h-3 w-[1px] items-center border-[1px] border-L_Gray"></div>
                        <div className="flex  ">
                          {MovieDetailData.genres.map(
                            (genre: MovieGenreDto, index: number) => (
                              <span className="Text-s-Regular" key={index}>
                                {genre.name}
                                {index < MovieDetailData.genres.length - 1 &&
                                  " / "}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="flex gap-1 Text-m-Medium">
                        <Image
                          src={TmdbSm}
                          alt="white_ start"
                          className="h-6 w-6"
                        />
                        <span>{MovieDetailData.tmdbrate.toFixed(1)}</span>
                      </div>
                      <div className="flex gap-1 Text-m-Medium">
                        <Image
                          src={StarFillMd}
                          alt="Primary_Start"
                          className="h-6 w-6"
                        />
                        <span>{MovieDetailData.rate.toFixed(1)}</span>
                      </div>
                      <div className="flex gap-1 Text-m-Medium">
                        <Image
                          src={ChatLineLg}
                          alt="ChatBox"
                          className="h-6 w-6"
                        />
                        <span>{MovieDetailData.reviewCount}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-[368px] Desktop:w-[504px]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Image src={BestTalkFire} alt="" className="h-6 w-6" />
                        <h1 className="Text-m-Bold">BEST 톡</h1>
                      </div>
                      <Link
                        href={`detail/${MovieDetailData.movieId}`}
                        className="flex items-center gap-1 p-2 pr-1"
                      >
                        <span className="text-Gray_Orange Text-m-Medium">
                          자세히보기
                        </span>
                        <Image src={ChevronRightMd} alt="화살표" />
                      </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                      {MovieDetailData.reviewList.map(
                        (reviewData: MovieReviewDTO, index: number) => (
                          <BestTalkPost
                            key={reviewData.reviewId}
                            star={reviewData.star}
                            content={reviewData.content}
                            likeCount={reviewData.likeCount}
                            profileImg={reviewData.profile}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        {swiper && !swiper.isBeginning && (
          <Button
            onClick={() => swiper.slidePrev()}
            variant="arrow1"
            className={`absolute left-2 top-1/2 z-[10]  transform   transition-opacity duration-300 ${hovered ? "opacity-15" : "opacity-0"} `}
          >
            <Image
              src={ChevronLeftMd}
              alt="이전"
              style={{ color: "#E9E9E9" }}
            />
          </Button>
        )}

        {swiper && !swiper.isEnd && (
          <Button
            onClick={() => swiper.slideNext()}
            variant="arrow2"
            className={`absolute right-4 top-1/2 z-[10]   transform transition-opacity duration-300${hovered ? "opacity-15" : "opacity-0"}  `}
          >
            <Image
              src={ChevronRightMd}
              alt="다음"
              style={{ color: "#E9E9E9" }}
            />
          </Button>
        )}
      </Swiper>
    </div>
  );
}
