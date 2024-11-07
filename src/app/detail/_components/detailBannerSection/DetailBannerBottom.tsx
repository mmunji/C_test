import React from "react";

import DetailBannerBottomLeft from "./DetailBannerBottomLeft";
import DetailBannerBottomRight from "./DetailBannerBottomRight";

interface DetailBannerBottomProps {
  movieId: number;
  movieDetailData: MovieDetailData;
}

export default function DetailBannerBottom({
  movieId,
  movieDetailData,
}: DetailBannerBottomProps) {
  return (
    <section className="mx-auto mt-auto flex flex-col items-center justify-between Laptop:mx-[68px] Laptop:w-full Laptop:flex-row Desktop:mx-auto Desktop:w-[1560px]">
      <DetailBannerBottomLeft movieDetailData={movieDetailData} />
      <DetailBannerBottomRight
        movieId={movieId}
        movieDetailData={movieDetailData}
      />
    </section>
  );
}
