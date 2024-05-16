import React from "react";

import CastAndCrew from "./castAndCrew/CastAndCrew";
import DetailStory from "./DetailStory";

export default function DetailInfo() {
  return (
    <section className="flex max-h-[256px] Laptop:gap-5 Desktop:gap-6">
      <DetailStory />
      <CastAndCrew />
    </section>
  );
}
