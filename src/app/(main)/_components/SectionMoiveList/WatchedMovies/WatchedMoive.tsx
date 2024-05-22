"use client";

import MoviePosts from "./MoviePosts";
export default function WatchedMoive() {
  let arr = ["1", "1", "1", "1"];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1  text-center Laptop:text-left Desktop:text-left">
        <h1 className=" Desktop: Text-xxl-Bold Text-l-Bold Laptop:Text-xxl-Bold">
          혹시 이 영화 보셨나요?
        </h1>
        <span className=" text-L_Gray Text-m-Regular Laptop:hidden Desktop:hidden ">
          간편하게 영화를 평가해보세요!
        </span>
      </div>
      <MoviePosts />
    </div>
  );
}
