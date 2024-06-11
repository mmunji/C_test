"use client";

import { useState } from "react";

import Footer from "@/app/(main)/_components/Footer";
import SearchMovieList from "@/app/search/[id]/_components/SearchMovieList";
import SearchTalkList from "@/app/search/[id]/_components/SearchTalkList";
import CommonTab from "@/components/commonTab/CommonTab";

const TABS = ["전체", "영화 55", "톡 11"];

export default function Page({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="mt-3">
      <div className="mb-[100px]">
        <div className="px-5">
          <h1 className="flex gap-2 Text-l-Bold">
            <strong>{params.id}</strong>
            <span>검색결과</span>
          </h1>
          <div className="mt-4">
            <CommonTab
              {...{
                tabs: TABS,
                activeTab,
                setActiveTab,
              }}
            />
          </div>
        </div>
        <SearchMovieList />
        <div className="my-7 h-3 bg-Black" />
        <SearchTalkList />
      </div>
      <Footer />
    </div>
  );
}
