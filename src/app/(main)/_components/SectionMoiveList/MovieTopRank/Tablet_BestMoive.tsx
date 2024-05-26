"use client";
import Image from "next/image";

import {
  BestTalkFire,
  ChatLineLg,
  StarFillMd,
  TmdbSm,
} from "@/../public/icons";

import PostCard from "../../PostCard";
export default function Tablet_BestMoive() {
  return (
    <div className=" hidden w-full gap-5 Tablet:flex Laptop:hidden Desktop:hidden">
      <PostCard />
      <div className="flex flex-col justify-between gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <h1 className="text-2xl font-Bold">윙키</h1>
            <div className="flex gap-[10px] text-sm">
              <span>YYYY</span>
              <div className="border-[1px]"></div>
              <span>장르/장르</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-1 text-E_md">
              <Image src={TmdbSm} alt="white_ start" className="h-6 w-6" />
              <span>0.0</span>
            </div>
            <div className="flex gap-1">
              <Image src={StarFillMd} alt="Primary_Start" className="h-6 w-6" />
              <span>0.0</span>
            </div>
            <div className="flex gap-1">
              <Image src={ChatLineLg} alt="ChatBox" className="h-6 w-6" />
              <span>0.0</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              <Image src={BestTalkFire} alt="베스트" className="h-6 w-6" />
              <h2>베스트 톡</h2>
            </div>
            <div className="flex gap-3">
              <div className="h-[186px] w-[142px] rounded-3xl bg-D1_Gray px-4 py-5" />
              <div className="h-[186px] w-[142px] rounded-3xl bg-D1_Gray px-4 py-5" />
              <div className="h-[186px] w-[142px] rounded-3xl bg-D1_Gray px-4 py-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
