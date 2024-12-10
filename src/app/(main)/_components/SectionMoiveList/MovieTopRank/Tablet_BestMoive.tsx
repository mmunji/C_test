"use client";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

import { NoImageSsikongi } from "../../../../../../public/images";
import NonPostCard from "../../NonPostCard";
import PostCard from "../../PostCard";
import Tablet_BestTalkPost from "./Post/Tablet_BestTalkPost";
interface Tablet_BestMoiveProps {
  MovieData: Movie_TopTen | null;
  MovieGenre: string;
}

export default function Tablet_BestMoive({
  MovieData,
  MovieGenre,
}: Tablet_BestMoiveProps) {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [hovered, sethovered] = useState(false);

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
      className="hidden  h-[344px] Tablet:block Laptop:hidden"
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        className="relative"
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
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
                          className="h-[358px] w-[238px] cursor-pointer rounded-xl Tablet:h-[344px] Tablet:w-[260px] Laptop:h-[260px] Laptop:w-[174px]  Desktop:h-[360px] Desktop:w-[240px]"
                        />
                      </div>
                    )}
                  </Link>
                  <div className="flex w-full flex-col justify-between gap-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between gap-3 ">
                        <Link
                          href={`detail/${MovieDetailData.movieId}`}
                          className="max-w-[50%] flex-shrink"
                        >
                          <h4 className="line-clamp-1 w-[366px] Text-l-Bold">
                            {MovieDetailData.movienm}
                          </h4>
                        </Link>
                        <div className="flex items-center gap-3 Text-xs-Regular">
                          <span>
                            {dayjs(MovieDetailData.release_date).format("YYYY")}
                          </span>
                          <div className="h-3 border-r-[1px] border-L_Gray"></div>
                          <div className="flex gap-1">
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
                        <div className="flex items-center gap-1  Text-m-Medium">
                          <Image
                            src={TmdbSm}
                            alt="white_ start"
                            className="h-6 w-6"
                          />
                          <span>{MovieDetailData.tmdbrate.toFixed(1)}</span>
                        </div>
                        <div className="flex items-center  gap-1 Text-m-Medium">
                          <Image
                            src={StarFillMd}
                            alt="Primary_Start"
                            className="h-6 w-6"
                          />
                          <span>{MovieDetailData.rate.toFixed(1)}</span>
                        </div>
                        <div className="flex items-center gap-1 Text-m-Medium">
                          <Image
                            src={ChatLineLg}
                            alt="ChatBox"
                            className="h-6 w-6"
                          />
                          <span>{MovieDetailData.reviewCount}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex flex-col gap-3">
                        {MovieDetailData.reviewList ? (
                          <div className="flex items-center gap-1">
                            <Image
                              src={BestTalkFire}
                              alt=""
                              className="h-6 w-6"
                            />
                            <h4 className="Text-m-Bold">BEST 톡</h4>
                          </div>
                        ) : (
                          <Link
                            href={`detail/${MovieDetailData.movieId}`}
                            className="flex items-center gap-1 p-2 pr-1"
                          >
                            <span className="text-Gray_Orange Text-m-Medium">
                              자세히보기
                            </span>
                            <Image src={ChevronRightMd} alt="화살표" />
                          </Link>
                        )}
                        <div className="flex gap-4">
                          {MovieDetailData.reviewList.map(
                            (reviewData: MovieReviewDTO, index: number) => {
                              return (
                                <Tablet_BestTalkPost
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
          onClick={() => swiper.slidePrev()}
          variant="arrow1"
          className={`absolute left-1 top-[93%] z-[100]  transform   transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"} `}
        >
          <Image src={ChevronLeftMd} alt="이전" style={{ color: "#E9E9E9" }} />
        </Button>
      )}

      {swiper && !swiper.isEnd && (
        <Button
          onClick={() => swiper.slideNext()}
          variant="arrow1"
          className={`absolute right-1 top-[93%]  z-[100]   transform transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}  `}
        >
          <Image src={ChevronRightMd} alt="다음" style={{ color: "#E9E9E9" }} />
        </Button>
      )}
    </div>
  );
}
