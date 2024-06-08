"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import useDevice from "@/hooks/useDevice";

import { CaretDownGrayMd, CaretDownMd } from "../../../../../public/icons";
import useNeedStoryMoreButton from "../../_hooks/useNeedStoryMoreButton";

interface DetailStoryProps {
  overview: string;
}

export default function DetailStory({ overview }: DetailStoryProps) {
  const [clicked, setClicked] = useState(false);
  const story = `${overview}`;
  const { contentRef, showMoreButton, maxHeight } = useNeedStoryMoreButton();

  return (
    <div className="h-fit w-full rounded-[12px] bg-Black px-4 pt-5 Laptop:w-1/2 Laptop:bg-D1_Gray Laptop:px-8 Laptop:pt-7">
      <p
        ref={contentRef}
        style={{
          transition: "all 0.3s ease",
          height: clicked ? contentRef.current?.scrollHeight : maxHeight,
        }}
        className={`overflow-hidden leading-[150%] Text-s-Regular Laptop:Text-m-Regular ${clicked ? "h-fit" : "line-clamp-[3] h-[63px] text-ellipsis Laptop:line-clamp-[8] Laptop:h-[196px]"}`}
      >
        {story}
      </p>
      <div className="my-1 flex h-6 items-center justify-center">
        {showMoreButton && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
