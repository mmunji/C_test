"use client";

import { useCallback, useState } from "react";

import MovieCategory from "../MovieCategory";
import DeskTop_BestMovie from "./DeskTop_BestMoive";
import Mobile_BestMovie from "./Mobile_BestMovie";
import Tablet_BestMoive from "./Tablet_BestMoive";
export default function MoiveTopRank() {
  const [StateCategory, SetStateCategory] = useState(false);
  const onClick = useCallback(() => {
    SetStateCategory((prev) => !prev);
  }, []);

  /* 슬라이드 버튼 만들어야함 */

  return (
    <div className="flex flex-col gap-4  ">
      <div className="flex justify-between">
        <div className="flex gap-[24px]">
          <h1 className="Text-I-Bold Laptop:Text-xxl-Bold">영화톡TOP10</h1>
          <button className="flex items-center" onClick={onClick}>
            전체
          </button>
          {StateCategory ? <MovieCategory /> : ""}
        </div>
        <span className="text-D3_Gray">00.00.00 기준 `</span>
      </div>
      {/* 모바일 */}
      <Tablet_BestMoive />
      <DeskTop_BestMovie />
      <Mobile_BestMovie />
    </div>
  );
}
