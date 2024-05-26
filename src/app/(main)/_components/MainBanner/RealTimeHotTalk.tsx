"use client";

import Image from "next/image";

import { StarFillSm } from "@/../public/icons";
export default function RealTimeHotTalk() {
  let arr = ["1", "1", "1", "1", "1"];
  {
    /*
  1. 임시로 모바일 텍스트
  2. 나중에 테블릿 ,렙탑, 데탑 사즈로
*/
  }
  return (
    <div className="flex  flex-col justify-end gap-[20px]  text-white">
      <h1 className=" hidden Laptop:block Laptop:Text-xl-Bold Desktop:Text-xl-Bold  ">
        실시간 핫한 톡
      </h1>

      <ul className="flex flex-col Tablet:gap-3 Laptop:hidden Desktop:hidden">
        {Array(3)
          .fill(0)
          .map((e, index) => {
            return (
              <li
                key={index}
                className="flex items-center justify-between gap-2 Text-s-Regular"
              >
                <div className="flex">
                  <Image src={StarFillSm} alt="star" className="h-4 w-4" />
                  <span className="Text-xs-Regular">0.0</span>
                </div>
                <span>1줄까지 보여줍니다.</span>
                <span className=" opacity-40">방금전</span>
              </li>
            );
          })}
      </ul>
      {/* DeskTop , LabTop` */}
      <ul className="hidden flex-col Tablet:hidden  Laptop:flex Desktop:flex">
        {arr.map((e, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-between gap-5 Text-s-Regular"
            >
              <div className="flex">
                <Image src={StarFillSm} alt="star" className="h-4 w-4" />
                <Image src={StarFillSm} alt="star" className="h-4 w-4" />
                <Image src={StarFillSm} alt="star" className="h-4 w-4" />
                <Image src={StarFillSm} alt="star" className="h-4 w-4" />
                <Image src={StarFillSm} alt="star" className="h-4 w-4" />
              </div>
              <span className="Text-m-Medium">이건 테스트입니다.</span>
              <span className="Text-s-Mediuim opacity-40">방금 전</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
