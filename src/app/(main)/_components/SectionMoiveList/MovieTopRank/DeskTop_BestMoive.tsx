"use client";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  BestTalkFire,
  ChatLineLg,
  ChevronRightMd,
  StarFillMd,
  TmdbSm,
} from "@/../public/icons";

import PostCard from "../../PostCard";
import BestTalkPost from "./BestTalkPost";

export default function DeskTop_BestMovie() {
  SwiperCore.use([Pagination]);
  const [StatePost, SetStatePost] = useState(0);
  const onHandlePost = (index: number) => {
    SetStatePost(index);
  };
  return (
    <div className=" hidden Laptop:flex ">
      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        className="mySwiper"
        modules={[Pagination]}
      >
        {Array(10)
          .fill(0)
          .map((_, index) => {
            return (
              <SwiperSlide
                key={index}
                className={StatePost === index ? "w-[700px]" : " w-[240px]"}
              >
                <div className="flex gap-6">
                  <PostCard
                    num={index + 1}
                    onClick={() => onHandlePost(index)}
                  />
                  {StatePost === index ? (
                    <div className="flex flex-col justify-between transition-all">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-end gap-3">
                          <h1 className="Text-xxl-Bold">윙키</h1>
                          <div className="flex gap-[10px] Text-xs-Regular">
                            <span>YYYY</span>
                            <div className="border-[1px]"></div>
                            <span>장르/장르</span>
                          </div>
                        </div>
                        <div className="flex gap-5">
                          <div className="flex gap-1 text-E_md">
                            <Image
                              src={TmdbSm}
                              alt="white_ start"
                              className="h-6 w-6"
                            />
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
                            <Image
                              src={ChatLineLg}
                              alt="ChatBox"
                              className="h-6 w-6"
                            />
                            <span>0.0</span>
                          </div>
                        </div>
                      </div>
                      <div className=" flex w-[368px] flex-col  gap-[12px]  Desktop:w-[504px] ">
                        <div className="flex justify-between">
                          <div className="flex gap-1">
                            <Image
                              src={BestTalkFire}
                              alt=""
                              className="h-6 w-6"
                            />
                            <h1 className="Text-m-Bold">BEST 톡</h1>
                          </div>
                          <Link
                            href={"/"}
                            className="flex items-center text-Gray_Orange"
                          >
                            자세히보기{" "}
                            <Image src={ChevronRightMd} alt="화살표" />
                          </Link>
                        </div>
                        <BestTalkPost />
                        <BestTalkPost />
                        <BestTalkPost />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
