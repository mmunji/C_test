"use client";
import { Suspense, useEffect, useState } from "react";

import SpeechBubble from "@/components/speechBubble/SpeechBubble";
import { tokenManager } from "@/services/auth/tokenManager";
import { movieAPIs } from "@/services/movie/movieAPIs";
import { myAPIs } from "@/services/my/myAPIs";

import WatchedSkeleton from "../../MainSkeleton/WatchedMoive/WatchedSkeleton";
// import WatchedSkeleton from "../../MainSkeleton/WatchedMoive/WatchedSkeleton";
import MoviePosts from "./MoviePosts";

export default function WatchedMoive() {
  const [accsstoken, setaccsstoken] = useState<string | null>("");
  const [WatchMovieData, setWatchMovieData] = useState<WatchMovie[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response: WatchMovie[] = await movieAPIs.getWatchMovie();
        setWatchMovieData(response);
        const token = tokenManager.getToken();
        if (token) {
          setaccsstoken(token);
        }
      } catch (error) {
        console.error("Failed to fetch movie data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, []);
  let message =
    accsstoken != ""
      ? "별을 눌러 평가해보세요 :)"
      : "로그인 하고 별을 눌러 평가해보세요 ";
  return isLoading ? (
    <WatchedSkeleton />
  ) : WatchMovieData.length != 0 ? (
    <div className="relative flex flex-col gap-4 Tablet:gap-5">
      <div className="flex flex-col gap-1 text-center  Laptop:flex-row Laptop:gap-5 Laptop:text-left">
        <h2 className=" text-Silver Text-l-Bold  Laptop:Text-xxl-Bold">
          혹시 이 영화 보셨나요?
        </h2>
        <div className="hidden  Laptop:block">
          {accsstoken ? (
            <SpeechBubble id={"WatchedMovie"} dir="left">
              {message}
            </SpeechBubble>
          ) : (
            <SpeechBubble id={"WatchedMovie"} dir="left">
              {message}
            </SpeechBubble>
          )}
        </div>
        <span className=" text-L_Gray Text-m-Regular Laptop:hidden  ">
          간편하게 영화를 평가해보세요!
        </span>
      </div>
      {/* <Suspense fallback={<WatchedSkeleton />}> */}
      <MoviePosts WatchMovieData={WatchMovieData} />
      {/* </Suspense> */}
    </div>
  ) : null;
}
