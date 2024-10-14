"use client";

import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import PostRating from "../../../Rating/PostRating";
interface WatchMovieType {
  MovieWatchMovies: WatchMovie | null;
}
export default function Mobile_Posts({ MovieWatchMovies }: WatchMovieType) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  return (
    <div className="rounded-xl bg-D1_Gray px-3 py-7 Tablet:hidden ">
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        className="flex  rounded-xl px-[12px]  py-[28px]"
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        {Array.isArray(MovieWatchMovies) && MovieWatchMovies.length > 0
          ? MovieWatchMovies.map((e, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="justify-cente flex flex-col items-center gap-3"
                >
                  <div>
                    <div className="flex flex-col  gap-3 ">
                      <div
                        className="mx-auto h-[230px] w-[153px] rounded-xl "
                        style={{
                          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0) 100%), url('${e.poster_path ? `https://image.tmdb.org/t/p/original/${e.poster_path}` : "/images/ssikongi/PNG/NoImage.png"})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="Text-m-Medium">{e.movienm}</h1>
                        <div className="flex gap-[10px] text-L_Gray Text-xs-Regular">
                          <span>{e.release_date}</span>
                          <span>|</span>
                          <span>{e.genres[0].name}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className="mt-5 text-center Text-l-Bold">{e.rate}</h1>
                      <div className="flex ">
                        <PostRating />
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-[295px] rounded-xl border-[1px] border-D3_Gray  px-5 py-3 text-L_Gray Text-s-Regular "
                    onClick={() => {
                      if (swiper) {
                        swiper.slideNext();
                      }
                    }}
                  >
                    아직 안봤어요
                  </button>
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </div>
  );
}
