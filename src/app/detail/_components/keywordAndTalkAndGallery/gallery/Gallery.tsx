import React from "react";

import CastAndCrewSlider from "../../common/CastAndCrewSlider";
import DividingLine from "../../common/DividingLine";
import GalleryTitle from "./GalleryTitle";
import TrailerAndPhoto from "./trailerAndPhoto/TrailerAndPhoto";

export default function Gallery() {
  return (
    <>
      <GalleryTitle content="제작진" />
      <CastAndCrewSlider />
      <DividingLine />
      <GalleryTitle content="출연" />
      <CastAndCrewSlider />
      <DividingLine />
      <TrailerAndPhoto />
    </>
  );
}
