import React from "react";

import DetailBannerSection from "./_components/detailBannerSection/DetailBannerSection";
import DetailInfo from "./_components/detailInfo/DetailInfo";

export default function Detail() {
  return (
    <div className="bg-BG">
      <DetailBannerSection />
      <div className="flex h-[1000px] flex-col gap-[100px] Laptop:mx-[68px] Laptop:mb-[184px] Laptop:mt-7 Desktop:mx-auto Desktop:w-[1560px]">
        <DetailInfo />
      </div>
    </div>
  );
}
