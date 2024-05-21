import React from "react";

import DetailStory from "./DetailStory";

export default function DetailInfo() {
  return (
    <section className="flex max-h-[256px] Laptop:gap-5 Desktop:gap-6">
      <DetailStory />
      <div
        id="above-laptop-cast-and-crew"
        className="hidden max-h-[256px] w-1/2 Laptop:block"
      ></div>
    </section>
  );
}
