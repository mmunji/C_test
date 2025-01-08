"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import SpeechBubble from "@/components/speechBubble/SpeechBubble";
import { blurDataURL } from "@/constants/blurImageUrl";
import useDevice from "@/hooks/useDevice";
import { tokenManager } from "@/services/auth/tokenManager";
import { useToastActions } from "@/stores/useToast";
import { delay } from "@/utils/delay";
import { getTmdbPosterUrl } from "@/utils/image";

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
  const handleToast = async (text: string) => {
    add(text);
    await delay(300);
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
            <div
              key={movie.movieId}
              className="flex w-full flex-shrink-0 flex-col gap-5"
            >
              <div className="flex flex-col items-center  justify-center gap-3">
                <div className="relative flex h-[230px] w-[156px] overflow-hidden rounded-xl">
                  <Image
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-cover"
                    fill
                    src={
                      movie.poster_path
                        ? getTmdbPosterUrl("w500", movie.poster_path)
                        : NoImageSsikongi
                    }
                    alt="영화 포스터"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-full max-w-[240px] Text-m-Medium">
                    <p className="line-clamp-1 text-center">{movie.movienm}</p>
                  </div>
                  <div className="flex gap-[10px] text-L_Gray Text-xs-Regular">
                    <span>{movie.release_date}</span>
                    <span>|</span>
                    <span>{movie.genres[0].name}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <h4 className="mt-5 text-center Text-l-Bold">{movie.rate}</h4>
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
        <div className="relative flex justify-center">
          {device == "mobile" ? (
            <div className="absolute -bottom-10 ">
              <SpeechBubble id={"SimilarTastesMovie"} dir="top">
                {message}
              </SpeechBubble>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-7 flex w-full justify-center">
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
