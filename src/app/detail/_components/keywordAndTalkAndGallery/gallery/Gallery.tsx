import React from "react";

import CastAndCrewSlider from "../../common/CastAndCrewSlider";
import DividingLine from "../../common/DividingLine";
import GalleryTitle from "./GalleryTitle";
import TrailerAndPhoto from "./trailerAndPhoto/TrailerAndPhoto";

interface GalleryProps {
  castAndCrew: CastAndCrew;
}

interface CastAndCrew {
  cast?: DetailCastDTO[];
  crew?: DetailCrewDTO[];
}

export default function Gallery({ castAndCrew }: GalleryProps) {
  const { cast } = castAndCrew;
  const { crew } = castAndCrew;

  return (
    <>
      <GalleryTitle content="제작진" />
      <CastAndCrewSlider type="crew" crew={crew} />
      <DividingLine />
      <GalleryTitle content="출연" />
      <CastAndCrewSlider type="cast" cast={cast} />
      <DividingLine />
      <TrailerAndPhoto />
    </>
  );
}
