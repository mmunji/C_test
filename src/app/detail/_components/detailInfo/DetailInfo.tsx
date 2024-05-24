import React from "react";

import CastAndCrew from "./CastAndCrew";
import DetailStory from "./DetailStory";

export default function DetailInfo() {
  return (
    <section className="flex Laptop:gap-5 Desktop:gap-6">
      <DetailStory />
      <div className="hidden max-h-[256px] w-1/2 Laptop:block">
        <CastAndCrew />
      </div>
    </section>
  );
}
