"use client";

import React, { useState } from "react";

import CommonTab from "@/components/commonTab/CommonTab";

import CastAndCrewSlider from "../common/CastAndCrewSlider";

interface CastAndCrewProps {
  castAndCrew: CastAndCrew;
}

interface CastAndCrew {
  cast?: DetailCastDTO[];
  crew?: DetailCrewDTO[];
}

export default function CastAndCrew({ castAndCrew }: CastAndCrewProps) {
  const tabs = ["출연", "제작진"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { cast } = castAndCrew;
  const { crew } = castAndCrew;

  return (
    <section className="max-h-full">
      <CommonTab {...{ tabs, activeTab, setActiveTab }} />

      {activeTab === tabs[0] && <CastAndCrewSlider type="cast" cast={cast} />}
      {activeTab === tabs[1] && <CastAndCrewSlider type="crew" crew={crew} />}
    </section>
  );
}
