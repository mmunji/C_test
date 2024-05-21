"use client";

import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";

import useDevice from "@/hooks/useDevice";

import DetailActiveTab from "../DetailActiveTab";
import Cast from "./Cast";
import Crew from "./Crew";

export default function CastAndCrew() {
  const tabs = ["제작진", "출연"];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
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
        <DetailActiveTab {...{ tabs, activeTab, setActiveTab }} />

        {activeTab === tabs[0] && <Crew device={device} />}
        {activeTab === tabs[1] && <Cast device={device} />}
      </section>,
      target as HTMLElement,
    )
  );
}
