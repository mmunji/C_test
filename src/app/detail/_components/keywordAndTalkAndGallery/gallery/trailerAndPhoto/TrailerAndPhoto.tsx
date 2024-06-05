"use client";

import React, { useState } from "react";

import CommonTab from "../../../../../../components/commonTab/CommonTab";
import TrailerAndPhotoSlider from "../../../common/TraillerAndPhotoSlider";

export default function TrailerAndPhoto() {
  const tabs = ["예고편", "포토"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <CommonTab {...{ tabs, activeTab, setActiveTab }} />
      <TrailerAndPhotoSlider />
    </div>
  );
}
