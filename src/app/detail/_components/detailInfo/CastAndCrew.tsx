"use client";

import React, { useState } from "react";

import CommonTab from "@/components/commonTab/CommonTab";

import CastAndCrewSlider from "../common/CastAndCrewSlider";

export default function CastAndCrew() {
  const tabs = ["제작진", "출연"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="max-h-full">
      <CommonTab {...{ tabs, activeTab, setActiveTab }} />

      {activeTab === tabs[0] && <CastAndCrewSlider />}
      {activeTab === tabs[1] && <CastAndCrewSlider />}
    </section>
  );
}
