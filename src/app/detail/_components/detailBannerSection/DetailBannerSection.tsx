import React from "react";

import DetailBannerBottom from "./DetailBannerBottom";

export default function DetailBannerSection() {
  return (
    <section className="relative mt-[-64px] h-[380px] w-full Tablet:h-[420px] Laptop:mt-[-80px] Laptop:h-[640px] Desktop:h-[816px]">
      <div
        className="flex h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(38, 38, 38, 0.00) 0%, #262626 100%), url('/images/detail-banner-example.png')",
        }}
      >
        <DetailBannerBottom />
      </div>
    </section>
  );
}
