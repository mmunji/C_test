"use client";

import Image from "next/image";
import { useState } from "react";

import { useToastActions } from "@/stores/useToast";
import { getTmdbPosterUrl } from "@/utils/tmdb";

import { NoImageSsikongi } from "../../../../../../../public/images";
import PostRating from "../../../Rating/PostRating";
interface WatchMovieType {
  MovieWatchMovies: WatchMovie[];
}
export default function Mobile_Posts({ MovieWatchMovies }: WatchMovieType) {
  const [MovieNumber, setMovieNumber] = useState(0);
  const { add } = useToastActions();
  const handleMovieList = () => {
    if (MovieWatchMovies.length == MovieNumber + 1) {
      return null;
    } else {
      setMovieNumber((prev) => prev + 1);
    }
  };
  const handleToast = (text: string) => {
    add(text);
    handleMovieList();
  };

  return (
    <div className="rounded-xl bg-D1_Gray px-3 py-7 Tablet:hidden">
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${MovieNumber * 100}%)` }}
        >
          {MovieWatchMovies.map((movie, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-[12px] py-[28px]"
            >
              <div className="flex flex-col justify-center gap-3">
                <div className="flex justify-center">
                  <Image
                    height={230}
                    width={153}
                    className="rounded-xl"
                    src={
                      movie.poster_path
                        ? getTmdbPosterUrl("original", movie.poster_path)
                        : NoImageSsikongi
                    }
                    alt="영화 포스터"
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                  <h1 className="Text-m-Medium">{movie.movienm}</h1>
                  <div className="flex gap-[10px] text-L_Gray Text-xs-Regular">
                    <span>{movie.release_date}</span>
                    <span>|</span>
                    <span>{movie.genres[0].name}</span>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="mt-5 text-center Text-l-Bold">{movie.rate}</h1>
                <div className="flex items-center justify-center">
                  <PostRating
                    movienm={movie.movienm}
                    movieId={movie.movieId}
                    StarReview={true}
                    handleMovieList={handleToast}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="mx-auto w-full max-w-[352px] rounded-xl border-[1px] border-D3_Gray px-5 py-3 text-L_Gray Text-s-Regular"
          onClick={handleMovieList}
        >
          아직 안봤어요
        </button>
      </div>
    </div>
  );
}
