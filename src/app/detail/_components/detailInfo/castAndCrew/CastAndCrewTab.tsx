import React, { Dispatch, SetStateAction } from "react";

interface CastAndCrewTab {
  activeTab: "제작진" | "출연";
  setActiveTab: Dispatch<SetStateAction<"제작진" | "출연">>;
}

export default function CastAndCrewTab({
  activeTab,
  setActiveTab,
}: CastAndCrewTab) {
  return (
    <section className="relative max-h-[40px] w-fit text-md">
      <button
        className={`px-3 pb-2 pt-1 font-bold ${activeTab === "제작진" ? "text-Silver" : "text-Gray"}`}
        onClick={() => setActiveTab("제작진")}
      >
        제작진
      </button>
      <button
        className={`px-3 pb-2 pt-1 font-bold ${activeTab === "출연" ? "text-Silver" : "text-Gray"}`}
        onClick={() => setActiveTab("출연")}
      >
        출연
      </button>
      <div
        className={`absolute bottom-[3px] h-0.5 bg-Primary transition-all duration-300 ease-out ${activeTab === "제작진" ? "left-[27.75px] w-5" : "left-[95px] w-5"}`}
      />
    </section>
  );
}
