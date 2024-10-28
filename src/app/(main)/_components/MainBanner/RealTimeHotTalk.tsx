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
  ReviewList: BannerReview[];
}

export default function RealTimeHotTalk({ ReviewList }: ReviewListType) {
  return (
    <div className="flex  flex-col gap-[20px]  text-white Tablet:justify-end">
      <h1 className=" hidden Laptop:block Laptop:w-[390px]  Laptop:Text-xl-Bold Desktop:w-[521px]  ">
        실시간 핫한 톡
      </h1>

      <ul className="flex flex-col Tablet:gap-3 Laptop:hidden ">
        {ReviewList.map((Review, index) => {
          if (index > 2) return null;
          return (
            <li
              key={Review.content}
              className={`items- center flex  justify-between gap-2 text-Silver Text-xs-Regular Tablet:w-[331px] Tablet:Text-s-Regular`}
            >
              <div className="flex w-[35px] items-center justify-center">
                <Image src={StarFillSm} alt="star" className="h-4 w-4" />
                <span className="Text-s-Regular">{Review.star.toFixed(1)}</span>
              </div>
              <span className="line-clamp-1 w-48 flex-1  Text-s-Medium">
                {Review.content}
              </span>

              <span className=" flex   items-center opacity-40">
                {dayjs(Review.createdAt).fromNow()}
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
              key={ReviewData.content}
              className="flex items-center justify-between gap-5 text-Silver Text-s-Regular"
            >
              <GetRating
                StarRating={ReviewData.star}
                ratingsize="Sm"
                space={false}
              />
              <span className="line-clamp-1 w-48 flex-1  Text-m-Medium">
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
