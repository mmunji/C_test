"use client";

import PostCardSkeleton from "../PostCardSkeleton";

export default function DesktopMovieTop() {
  return (
    <div className="hidden  w-full  Laptop:flex">
      <div className="flex w-full  gap-6 ">
        <PostCardSkeleton />
        <div className="flex  w-[368px] flex-shrink-0 flex-col  justify-between Desktop:w-[504px]">
          <div className="flex  flex-col gap-3">
            <div className="h-[30px] w-[100px] animate-pulse rounded-lg bg-D2_Gray Desktop:h-[40px]  " />
            <div className="h-[24px] w-[200px] animate-pulse rounded-lg   bg-D2_Gray  "></div>
          </div>
          <div className="flex flex-col gap-2">
            {Array(3)
              .fill("MovieTop")
              .map((index, _) => {
                return (
                  <div
                    key={_}
                    className="h-[40px] w-full animate-pulse rounded-xl bg-D2_Gray Desktop:h-[59px]   "
                  />
                );
              })}
          </div>
        </div>
        {Array(3)
          .fill("MovieTop2")
          .map((index, _) => {
            return <PostCardSkeleton key={_} />;
          })}
      </div>
    </div>
  );
}
