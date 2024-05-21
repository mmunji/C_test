import React from "react";

import CastAndCrew from "./_components/castAndCrew/CastAndCrew";
import DetailBannerSection from "./_components/detailBannerSection/DetailBannerSection";
import DetailInfo from "./_components/detailInfo/DetailInfo";
import KeywordBar from "./_components/keywordBar/KeywordBar";

export default function Detail() {
  return (
    <div className="bg-BG">
      <DetailBannerSection />
      <div className="mx-5 mt-[137px] h-[1000px] Tablet:mx-6 Tablet:mt-[118px] Laptop:mx-[68px] Laptop:mb-[184px] Laptop:mt-7 Desktop:mx-auto Desktop:w-[1560px]">
        <KeywordBar />
        <section className="flex flex-col gap-[100px]">
          <DetailInfo />
        </section>
      </div>
      <CastAndCrew />
    </div>
  );
}
