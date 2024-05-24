import React, { useState } from "react";

import TrailerAndPhotoSlider from "../../../common/TraillerAndPhotoSlider";
import DetailActiveTab from "../../../DetailActiveTab";

export default function TrailerAndPhoto() {
  const tabs = ["예고편", "포토"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <DetailActiveTab {...{ tabs, activeTab, setActiveTab }} />
      <TrailerAndPhotoSlider />
    </div>
  );
}
