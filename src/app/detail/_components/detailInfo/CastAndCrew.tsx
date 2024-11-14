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
  const { cast, crew } = castAndCrew;

  const tabs = [
    ...(cast && cast.length > 0 ? ["출연"] : []),
    ...(crew && crew.length > 0 ? ["제작진"] : []),
  ];

  const [activeTab, setActiveTab] = useState(tabs[0] || "");

  if (tabs.length === 0) return null;

  return (
    <section className="max-h-full">
      <CommonTab {...{ tabs, activeTab, setActiveTab, cast, crew }} />
      {activeTab === "출연" && cast && (
        <CastAndCrewSlider type="cast" cast={cast} />
      )}
      {activeTab === "제작진" && crew && (
        <CastAndCrewSlider type="crew" crew={crew} />
      )}
    </section>
  );
}
