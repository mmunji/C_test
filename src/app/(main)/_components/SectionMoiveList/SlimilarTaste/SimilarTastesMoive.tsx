"use client";

import SlimilarPost from "./SlimilarPost";

export default function SimilarTastesMoive() {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="Text-l-Bold Laptop:Text-xxl-Bold ">
        나와 취향이 비슷한 사람들
      </h1>
      <div className="flex gap-4 Tablet:hidden">
        {Array(4)
          .fill(0)
          .map((_, index) => {
            return (
              <div
                key={index}
                className="h-[60px] w-[60px] rounded-[60px] border-2 "
              />
            );
          })}
      </div>
      <SlimilarPost />
    </div>
  );
}
