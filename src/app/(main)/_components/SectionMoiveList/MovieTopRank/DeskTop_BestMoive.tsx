import Image from "next/image";

import { ChatLineLg, StarFillMd, TmdbSm } from "@/../public/icons";

import PostCard from "../../PostCard";
import BestTalkPost from "./BestTalkPost";
export default function DeskTop_BestMovie() {
  return (
    <div className="  hidden gap-[24px] Laptop:flex Desktop:flex">
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
                <Image src={TmdbSm} alt="white_ start" className="h-6 w-6" />
                <span>0.0</span>
              </div>
              <div className="flex gap-1">
                <Image
                  src={StarFillMd}
                  alt="Primary_Start"
                  className="h-6 w-6"
                />
                <span>0.0</span>
              </div>
              <div className="flex gap-1">
                <Image src={ChatLineLg} alt="ChatBox" className="h-6 w-6" />
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
  );
}
