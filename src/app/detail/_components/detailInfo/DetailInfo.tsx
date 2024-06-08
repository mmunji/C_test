import React from "react";

import CastAndCrew from "./CastAndCrew";
import DetailStory from "./DetailStory";

interface DetailInfoProps {
  overview: string;
}

export default function DetailInfo({ overview }: DetailInfoProps) {
  return (
    <section className="flex Laptop:gap-5 Desktop:gap-6">
      <DetailStory overview={overview} />
      <div className="hidden max-h-[256px] w-1/2 Laptop:block">
        <CastAndCrew />
      </div>
    </section>
  );
}
