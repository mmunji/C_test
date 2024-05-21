"use client";

import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";

import useDevice from "@/hooks/useDevice";

import Cast from "./Cast";
import CastAndCrewTab from "./CastAndCrewTab";
import Crew from "./Crew";

export default function CastAndCrew() {
  const [activeTab, setActiveTab] = useState<"제작진" | "출연">("제작진");
  const { device } = useDevice();

  const target = useMemo(
    () =>
      device === "laptop" || device === "desktop"
        ? document.getElementById("above-laptop-cast-and-crew")
        : document.getElementById("below-tablet-cast-and-crew"),
    [device],
  );

  return (
    target &&
    ReactDOM.createPortal(
      <section className="max-h-full">
        <CastAndCrewTab activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "제작진" && <Crew device={device} />}
        {activeTab === "출연" && <Cast device={device} />}
      </section>,
      target as HTMLElement,
    )
  );
}
