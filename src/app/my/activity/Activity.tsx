"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import RatingList from "@/app/my/activity/RatingList";
import ReviewList from "@/app/my/activity/ReviewList";
import Button from "@/components/buttons/Button";
import Dropdown from "@/components/dropdown/Dropdown";
import ROUTES from "@/constants/routes";

import { Filter } from "../../../../public/icons";

const TAB_MENU = ["톡", "평가로그"];

export default function Activity() {
  const [filter, setFilter] = useState<"최신순" | "좋아요순">("최신순");
  const [selectedTab, setSelectedTab] = useState(0);
  const pathname = usePathname();
  const isActivityPage = pathname === ROUTES.MY.activity();

  return (
    <section
      className={`${isActivityPage ? "flex" : "hidden"} flex-col gap-3 px-5 Tablet:flex Tablet:gap-4 Tablet:px-0`}
    >
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
        <Dropdown>
          <Dropdown.Trigger>
            <Button variant={"textIconL"} className="Text-s-Medium">
              <Image alt="필터" src={Filter} />
              <span>{filter}</span>
            </Button>
          </Dropdown.Trigger>
          <Dropdown.List>
            <Dropdown.Item onClick={() => setFilter("최신순")}>
              최신순
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter("좋아요순")}>
              좋아요순
            </Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      </div>
      {!selectedTab ? <ReviewList /> : <RatingList />}
    </section>
  );
}
