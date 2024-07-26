"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { ChevronDown } from "@/../public/icons";
import Button from "@/components/buttons/Button";
import Dropdown from "@/components/dropdown/dropdown";

import MovieCategory from "../MovieCategory";
import DeskTop_BestMovie from "./DeskTop_BestMoive";
import Laptop_BestMovie from "./Laptop_BestMovie";
import Mobile_BestMovie from "./Mobile_BestMovie";
import Tablet_BestMoive from "./Tablet_BestMoive";
export default function MoiveTopRank() {
  const [filter, setFilter] = useState<"전체" | "액션" | "모험">("전체");
  /* 슬라이드 버튼 만들어야함 */

  return (
    <div className="flex flex-col gap-4  ">
      <div className="flex justify-between">
        <div className="flex gap-[24px]">
          <h1 className="Text-I-Bold Laptop:Text-xxl-Bold">영화톡TOP10</h1>
          {/* <button className="flex items-center" onClick={onClick}>
            전체
          </button> */}
          <Dropdown>
            <Dropdown.Trigger>
              <Button variant={"textIconL"} className="Text-m-Medium">
                <span>{filter}</span>
                <Image alt="arrow" src={ChevronDown} />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.List>
              <Dropdown.Item onClick={() => setFilter("전체")}>
                전체
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setFilter("전체")}>
                전체
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setFilter("전체")}>
                전체
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
          {/* {StateCategory ? <MovieCategory /> : ""} */}
        </div>
        <span className="text-D3_Gray">00.00.00 기준 `</span>
      </div>
      {/* 모바일 */}
      <Tablet_BestMoive />
      <DeskTop_BestMovie />
      <Laptop_BestMovie />
      <Mobile_BestMovie />
    </div>
  );
}
