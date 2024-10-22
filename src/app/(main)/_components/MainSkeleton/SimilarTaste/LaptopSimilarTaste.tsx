"use client";
import PostCardSkeleton from "../PostCardSkeleton";
import SimilarTasteTitle from "./SimilarTasteTitle";

export default function LaptopSimilarTaste() {
  return (
    <div className="hidden flex-col gap-5 Laptop:flex">
      <div className="flex w-full gap-6">
        {Array(4)
          .fill(0)
          .map((index, _) => {
            return <SimilarTasteTitle key={index} />;
          })}
      </div>
      <div className="flex  w-full animate-pulse flex-col gap-4 rounded-xl bg-D2_Gray px-6 pb-5 pt-6">
        <div className="h-[40px] w-[380px] animate-pulse rounded-lg bg-D3_Gray  " />
        <div className="flex w-full gap-6">
          {Array(6)
            .fill(0)
            .map((index, _) => {
              return <PostCardSkeleton color={"D3"} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
