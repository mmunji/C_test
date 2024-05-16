import React from "react";

import DetailBannerBottomLeft from "./DetailBannerBottomLeft";
import DetailBannerBottomRight from "./DetailBannerBottomRight";

export default function DetailBannerBottom() {
  return (
    <section className="mb-5 mt-auto flex justify-between Laptop:mx-[68px] Laptop:w-full Desktop:mx-auto Desktop:w-[1560px]">
      <DetailBannerBottomLeft />
      <DetailBannerBottomRight />
    </section>
  );
}
