"use client";

import React, { useState } from "react";

import CommonTab from "../../../../../../components/commonTab/CommonTab";
import TrailerAndPhotoSlider from "../../../common/TraillerAndPhotoSlider";

interface TrailerAndPhotoProps {
  trailerAndPhoto: TrailerAndPhoto;
}

interface TrailerAndPhoto {
  trailer: string[];
  photo: DetailImageDTO[];
}

export default function TrailerAndPhoto({
  trailerAndPhoto,
}: TrailerAndPhotoProps) {
  const tabs = ["예고편", "포토"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { trailer } = trailerAndPhoto;
  const { photo } = trailerAndPhoto;

  return (
    <div>
      <CommonTab {...{ tabs, activeTab, setActiveTab }} />
      {activeTab === tabs[0] && (
        <TrailerAndPhotoSlider type="trailer" trailer={trailer} />
      )}
      {activeTab === tabs[1] && (
        <TrailerAndPhotoSlider type="photo" photo={photo} />
      )}
    </div>
  );
}
