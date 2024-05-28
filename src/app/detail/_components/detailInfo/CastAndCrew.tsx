"use client";

import React, { useState } from "react";

import CastAndCrewSlider from "../common/CastAndCrewSlider";
import DetailActiveTab from "../common/DetailActiveTab";

export default function CastAndCrew() {
  const tabs = ["제작진", "출연"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="max-h-full">
      <DetailActiveTab {...{ tabs, activeTab, setActiveTab }}>
        <div
          className={`absolute bottom-[3px] h-0.5 w-5 bg-Primary transition-all duration-300 ease-out ${activeTab === tabs[0] ? "translate-x-[22.5px] Laptop:translate-x-[27.75px]" : "translate-x-[82px] Laptop:translate-x-[95px]"}`}
        />
      </DetailActiveTab>

      {activeTab === tabs[0] && <CastAndCrewSlider />}
      {activeTab === tabs[1] && <CastAndCrewSlider />}
    </section>
  );
}
