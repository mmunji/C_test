"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import Button from "@/components/buttons/Button";
import useDevice from "@/hooks/useDevice";
import { useToastActions } from "@/stores/useToast";

import {
  ChevronLeftMd,
  ChevronRightMd,
} from "../../../../../../../public/icons";
import PostCard from "../../../PostCard";
import PostRating from "../../../Rating/PostRating";
interface WatchMovieType {
  MovieWatchMovies: WatchMovie[];
}
export default function Labtop_Posts({ MovieWatchMovies }: WatchMovieType) {
  const { device } = useDevice();
  const { add } = useToastActions();
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [hovered, sethovered] = useState(false);
  const handleToast = (text: string) => {
    add(text);
  };

  return (
    <div
      className=" relative hidden  w-full gap-[24px] rounded-xl   Laptop:block"
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={device == "laptop" ? 20 : 24}
        onSwiper={(e) => setSwiper(e)}
      >
        {MovieWatchMovies.map((e, index) => {
          return (
            <div key={e.movieId}>
              <Link href={`detail/${e.movieId}`}>
                <SwiperSlide
                  className={`${device == "laptop" ? "h-[328px] w-[174px]" : "h-[440px] w-[240px]"}`}
                >
                  <div className="flex flex-col  gap-2 ">
                    <Link href={`/detail/${e.movieId}`}>
                      <PostCard
                        PostType="Post"
                        background={e.poster_path}
                        content={e.overview}
                      />
                    </Link>
                    <div className="flex flex-col gap-1">
                      <span className="line-clamp-1 text-left text-Gray_Orange">
                        {e.movienm}
                      </span>
                      <div className="flex items-center justify-center">
                        <PostRating
                          movienm={e.movienm}
                          movieId={e.movieId}
                          StarReview={true}
                          handleMovieList={handleToast}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Link>
            </div>
          );
        })}
      </Swiper>
      {swiper && !swiper.isBeginning && (
        <Button
          onClick={() => swiper.slidePrev()}
          variant="arrow1"
          className={`absolute -left-6 top-1/4 z-[10]  mt-9  transform   transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-10"} `}
        >
          <Image src={ChevronLeftMd} alt="이전" style={{ color: "#E9E9E9" }} />
        </Button>
      )}

      {swiper && !swiper.isEnd && (
        <Button
          onClick={() => swiper.slideNext()}
          variant="arrow2"
          className={`absolute -right-6 top-1/4 z-[10]  mt-9  transform transition-opacity duration-300${hovered ? "opacity-100" : "opacity-10"}  `}
        >
          <Image src={ChevronRightMd} alt="다음" style={{ color: "#E9E9E9" }} />
        </Button>
      )}
    </div>
  );
}
