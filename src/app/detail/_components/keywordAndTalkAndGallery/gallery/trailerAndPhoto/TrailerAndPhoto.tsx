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
  const tabs = ["포토", "관련 영상"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { trailer } = trailerAndPhoto;
  const { photo } = trailerAndPhoto;

  return (
    <div className="w-full">
      <CommonTab {...{ tabs, activeTab, setActiveTab }} />
      {activeTab === tabs[0] && (
        <TrailerAndPhotoSlider type="photo" photo={photo} />
      )}
      {activeTab === tabs[1] && (
        <TrailerAndPhotoSlider type="trailer" trailer={trailer} />
      )}
    </div>
  );
}
