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
    return () => setActiveSearchTab("전체");
  }, [setActiveSearchTab]);

  return (
    <CommonTab
      activeTab={activeSearchTab}
      setActiveTab={setActiveSearchTab}
      tabs={["전체", `영화 ${movieLength}`, `톡 ${reviewLength}`]}
    />
  );
}
