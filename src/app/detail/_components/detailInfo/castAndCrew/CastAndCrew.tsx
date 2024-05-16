"use client";

import React, { useState } from "react";

import CastAndCrewTab from "./CastAndCrewTab";
import Crew from "./Crew";

export default function CastAndCrew() {
  const [activeTab, setActiveTab] = useState<"제작진" | "출연">("제작진");

  return (
    <section className="max-h-[256px] w-1/2">
      <CastAndCrewTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <Crew />
    </section>
  );
}
