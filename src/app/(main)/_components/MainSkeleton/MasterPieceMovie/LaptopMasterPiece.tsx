"use client";

import useDevice from "@/hooks/useDevice";

import PostCardSkeleton from "../PostCardSkeleton";

export default function LaptopMasterPiece() {
  return (
    <div>
      <div className="flex w-full gap-6 Tablet:hidden">
        {Array(2)
          .fill("PostCard")
          .map((index, _) => {
            return <PostCardSkeleton key={index} />;
          })}
      </div>
      <div className=" hidden w-full gap-4 Tablet:flex Laptop:hidden">
        {Array(4)
          .fill("PostCard")
          .map((index, _) => {
            return <PostCardSkeleton key={index} />;
          })}
      </div>
      <div className="hidden w-full gap-6 Laptop:flex">
        {Array(6)
          .fill("PostCard")
          .map((index, _) => {
            return <PostCardSkeleton key={index} />;
          })}
      </div>
    </div>
  );
}
