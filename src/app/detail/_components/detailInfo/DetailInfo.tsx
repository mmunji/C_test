import React from "react";

import CastAndCrew from "./CastAndCrew";
import DetailStory from "./DetailStory";

interface DetailInfoProps {
  movieDetailData: MovieDetailData;
}

export default function DetailInfo({ movieDetailData }: DetailInfoProps) {
  return (
    <section className="flex w-full justify-between Laptop:gap-5 Desktop:gap-6">
      <DetailStory overview={movieDetailData.overview} />
      <div className="hidden max-h-[256px] Laptop:block Laptop:w-[calc((100%-20px)/2)] Desktop:w-[768px]">
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
