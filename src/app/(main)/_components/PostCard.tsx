"use client";
import Image from "next/image";
import { useState } from "react";

import { ChatFillSm, StarFillMd, ThumbsUpFillSm } from "@/../public/icons";

import GetRating from "./Rating/GetRating";
interface PostNumber {
  num?: number;
  onClick?: () => void;
  Hover?: () => void;
  StarPostType?: string;
  PostType?: string;
}

export default function PostCard({
  num,
  onClick,
  PostType,
  StarPostType,
}: PostNumber) {
  const [onMouseHover, SetMouseHover] = useState(false);
  const HandleMouseOver = () => {
    SetMouseHover(true);
  };
  const HandleMouseOut = () => {
    SetMouseHover(false);
  };
  return (
    <div
      className="h-[358px] w-[238px] rounded-xl Tablet:h-[390px] Tablet:w-[260px] Laptop:h-[260px] Laptop:w-[174px] Desktop:h-[360px]  Desktop:w-[240px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url('/images/detail/detail-poster-example.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick}
      onMouseOver={HandleMouseOver}
      onMouseOut={HandleMouseOut}
    >
      {num ? (
        <div className="Tablet:Text-I-Bold flex h-[30px] w-[30px] items-center justify-center rounded-bl-[12px] rounded-tl-[12px] bg-Primary Text-s-Bold">
          {num}
        </div>
      ) : (
        ""
      )}
      {StarPostType && onMouseHover ? (
        <div
          className="flex h-[358px] w-[238px] flex-col items-center rounded-xl px-5 py-7 Text-m-Regular  Tablet:h-[390px] Tablet:w-[260px] Laptop:h-[260px] Laptop:w-[174px] Desktop:h-[360px] Desktop:w-[240px]"
          style={{
            backdropFilter: "blur(5px)",
            background: "rgba(0, 0, 0, 0.50)",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <GetRating />
            <div className="flex flex-col gap-1">
              <span className="Text-m-Regular">
                여행은 새로운 경험과 추억을 선사하지만, 올바른 준비가
                필수입니다. 이번 블로그 포스트에서는ㅎ이번 블로
              </span>
              <div className="flex justify-end text-Gray Text-xs-Regular">
                00.00.00
              </div>
            </div>
            <div className="w-full border-[1px] text-Gray" />
            <div className="flex items-end justify-end gap-2 text-Gray_Orange Text-s-Medium">
              <div className="flex gap-1">
                <Image src={ThumbsUpFillSm} alt="별" />
                <span>0,000</span>
              </div>
              <div className="flex gap-1">
                <Image src={ChatFillSm} alt="별" />
                <span>0,000</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {PostType && onMouseHover ? (
        <div
          className="flex h-[358px] w-[238px] items-center rounded-xl px-5 py-7 Text-m-Regular  Tablet:h-[390px] Tablet:w-[260px] Laptop:h-[260px] Laptop:w-[174px] Desktop:h-[360px] Desktop:w-[240px]"
          style={{
            backdropFilter: "blur(5px)",
            background: "rgba(0, 0, 0, 0.50)",
          }}
        >
          여행은 새로운 경험과 추억을 선사하지만, 올바른 준비가 필수입니다. 이번
          블로그 포스트에서는ㅎ이번 블로그 포스트에서는ㅎ이번 블로그
          포스트에서는ㅎ이번 블로그 포
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
