"use client";

import { useEffect } from "react";

import CommonTab from "@/components/commonTab/CommonTab";
import useSearchTabStore from "@/stores/useTabStore";
interface TabProps {
  movieLength: number;
  reviewLength: number;
}

export default function Tab({ movieLength, reviewLength }: TabProps) {
  const { activeSearchTab, setActiveSearchTab } = useSearchTabStore();

  useEffect(() => {
    console.log("랜더링1");
    setActiveSearchTab("전체");
    return () => {
      setActiveSearchTab("전체");
    };
  }, [setActiveSearchTab]);
  console.log({ activeSearchTab });
  console.log("랜더링2");

  return (
    <CommonTab
      activeTab={activeSearchTab}
      setActiveTab={setActiveSearchTab}
      tabs={["전체", `영화 ${movieLength}`, `톡 ${reviewLength}`]}
    />
  );
}
