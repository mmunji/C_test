"use client";

import Image from "next/image";
import { useState } from "react";

import { CaretDownGrayMd, CaretDownMd } from "../../../../../public/icons";
import useNeedStoryMoreButton from "../../_hooks/useNeedStoryMoreButton";

interface DetailStoryProps {
  overview: string;
}

export default function DetailStory({ overview }: DetailStoryProps) {
  const [clicked, setClicked] = useState<boolean | null>(null);
  const story = `${overview}`;
  const { contentRef, showMoreButton } = useNeedStoryMoreButton();

  return (
    <div
      className={`h-fit Laptop:w-[calc((100%-20px)/2)] Desktop:w-[768px] ${!showMoreButton && "pb-5 Laptop:pb-[32px]"} w-full rounded-[12px] bg-Black px-4 pt-5 Laptop:w-1/2 Laptop:bg-D1_Gray Laptop:px-8 Laptop:pt-7`}
    >
      <p
        ref={contentRef}
        className={`h-fit leading-[150%] transition-[height] duration-300 Text-s-Regular Laptop:Text-m-Regular ${clicked ? "h-fit" : "line-clamp-[3] h-[63px] text-ellipsis Laptop:line-clamp-[8] Laptop:h-[196px]"}`}
      >
        {story}
      </p>
      {showMoreButton && (
        <div className="my-1 flex h-6 items-center justify-center">
          <div>
            <Image
              src={CaretDownGrayMd}
              alt="더보기"
              className={`cursor-pointer select-none Laptop:hidden ${clicked ? "scale-[-1]" : "scale-1"} transition-transform`}
              onClick={() => setClicked(!clicked)}
            />
            <Image
              src={CaretDownMd}
              alt="더보기"
              className={`hidden cursor-pointer select-none Laptop:block ${clicked ? "scale-[-1]" : "scale-1"} transition-transform`}
              onClick={() => setClicked(!clicked)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
