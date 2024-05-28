"use client";
import Image from "next/image";
import { useState } from "react";

import RatingList from "@/app/my/activity/RatingList";
import ReviewList from "@/app/my/activity/ReviewList";

import { Filter } from "../../../../public/icons";

const TAB_MENU = ["톡", "평가로그"];

export default function Page() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="flex flex-col gap-3 px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {TAB_MENU.map((menu, i) => (
            <button
              key={menu}
              onClick={() => setSelectedTab(i)}
              type="button"
              className={`${selectedTab === i ? "Text-m-Bold" : "text-Gray Text-m-Medium"} relative px-3 pb-3 pt-2`}
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
    </div>
  );
}
