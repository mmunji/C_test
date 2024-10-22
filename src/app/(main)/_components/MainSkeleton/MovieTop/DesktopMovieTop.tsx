"use client";

import PostCardSkeleton from "../PostCardSkeleton";

export default function DesktopMovieTop() {
  return (
    <div className="hidden  Laptop:flex">
      <div className="flex gap-6 ">
        <PostCardSkeleton />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div className="h-[30px] w-[100px] animate-pulse rounded-lg bg-D2_Gray Desktop:h-[40px]  " />
            <div className="h-[24px] w-[200px] animate-pulse rounded-lg   bg-D2_Gray  "></div>
          </div>
          <div className="flex flex-col gap-2">
            {Array(3)
              .fill("MovieTop")
              .map((index, _) => {
                return (
                  <div
                    key={index}
                    className="h-[40px] w-[368px] animate-pulse rounded-xl bg-D2_Gray Desktop:h-[59px]  Desktop:w-[504px] "
                  />
                );
              })}
          </div>
        </div>
        {Array(3)
          .fill("MovieTop2")
          .map((index, _) => {
            return <PostCardSkeleton key={index} />;
          })}
      </div>
    </div>
  );
}
