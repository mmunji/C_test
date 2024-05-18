"use client";

import Image from "next/image";

import {
  ChatBox,
  Fire,
  GrayStart,
  PrimaryStart,
  WhiteStart,
} from "@/../public/icons";
export default function RealTimeHotTalk() {
  let arr = ["1", "1", "1", "1", "1"];
  return (
    <div className="flex w-[512px] flex-col justify-end gap-[20px] border-2 text-white">
      <h1 className=" text-xl font-Bold">실시간 핫한 톡</h1>
      <ul className="flex flex-col gap-[16px]">
        {arr.map((e, index) => {
          return (
            <li key={index} className="flex items-center justify-between">
              <div className="flex">
                <Image src={PrimaryStart} alt="star" className="h-4 w-4" />
                <Image src={PrimaryStart} alt="star" className="h-4 w-4" />
                <Image src={PrimaryStart} alt="star" className="h-4 w-4" />
                <Image src={GrayStart} alt="star" className="h-4 w-4" />
                <Image src={GrayStart} alt="star" className="h-4 w-4" />
              </div>
              <span>이건 테스트입니다.</span>
              <span className="text-Medium text-regular opacity-40">
                방금 전
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
