import { Suspense, useEffect, useState } from "react";

import SpeechBubble from "@/components/speechBubble/SpeechBubble";
import { tokenManager } from "@/services/auth/tokenManager";
import { myAPIs } from "@/services/my/myAPIs";

// import WatchedSkeleton from "../../MainSkeleton/WatchedMoive/WatchedSkeleton";
import MoviePosts from "./MoviePosts";

export default async function WatchedMoive() {
  const data = await myAPIs.getUser();
  let message = data
    ? "톡을 많이 작성할수록 내 취향에 비슷해져요"
    : "로그인 하고 별을 눌러 평가해보세요 ";

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1 text-center  Laptop:flex-row Laptop:gap-5 Laptop:text-left">
        <h1 className=" text-Silver Text-l-Bold  Laptop:Text-xxl-Bold">
          혹시 이 영화 보셨나요?
        </h1>
        <div className="hidden  Laptop:block">
          {data ? (
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
      <MoviePosts />
      {/* </Suspense> */}
    </div>
  );
}
