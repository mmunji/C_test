"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  BestTalkFire,
  ChatLineLg,
  StarFillMd,
  TmdbSm,
} from "@/../public/icons";

import PostCard from "../../PostCard";
import Tablet_BestTalkPost from "./Post/Tablet_BestTalkPost";
export default function Tablet_BestMoive() {
  return (
    <div className="hidden  Tablet:flex Laptop:hidden">
      <Swiper>
        {Array(3)
          .fill(0)
          .map((_, index) => {
            return (
              <SwiperSlide key={index}>
                <div className=" flex w-full gap-5">
                  <PostCard />
                  <div className="flex flex-col justify-between gap-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3 Text-l-Bold">
                        <h1 className="">윙카</h1>
                        <div className="flex gap-[10px] text-sm">
                          <span>YYYY</span>
                          <div className="border-[1px]"></div>
                          <span>장르/장르</span>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <div className="flex gap-1 Text-l-Bold">
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
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                          <Image
                            src={BestTalkFire}
                            alt="베스트"
                            className="h-6 w-6"
                          />
                          <h2>베스트 톡</h2>
                        </div>
                        <div className="flex gap-3">
                          <Tablet_BestTalkPost />
                          <Tablet_BestTalkPost />
                          <Tablet_BestTalkPost />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
