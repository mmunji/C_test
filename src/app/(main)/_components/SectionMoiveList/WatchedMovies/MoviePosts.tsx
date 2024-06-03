"use client";
import Image from "next/image";

import { StarXl } from "@/../public/icons";

import PostCard from "../../PostCard";
export default function MoviePosts() {
  return (
    <div>
      {/* Mobile */}
      <div className="flex flex-col  gap-7 rounded-xl bg-D1_Gray px-3 py-7 Tablet:hidden Laptop:hidden Desktop:hidden ">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col gap-3">
            <div className="h-[230px] w-[153px] rounded-xl border-2" />
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="Text-m-Medium">영화제목</h1>
                <div className="flex gap-[10px] text-L_Gray Text-xs-Regular">
                  <span>YYYY</span>
                  <span>|</span>
                  <span>장르/장르</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mt-5 text-center Text-l-Bold">0.0</h1>
            <div className="flex">
              {Array(5)
                .fill(5)
                .map((_, index) => {
                  return (
                    <Image
                      key={index}
                      src={StarXl}
                      alt="평점"
                      className="h-[44px] w-[44px]"
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <button className="rounded-xl border-[1px] border-L_Gray  px-5 py-3 text-L_Gray Text-s-Regular ">
          아직 안봤어요
        </button>
      </div>
      {/* Tablet */}

      <div className="mx-auto  hidden w-[557px] items-center rounded-xl bg-D1_Gray Tablet:flex Laptop:hidden Desktop:hidden">
        <div className="h-[280px] w-[200px] rounded-xl border-2 " />
        <div className="px-5 ">
          <div className="flex w-[317px] flex-col items-center justify-center gap-8  px-5 py-2">
            <h1 className="Text-I-Medium">영화제목</h1>
            <div className="Text-I-Mi flex gap-[10px] text-L_Gray">
              <span>YYYY</span>
              <span>|</span>
              <span>장르/장르</span>
            </div>
          </div>
          <div>
            <h1 className="mt-8 text-center Text-l-Bold">0.0</h1>
            <div className="flex items-center justify-center">
              {Array(5)
                .fill(5)
                .map((_, index) => {
                  return (
                    <Image
                      key={index}
                      src={StarXl}
                      alt="평점"
                      className="h-[44px] w-[44px]"
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden Tablet:flex">
        <button className="mx-auto mt-5 w-[392px] rounded-xl border-[1px] border-L_Gray px-5 py-3 text-L_Gray Text-s-Regular Laptop:hidden Desktop:hidden">
          아직 안봤어요
        </button>
      </div>
      {/* Laptop , Desktop */}
      <div className=" hidden  gap-[24px] Laptop:flex Desktop:flex">
        {Array(6)
          .fill(0)
          .map((e, index) => {
            return (
              <div key={index} className="flex flex-col">
                <PostCard PostType="Post" />
                <div className="flex  justify-between">
                  <Image
                    src={StarXl}
                    alt="star"
                    className="h-7 w-7 Desktop:h-[44px] Desktop:w-[44px]"
                  />
                  <Image
                    src={StarXl}
                    alt="star"
                    className="h-7 w-7 Desktop:h-[44px] Desktop:w-[44px]"
                  />
                  <Image
                    src={StarXl}
                    alt="star"
                    className="h-7 w-7 Desktop:h-[44px] Desktop:w-[44px]"
                  />
                  <Image
                    src={StarXl}
                    alt="star"
                    className="h-7 w-7 Desktop:h-[44px] Desktop:w-[44px]"
                  />
                  <Image
                    src={StarXl}
                    alt="star"
                    className="h-7 w-7 Desktop:h-[44px] Desktop:w-[44px]"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
