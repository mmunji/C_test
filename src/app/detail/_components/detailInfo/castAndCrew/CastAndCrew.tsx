"use client";

import React, { useState } from "react";

import Cast from "./Cast";
import CastAndCrewTab from "./CastAndCrewTab";
import Crew from "./Crew";

export default function CastAndCrew() {
  const [activeTab, setActiveTab] = useState<"제작진" | "출연">("제작진");

  return (
    <section className="hidden max-h-[256px] w-1/2 Laptop:block">
      <CastAndCrewTab activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "제작진" && <Crew />}
      {activeTab === "출연" && <Cast />}
    </section>
  );
}
