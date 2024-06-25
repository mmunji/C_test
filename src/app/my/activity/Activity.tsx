"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import RatingList from "@/app/my/activity/RatingList";
import ReviewList from "@/app/my/activity/ReviewList";
import Button from "@/components/buttons/Button";
import CommonTab from "@/components/commonTab/CommonTab";
import Dropdown from "@/components/dropdown/Dropdown";
import ROUTES from "@/constants/routes";

import { Filter } from "../../../../public/icons";

const tabs = ["톡 5551", "평가로그 123"];
export default function Activity() {
  const [filter, setFilter] = useState<"최신순" | "좋아요순" | "오래된순">(
    "최신순",
  );
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const pathname = usePathname();
  const isActivityPage = pathname === ROUTES.MY.activity();

  useEffect(() => {
    setFilter("최신순");
  }, [activeTab]);

  return (
    <section
      className={`${isActivityPage ? "flex" : "hidden"} flex-col gap-3 px-5 Tablet:flex Tablet:gap-4 Tablet:px-0`}
    >
      <h2 className="hidden Text-m-Bold Tablet:block Tablet:Text-l-Bold">
        내 활동
      </h2>
      <div className="flex items-center justify-between">
        <CommonTab
          {...{
            tabs,
            activeTab,
            setActiveTab,
          }}
        />
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
            <Dropdown.Item onClick={() => setFilter("오래된순")}>
              오래된순
            </Dropdown.Item>
            {activeTab.includes("톡") && (
              <Dropdown.Item onClick={() => setFilter("좋아요순")}>
                좋아요순
              </Dropdown.Item>
            )}
          </Dropdown.List>
        </Dropdown>
      </div>
      {activeTab === tabs[0] ? <ReviewList /> : <RatingList />}
    </section>
  );
}
