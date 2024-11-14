import React from "react";

import CastAndCrewSlider from "../../common/CastAndCrewSlider";
import DividingLine from "../../common/DividingLine";
import GalleryTitle from "./GalleryTitle";
import TrailerAndPhoto from "./trailerAndPhoto/TrailerAndPhoto";

interface GalleryProps {
  castAndCrew: CastAndCrew;
  trailerAndPhoto: TrailerAndPhoto;
}

interface CastAndCrew {
  cast?: DetailCastDTO[];
  crew?: DetailCrewDTO[];
}

interface TrailerAndPhoto {
  trailer: string[];
  photo: DetailImageDTO[];
}

export default function Gallery({
  castAndCrew,
  trailerAndPhoto,
}: GalleryProps) {
  const { cast } = castAndCrew;
  const { crew } = castAndCrew;

  return (
    <>
      {cast?.length !== 0 && (
        <>
          <GalleryTitle content="출연" />
          <CastAndCrewSlider type="cast" cast={cast} />
          <DividingLine />
        </>
      )}
      {crew?.length !== 0 && (
        <>
          <GalleryTitle content="제작진" />
          <CastAndCrewSlider type="crew" crew={crew} />
          <DividingLine />
        </>
      )}
      <TrailerAndPhoto trailerAndPhoto={trailerAndPhoto} />
    </>
  );
}
