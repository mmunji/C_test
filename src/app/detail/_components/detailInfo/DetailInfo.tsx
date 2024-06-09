import React from "react";

import CastAndCrew from "./CastAndCrew";
import DetailStory from "./DetailStory";

interface DetailInfoProps {
  movieDetailData: MovieDetailData;
}

export default function DetailInfo({ movieDetailData }: DetailInfoProps) {
  return (
    <section className="flex Laptop:gap-5 Desktop:gap-6">
      <DetailStory overview={movieDetailData.overview} />
      <div className="hidden max-h-[256px] w-1/2 Laptop:block">
        <CastAndCrew
          castAndCrew={{
            cast: movieDetailData.castDTOList,
            crew: movieDetailData.crewDTOList,
          }}
        />
      </div>
    </section>
  );
}
