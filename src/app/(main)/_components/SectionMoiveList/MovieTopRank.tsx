"use client";
import Image from "next/image";
import { useCallback, useState } from "react";

import {
  ChatBox,
  Fire,
  GrayStart,
  PrimaryStart,
  TMDB,
  WhiteStart,
} from "@/../public/icons";

import PostCard from "../PostCard";
import BestTalkPost from "./BestTalkPost";
import MovieCategory from "./MovieCategory";
export default function MoiveTopRank() {
  const [StateCategory, SetStateCategory] = useState(false);
  const onClick = useCallback(() => {
    SetStateCategory((prev) => !prev);
  }, []);

  /* 슬라이드 버튼 만들어야함 */

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between">
        <div className="flex gap-[24px]">
          <h1 className="text-2xl  font-Bold">영화톡TOP4</h1>
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

      <div className="flex  gap-[24px]">
        <div className="flex gap-[24px]">
          <PostCard />
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col gap-3">
              <div className="flex items-end gap-3">
                <h1 className="text-2xl font-Bold">윙키</h1>
                <div className="flex gap-[10px] text-sm">
                  <span>YYYY</span>
                  <div className="border-[1px]"></div>
                  <span>장르/장르</span>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex gap-1 text-E_md">
                  <Image src={TMDB} alt="white_ start" className="h-6 w-6" />
                  <span>0.0</span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={PrimaryStart}
                    alt="Primary_Start"
                    className="h-6 w-6"
                  />
                  <span>0.0</span>
                </div>
                <div className="flex gap-1">
                  <Image src={ChatBox} alt="ChatBox" className="h-6 w-6" />
                  <span>0.0</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[12px]  Laptop:w-[368px]  Desktop:w-[504px] ">
              <BestTalkPost />
              <BestTalkPost />
              <BestTalkPost />
            </div>
          </div>
        </div>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
