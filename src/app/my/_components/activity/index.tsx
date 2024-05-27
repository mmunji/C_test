"use client";
import Image from "next/image";
import { useState } from "react";

import RatingList from "@/app/my/_components/activity/RatingList";
import ReviewList from "@/app/my/_components/activity/ReviewList";

import { Filter } from "../../../../../public/icons";

const TAB_MENU = ["톡", "평가로그"];

export default function Activity() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section className="flex flex-col gap-3 px-5 Tablet:flex Tablet:gap-4 Tablet:px-0">
      <h2 className="hidden Text-m-Bold Tablet:block Tablet:Text-l-Bold">
        내 활동
      </h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {TAB_MENU.map((menu, i) => (
            <button
              key={menu}
              onClick={() => setSelectedTab(i)}
              type="button"
              className={`${selectedTab === i ? "Text-m-Bold Tablet:Text-l-Bold" : "text-Gray Text-m-Medium Tablet:Text-l-Medium"} relative px-3 pb-3 pt-2`}
            >
              {menu} 11
              {selectedTab === i && (
                <span className="absolute bottom-[5px] left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-sm bg-Primary"></span>
              )}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="flex items-center gap-1 py-2 pl-1 pr-2 text-Gray_Orange"
        >
          <Image alt="필터" src={Filter} />
          <span className="Text-s-Medium">최신순</span>
        </button>
      </div>
      {!selectedTab ? <ReviewList /> : <RatingList />}
    </section>
  );
}
