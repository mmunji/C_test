"use client";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import SpeechBubble from "@/components/speechBubble/SpeechBubble";

import PostRating from "../../../Rating/PostRating";
interface WatchMovieType {
  MovieWatchMovies: WatchMovie | null;
}
export default function Tablet_Posts({ MovieWatchMovies }: WatchMovieType) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  return (
    <div>
      <div className="mx-auto  hidden  w-[537px]  items-center rounded-xl bg-D1_Gray Tablet:flex Laptop:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          className="flex   w-[537px] rounded-xl "
          onSwiper={(e) => {
            setSwiper(e);
          }}
        >
          {Array.isArray(MovieWatchMovies) && MovieWatchMovies.length > 0
            ? MovieWatchMovies.map((e, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center "
                  >
                    <div
                      className="h-[280px] w-[200px] rounded-xl"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0) 100%), url('${e.poster_path ? `https://image.tmdb.org/t/p/original/${e.poster_path}` : "/images/ssikongi/PNG/NoImage.png"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="] flex w-[337px] flex-col items-center justify-center gap-8 px-5">
                      <div className="flex flex-col items-center justify-center gap-2 ">
                        <h1 className="Text-l-Medium">{e.movienm}</h1>
                        <div className="flex items-center gap-[10px] text-L_Gray Text-s-Regular">
                          <span>{e.release_date}</span>
                          <div className="h-3 border-r-[1px] border-L_Gray" />
                          <span>{e.genres[0].name}</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex ">
                          <PostRating
                            movienm={e.movienm}
                            movieId={e.movieId}
                            StarReview={true}
                          />
                        </div>
                        <div className="mt-2">
                          <SpeechBubble dir="top">
                            로그인 하고 별을 눌러 평가해보세요 :)
                          </SpeechBubble>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            : ""}
        </Swiper>
      </div>
      <div className="hidden Tablet:flex Laptop:hidden">
        <button
          className="mx-auto mt-5 w-[392px] rounded-xl border-[1px] border-D2_Gray px-5 py-3 text-L_Gray Text-s-Regular  "
          onClick={() => {
            if (swiper) {
              swiper.slideNext();
            }
          }}
        >
          아직 안봤어요
        </button>
      </div>
    </div>
  );
}
