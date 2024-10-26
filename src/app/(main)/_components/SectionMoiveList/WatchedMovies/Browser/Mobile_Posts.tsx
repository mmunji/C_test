"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { getTmdbPosterUrl } from "@/utils/tmdb";

import { NoImageSsikongi } from "../../../../../../../public/images";
import PostRating from "../../../Rating/PostRating";
interface WatchMovieType {
  MovieWatchMovies: WatchMovie[];
}
export default function Mobile_Posts({ MovieWatchMovies }: WatchMovieType) {
  const [MovieNumber, setMovieNumber] = useState(0);
  const handleMovieList = () => {
    if (MovieWatchMovies.length == MovieNumber + 1) {
      return null;
    } else {
      setMovieNumber((prev) => prev + 1);
    }
  };
  return (
    <div className="rounded-xl bg-D1_Gray px-3 py-7 Tablet:hidden ">
      <div className="flex flex-col rounded-xl px-[12px]  py-[28px]">
        <div>
          <div className="flex flex-col justify-center gap-3 ">
            <div className="flex justify-center">
              <Image
                height={230}
                width={153}
                className="rounded-xl"
                src={
                  MovieWatchMovies[MovieNumber].poster_path
                    ? getTmdbPosterUrl(
                        "original",
                        MovieWatchMovies[MovieNumber].poster_path,
                      )
                    : NoImageSsikongi
                }
                alt="영화 포스터"
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="Text-m-Medium">{MovieWatchMovies[0].movienm}</h1>
              <div className="flex gap-[10px] text-L_Gray Text-xs-Regular">
                <span>{MovieWatchMovies[MovieNumber].release_date}</span>
                <span>|</span>
                <span>{MovieWatchMovies[MovieNumber].genres[0].name}</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mt-5 text-center Text-l-Bold">
              {MovieWatchMovies[MovieNumber].rate}
            </h1>
            <div
              className=" flex items-center justify-center"
              onClick={handleMovieList}
            >
              <PostRating
                movienm={MovieWatchMovies[MovieNumber].movienm}
                movieId={MovieWatchMovies[MovieNumber].movieId}
                StarReview={true}
              />
            </div>
          </div>
        </div>

        <button
          className="mx-auto mt-7 w-full max-w-[352px] rounded-xl border-[1px] border-D3_Gray  px-5 py-3 text-L_Gray Text-s-Regular "
          onClick={handleMovieList}
        >
          아직 안봤어요
        </button>
      </div>
    </div>
  );
}
