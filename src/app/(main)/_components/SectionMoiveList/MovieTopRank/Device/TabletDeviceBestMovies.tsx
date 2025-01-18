"use client";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import {
  BestTalkFire,
  ChatLineLg,
  ChevronRightMd,
  StarFillMd,
  TmdbSm,
} from "@/../public/icons";

import { NoImageSsikongi } from "../../../../../../../public/images";
import NonPostCard from "../../../NonPostCard";
import PostCard from "../../../PostCard";
import CustomSwiper from "../../../swiper/CustomSwiper";
import MovieDetailPost from "./Post/MovieDetailPost";

interface Tablet_BestMoiveProps {
  MovieData: Movie_TopTen | null;
  MovieGenre: string;
}

export default function TabletDeviceBestMovies({
  MovieData,
  MovieGenre,
}: Tablet_BestMoiveProps) {
  return (
    <div className="hidden  h-[344px] Tablet:block Laptop:hidden">
      <CustomSwiper type="topten" spaceBetween={20}>
        {Array.isArray(MovieData) && MovieData.length > 0 ? (
          MovieData.map((MovieDetailData, index) => {
            return (
              <SwiperSlide key={MovieDetailData.movieId}>
                <div className=" flex w-full gap-4">
                  <Link href={`detail/${MovieDetailData.movieId}`}>
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
                          className="h-[358px] w-[238px] cursor-pointer rounded-xl Tablet:h-[344px] Tablet:w-[260px] "
                        />
                      </div>
                    )}
                  </Link>
                  <div className="w-full ">
                    <MovieDetailPost
                      MovieDetailData={MovieDetailData}
                      index={index}
                      MovieGenre={MovieGenre}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <NonPostCard />
        )}
      </CustomSwiper>
    </div>
  );
}
