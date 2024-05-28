import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";

interface CastAndCrewTab {
  tabs: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function DetailActiveTab({
  tabs,
  activeTab,
  setActiveTab,
  children,
}: PropsWithChildren<CastAndCrewTab>) {
  return (
    <section className="relative max-h-[40px] w-fit text-md">
      {tabs.map((tab, i) => (
        <button
          key={i}
          className={`px-3 pb-2 pt-1 Text-m-Bold Laptop:Text-l-Bold ${activeTab === tab ? "text-Silver" : "text-Gray"}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}

      {children}
    </section>
  );
}
