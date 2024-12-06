"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import SpeechBubble from "@/components/speechBubble/SpeechBubble";
import { useToastActions } from "@/stores/useToast";
import { getTmdbPosterUrl } from "@/utils/tmdb";

import { NoImageSsikongi } from "../../../../../../../public/images";
import PostRating from "../../../Rating/PostRating";
interface WatchMovieType {
  MovieWatchMovies: WatchMovie[];
}
export default function Tablet_Posts({ MovieWatchMovies }: WatchMovieType) {
  const [MovieNumber, setMovieNumber] = useState(0);
  const { add } = useToastActions();
  const handleMovieList = () => {
    if (MovieWatchMovies.length === MovieNumber + 1) {
      return null;
    } else {
      setMovieNumber((prev) => prev + 1);
    }
  };
  const handleToast = (text: string) => {
    add(text);
    setMovieNumber((prev) => prev + 1);
  };

  return (
    <div className="hidden flex-col justify-center Tablet:flex Laptop:hidden">
      <div className="mx-auto hidden w-[537px] items-center  Tablet:flex Laptop:hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${MovieNumber * 100}%)` }} // 슬라이드 애니메이션
        >
          {MovieWatchMovies.map((movie) => (
            <div
              key={movie.movieId}
              className="flex h-[280px] w-full flex-shrink-0 "
            >
              <Link href={`/detail/${movie.movieId}`}>
                <div className="flex h-full justify-center bg-D1_Gray">
                  <Image
                    height={280}
                    width={200}
                    className="rounded-xl object-cover"
                    src={
                      movie.poster_path
                        ? getTmdbPosterUrl("w780", movie.poster_path)
                        : NoImageSsikongi
                    }
                    alt="영화 포스터"
                  />
                </div>
              </Link>
              <div className="flex w-[337px] flex-col items-center justify-center  gap-8 rounded-r-xl bg-D1_Gray px-5">
                <div className="flex flex-col items-center justify-center gap-2 ">
                  <div className="w-full max-w-[317px] Text-l-Medium">
                    <p className="line-clamp-1">{movie.movienm}</p>
                  </div>
                  <div className="flex items-center gap-[10px] text-L_Gray Text-s-Regular">
                    <span>{movie.release_date}</span>
                    <div className="h-3 border-r-[1px] border-L_Gray" />
                    <span>{movie.genres[0].name}</span>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <PostRating
                      movienm={movie.movienm}
                      movieId={movie.movieId}
                      StarReview={true}
                      handleMovieList={handleToast}
                    />
                  </div>
                  <div className="mt-2">
                    <SpeechBubble id={"WatchedMovie"} dir="top">
                      로그인 하고 별을 눌러 평가해보세요 :)
                    </SpeechBubble>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden w-full justify-center Tablet:flex Laptop:hidden">
        <button
          className="mt-5 w-[392px] rounded-xl border-[1px] border-D2_Gray px-5 py-3 text-L_Gray Text-s-Regular"
          onClick={handleMovieList}
        >
          아직 안봤어요
        </button>
      </div>
    </div>
  );
}
