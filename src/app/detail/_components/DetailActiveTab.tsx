import React, { Dispatch, SetStateAction } from "react";

interface CastAndCrewTab {
  tabs: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function DetailActiveTab({
  tabs,
  activeTab,
  setActiveTab,
}: CastAndCrewTab) {
  return (
    <section className="relative max-h-[40px] w-fit text-md">
      {tabs.map((tab, i) => (
        <button
          key={i}
          className={`px-3 pb-2 pt-1 font-bold ${activeTab === tab ? "text-Silver" : "text-Gray"}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
      <div
        className={`absolute bottom-[3px] h-0.5 bg-Primary transition-all duration-300 ease-out ${activeTab === "제작진" ? "left-[27.75px] w-5" : "left-[95px] w-5"}`}
      />
    </section>
  );
}
