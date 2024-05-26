"use client";

import React, { useState } from "react";

import DetailActiveTab from "../../../common/DetailActiveTab";
import TrailerAndPhotoSlider from "../../../common/TraillerAndPhotoSlider";

export default function TrailerAndPhoto() {
  const tabs = ["예고편", "포토"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <DetailActiveTab {...{ tabs, activeTab, setActiveTab }}>
        <div
          className={`absolute bottom-[3px] h-0.5 w-5 bg-Primary transition-all duration-300 ease-out ${activeTab === tabs[0] ? "translate-x-[22.5px] Laptop:translate-x-[27.75px]" : "translate-x-[82px] Laptop:translate-x-[95px]"}`}
        />
      </DetailActiveTab>
      <TrailerAndPhotoSlider />
    </div>
  );
}
