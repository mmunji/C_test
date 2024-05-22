"use client";
import Image from "next/image";
import { useCallback, useState } from "react";

import {
  ChatBox,
  Fire,
  GrayStart,
  PrimaryStart,
  TMDB,
  UpPoint,
  WhiteStart,
} from "@/../public/icons";

import PostCard from "../../PostCard";
import MovieCategory from "../MovieCategory";
import DeskTop_BestMovie from "./DeskTop_BestMoive";
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
          <h1 className="Text-I-Bold">영화톡TOP10</h1>
          <button className="flex items-center" onClick={onClick}>
            전체
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 10L12 14L8 10"
                stroke="#999490"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          {StateCategory ? <MovieCategory /> : ""}
        </div>
        <span className="text-D3_Gray">00.00.00 기준</span>
      </div>
      {/* 모바일 */}
      <Tablet_BestMoive />
      <DeskTop_BestMovie />
      <div className="flex w-[238px] flex-col gap-4  rounded-xl bg-Black pb-4  Tablet:hidden Laptop:hidden Desktop:hidden ">
        <PostCard />
        <div className="flex flex-col gap-2 px-4">
          <div className="flex justify-between Text-xs-Regular">
            <div className="flex items-center rounded bg-Primary px-1 text-White">
              Best
            </div>
            <div className="flex items-center justify-center gap-1 text-L_Gray">
              <Image src={UpPoint} alt="white_ start" className="h-4 w-4" />
              <span>0,000</span>
            </div>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="12" fill="#D9D9D9" />
            </svg>
            <span className="Text-s-Regular">
              김고은 굿씬이 진짜 미쳤음.. 생각보다 영화가 긴데 몰입감이 오져
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
