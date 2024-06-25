import React from "react";

import DetailBannerBottomLeft from "./DetailBannerBottomLeft";
import DetailBannerBottomRight from "./DetailBannerBottomRight";

interface DetailBannerBottomProps {
  movieDetailData: MovieDetailData;
}

export default function DetailBannerBottom({
  movieDetailData,
}: DetailBannerBottomProps) {
  return (
    <section className="mx-auto mb-5 mt-auto flex flex-col items-center justify-between Laptop:mx-[68px] Laptop:w-full Laptop:flex-row Desktop:mx-auto Desktop:w-[1560px]">
      <DetailBannerBottomLeft movieDetailData={movieDetailData} />
      <DetailBannerBottomRight movieDetailData={movieDetailData} />
    </section>
  );
}
