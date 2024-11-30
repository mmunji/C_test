"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import SpeechBubble from "@/components/speechBubble/SpeechBubble";
import useDevice from "@/hooks/useDevice";
import { tokenManager } from "@/services/auth/tokenManager";
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
  const { device } = useDevice();
  const [message, setmessage] = useState(
    "로그인 하고 별을 눌러 평가해보세요 :",
  );
  const accessToken = tokenManager.getToken();
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
  useEffect(() => {
    if (accessToken) {
      setmessage("슬라이드하여 별점을 조절하세요");
    }
  }, [accessToken]);
  return (
    <div className="justify-center rounded-xl bg-D1_Gray px-3 py-7 Tablet:hidden">
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${MovieNumber * 100}%)` }}
        >
          {MovieWatchMovies.map((movie) => (
            <div key={movie.movieId} className="mb-7 w-full flex-shrink-0">
              <div className="flex flex-col items-center  justify-center gap-3">
                <div className="relative flex h-[230px] w-[156px] overflow-hidden rounded-xl">
                  <Image
                    className="object-cover"
                    fill
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
              <div className="flex justify-center">
                <h1 className="mt-5 text-center Text-l-Bold">{movie.rate}</h1>
                <div className="flex items-center justify-center p-1">
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
        <div className="relative flex justify-center">
          {device == "mobile" ? (
            <div className="absolute -bottom-2 ">
              <SpeechBubble id={"SimilarTastesMovie"} dir="top">
                {message}
              </SpeechBubble>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex w-full justify-center ">
          <button
            className=" w-full  max-w-[352px] rounded-xl border-[1px] border-D3_Gray px-5 py-3 text-L_Gray Text-s-Regular"
            onClick={handleMovieList}
          >
            아직 안봤어요
          </button>
        </div>
      </div>
    </div>
  );
}
