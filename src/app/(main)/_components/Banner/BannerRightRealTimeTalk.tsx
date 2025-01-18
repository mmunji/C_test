import "dayjs/locale/ko"; // 한국어 가져오기

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

import { StarFillSm } from "@/../public/icons";
import useDevice from "@/hooks/useDevice";

import GetRating from "../Rating/GetRating";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface ReviewListType {
  ReviewList: BannerReview[];
}

export default function BannerRightRealTimeTalk({
  ReviewList,
}: ReviewListType) {
  const { device } = useDevice();
  return (
    <div className="flex  flex-col gap-[20px]  text-Silver Tablet:w-[331px] Tablet:justify-end  Laptop:w-[390px] Desktop:w-[521px]">
      <h2 className=" hidden Laptop:block  Laptop:Text-xl-Bold   ">
        실시간 핫한 톡
      </h2>
      <ul className="relative flex flex-col Tablet:gap-3  Desktop:gap-4">
        {ReviewList.map((Review, index) => {
          return (
            <li
              key={index}
              className={`relative flex items-center ${index < 2 ? "mobile:hidden Laptop:flex" : ""}  justify-between gap-2 text-Silver Text-xs-Regular Tablet:Text-s-Regular Laptop:gap-5 Laptop:Text-m-Regular`}
            >
              {device == "laptop" || device == "desktop" ? (
                <GetRating
                  StarRating={Review.star}
                  ratingsize="Sm"
                  space={false}
                />
              ) : (
                <div className="flex w-[35px] items-center justify-center">
                  <Image src={StarFillSm} alt="star" className="h-4 w-4" />
                  <span className="Text-s-Regular">
                    {Review.star.toFixed(1)}
                  </span>
                </div>
              )}
              <span className="line-clamp-1 w-48 flex-1 ">
                {Review.content}
              </span>

              <span className=" flex items-center  opacity-40 Laptop:Text-s-Medium">
                {dayjs(Review.createdAt).fromNow()}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
