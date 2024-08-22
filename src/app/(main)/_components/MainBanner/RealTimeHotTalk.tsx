"use client";

import "dayjs/locale/ko"; // 한국어 가져오기

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

import { StarFillSm } from "@/../public/icons";

import GetRating from "../Rating/GetRating";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface ReviewListType {
  ReviewList: [
    {
      content: string;
      createdAt: string;
      star: number;
    },
  ];
}

export default function RealTimeHotTalk({ ReviewList }: ReviewListType) {
  let arr = ["1", "1", "1", "1", "1"];
  {
    /*
  1. 임시로 모바일 텍스트
  2. 나중에 테블릿 ,렙탑, 데탑 사즈로
*/
  }
  return (
    <div className="flex  flex-col justify-end gap-[20px]  text-white">
      <h1 className=" hidden Laptop:block Laptop:Text-xl-Bold  Desktop:w-[521px]  ">
        실시간 핫한 톡
      </h1>

      <ul className="flex flex-col Tablet:gap-3 Laptop:hidden ">
        {Array(3)
          .fill(0)
          .map((_, index) => {
            return (
              <li
                key={index}
                className="items- center   flex justify-between gap-2 Text-s-Regular"
              >
                <div className="flex">
                  <Image src={StarFillSm} alt="star" className="h-4 w-4" />
                  <span className="Text-xs-Regular">
                    {ReviewList[index].star}
                  </span>
                </div>
                <span className="line-clamp-1 w-48 flex-1 truncate Text-m-Medium">
                  {ReviewList[index].content}
                </span>

                <span className=" opacity-40">
                  {dayjs(ReviewList[index].createdAt).fromNow()}
                </span>
              </li>
            );
          })}
      </ul>
      {/* DeskTop , LabTop` */}
      <ul className="hidden flex-col Tablet:hidden Tablet:gap-3  Laptop:flex  Laptop:gap-3 Desktop:flex Desktop:gap-4">
        {ReviewList.map((ReviewData, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-between gap-5 Text-s-Regular"
            >
              <GetRating StarRating={ReviewData.star} ratingsize="Sm" />
              <span className="line-clamp-1 w-48 flex-1 truncate Text-m-Medium">
                {ReviewData.content}
              </span>
              <span className="Text-s-Mediuim opacity-40">
                {dayjs(ReviewData.createdAt).fromNow()}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
