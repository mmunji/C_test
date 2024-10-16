"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { ChevronLeftMd, ChevronRightMd, StarFillMd } from "@/../public/icons";
import Button from "@/components/buttons/Button";
import useDevice from "@/hooks/useDevice";
import { movieAPIs } from "@/services/movie/movieAPIs";

import PostCard from "../PostCard";
export default function MasterPieceMoive() {
  const [MoviePiece, setMoviePiece] = useState<MovieHidingPiece | null>(null);
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [hovered, sethovered] = useState(false);
  const { device } = useDevice();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await movieAPIs.getHidingPiece();
        setMoviePiece(response);
      } catch (error) {
        console.error("영화를 가져오는 중 오류 발생:", error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-1">
        <h1 className="Desktop: Text-xxl-Bold Text-l-Bold Laptop:Text-xxl-Bold">
          씨네톡 속 숨겨진 명작
        </h1>
        <span className="text-L_Gray Text-m-Regular Laptop:hidden Desktop:hidden">
          리뷰수 대비 평점이 높은 작품들이에요
        </span>
      </div>

      <div className="flex  gap-2 Laptop:hidden  ">
        <Swiper slidesPerView="auto" spaceBetween={20}>
          {Array.isArray(MoviePiece) && MoviePiece.length > 0
            ? MoviePiece.map((movie, index) => (
                <SwiperSlide key={index} style={{ width: "156px" }}>
                  <Link href={`detail/${movie.movieid}`}>
                    <div
                      className="flex h-[230px] w-[156px] items-end  justify-between rounded-xl   Text-s-Bold Tablet:h-[240px] Tablet:w-[165px]"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.7) 70%), url('${movie?.movieposter ? `https://image.tmdb.org/t/p/original/${movie?.movieposter}` : "/images/ssikongi/PNG/NoImage.png"}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="flex  w-full items-center justify-between gap-1 px-3 pb-3">
                        <span className="line-clamp-1 text-Silver Text-s-Medium Tablet:Text-m-Medium">
                          {movie.movienm}
                        </span>
                        <div className="flex gap-1 Text-m-Medium">
                          <Image
                            src={StarFillMd}
                            alt="star"
                            className="h-6 w-6"
                          />
                          <span className="flex items-center  text-Silver Text-s-Bold Tablet:Text-m-Bold ">
                            {movie.StarAvg.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>

      <div
        className="hidden Laptop:flex"
        onMouseEnter={() => sethovered(true)}
        onMouseLeave={() => sethovered(false)}
      >
        <Swiper
          slidesPerView="auto"
          spaceBetween={device == "laptop" ? 20 : 24}
          className="gap-5  Laptop:gap-5 Desktop:gap-6"
          modules={[Pagination]}
          onSwiper={(e) => {
            setSwiper(e);
          }}
        >
          {Array.isArray(MoviePiece) && MoviePiece.length > 0
            ? MoviePiece.map((movie, index) => (
                <SwiperSlide
                  key={index}
                  className="w-[174px] Desktop:w-[240px]"
                >
                  <Link href={`detail/${movie.movieid}`}>
                    <div className="flex w-[174px] flex-col Desktop:w-[240px]">
                      <PostCard
                        StarPostType="StarPost"
                        StarRating={movie.star}
                        content={movie.content}
                        regDate={movie.regDate}
                        likeCount={movie?.likeCount}
                        reviewCount={movie?.rereviewCount}
                        background={movie?.movieposter}
                      />
                      <div className="mt-2  flex justify-between">
                        <div>
                          <span className="line-clamp-1">{movie.movienm}</span>
                        </div>
                        <div className="flex gap-1 Text-m-Medium">
                          <Image
                            src={StarFillMd}
                            alt="star"
                            className="h-6 w-6"
                          />
                          <span className="flex items-center ">
                            {movie.StarAvg}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            : null}
          {swiper && !swiper.isBeginning && (
            <Button
              onClick={() => swiper.slidePrev()}
              variant="arrow1"
              className={`absolute left-2 top-1/2 z-[10]  transform   transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-10"} `}
            >
              <Image src={ChevronLeftMd} alt="이전" />
            </Button>
          )}

          {swiper && !swiper.isEnd && (
            <Button
              onClick={() => swiper.slideNext()}
              variant="arrow2"
              className={`absolute right-4 top-1/2 z-[10]   transform transition-opacity duration-300${hovered ? "opacity-100" : "opacity-10"}  `}
            >
              <Image src={ChevronRightMd} alt="다음" />
            </Button>
          )}
        </Swiper>
      </div>
    </div>
  );
}
