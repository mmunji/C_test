"use client";

import React, { useState } from "react";

import CastAndCrewSlider from "../common/CastAndCrewSlider";
import DetailActiveTab from "../DetailActiveTab";

export default function CastAndCrew() {
  const tabs = ["제작진", "출연"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="max-h-full">
      <DetailActiveTab {...{ tabs, activeTab, setActiveTab }} />

      {activeTab === tabs[0] && <CastAndCrewSlider />}
      {activeTab === tabs[1] && <CastAndCrewSlider />}
    </section>
  );
}
