import React from "react";

import DetailBannerBottomLeft from "./DetailBannerBottomLeft";
import DetailBannerBottomRight from "./DetailBannerBottomRight";

interface DetailBannerBottomProps {
  posterImage: string;
}

export default function DetailBannerBottom({
  posterImage,
}: DetailBannerBottomProps) {
  return (
    <section className="mx-auto mb-5 mt-auto flex flex-col items-center justify-between Laptop:mx-[68px] Laptop:w-full Laptop:flex-row Desktop:mx-auto Desktop:w-[1560px]">
      <DetailBannerBottomLeft />
      <DetailBannerBottomRight posterImage={posterImage} />
    </section>
  );
}
