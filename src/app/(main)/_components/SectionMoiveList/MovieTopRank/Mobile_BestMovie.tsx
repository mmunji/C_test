"use client";
import "swiper/css";
import "swiper/css/pagination";

import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  ChatLineLg,
  ChatLineSm,
  StarFillMd,
  StarFillSm,
  ThumbsUpFillSm,
  TmdbSm,
} from "@/../public/icons";

import PostCard from "../../PostCard";
interface Mobile_BestMoiveProps {
  MovieData: Movie_TopTen | null;
}
export default function Mobile_BestMovie(MovieData: Mobile_BestMoiveProps) {
  return (
    <div className="flex Tablet:hidden">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        className="mySwiper"
        modules={[Pagination]}
      >
        {Array.isArray(MovieData.MovieData) && MovieData.MovieData.length > 0
          ? MovieData.MovieData.map((MovieDetailData, index) => {
              return (
                <SwiperSlide
                  key={MovieDetailData.movieId}
                  style={{ width: "238px" }}
                >
                  <Link href={`detail/${MovieDetailData.movieId}`}>
                    <div className="flex w-[238px] flex-col gap-4  rounded-xl bg-Black pb-4 ">
                      <div
                        className="flex h-[358px] w-[238x] flex-col  justify-between rounded-xl pb-[14px]   Text-s-Bold Tablet:h-[240px] Tablet:w-[165px]"
                        style={{
                          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.7) 70%), url('${MovieDetailData.poster_path ? `https://image.tmdb.org/t/p/original/${MovieDetailData.poster_path}` : "/images/ssikongi/PNG/NoImage.png"}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-br-[12px] rounded-tl-[12px] bg-Primary Text-s-Bold Tablet:Text-l-Bold">
                          {index + 1}
                        </div>
                        <div className="flex flex-col gap-1 px-4">
                          <h2 className="line-clamp-1  text-Silver Text-m-Bold">
                            {MovieDetailData.movienm}
                          </h2>
                          <div className="flex items-center   gap-[10px] Text-xs-Regular">
                            <span className="text-Silver">
                              {dayjs(MovieDetailData.release_date).format(
                                "YYYY",
                              )}
                            </span>
                            <div className="h-3 w-[1px] border-[1px] border-Gray_Orange"></div>
                            <span className="text-Silver">
                              {MovieDetailData.genres[0]
                                ? MovieDetailData.genres[0].name
                                : ""}
                            </span>
                          </div>
                          <div>
                            <div className="flex gap-5">
                              <div className="flex items-center gap-[2px]  text-E_md">
                                <Image
                                  src={TmdbSm}
                                  alt="white_ start"
                                  className="h-[10px] w-6"
                                />
                                <span className="text-Silver Text-s-Medium">
                                  {MovieDetailData.tmdbrate.toFixed(1)}
                                </span>
                              </div>
                              <div className="r flex items-center gap-[2px] ">
                                <Image
                                  src={StarFillSm}
                                  alt="Primary_Start"
                                  className="h-4 w-4"
                                />
                                <span className="text-Silver Text-s-Medium">
                                  {MovieDetailData.rate.toFixed(1)}
                                </span>
                              </div>
                              <div className="flex items-center gap-[2px]">
                                <Image
                                  src={ChatLineSm}
                                  alt="ChatBox"
                                  className="h-4 w-4"
                                />
                                <span className="text-Silver Text-s-Medium">
                                  {MovieDetailData.reviewCount}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 px-4">
                        <div className="flex justify-between   Text-xs-Regular">
                          <div className="flex items-center  rounded bg-Primary px-1  text-White">
                            BEST
                          </div>
                          <div className="flex items-center justify-center gap-1 text-L_Gray">
                            <Image
                              src={ThumbsUpFillSm}
                              alt="white_ start"
                              className="h-4 w-4"
                            />
                            {MovieDetailData.reviewList.likeCount && (
                              <span>
                                {MovieDetailData.reviewList[0].likeCount}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex h-[42px] items-center gap-2">
                          {MovieDetailData?.reviewList.profile && (
                            <div
                              className="h-[24px] w-[24px] rounded-[60px] "
                              style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0) 100%), url(data:image/jpeg;base64,${MovieDetailData?.reviewList[0].profile}`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            />
                          )}

                          <span className="line-clamp-2 w-[174px] text-Silver Text-s-Regular">
                            {MovieDetailData.reviewList.content &&
                              MovieDetailData.reviewList[0].content}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </div>
  );
}
