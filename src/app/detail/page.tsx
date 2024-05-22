import React from "react";

import CastAndCrew from "./_components/castAndCrew/CastAndCrew";
import DetailBannerSection from "./_components/detailBannerSection/DetailBannerSection";
import DetailInfo from "./_components/detailInfo/DetailInfo";
import KeywordAndTalkAndGallery from "./_components/keywordAndTalkAndGallery/KeywordAndTalkAndGallery";
import KeywordBar from "./_components/keywordBar/KeywordBar";

export default function Detail() {
  return (
    <div className="bg-BG">
      <DetailBannerSection />
      <div className="mx-5 mb-[100px] mt-[137px] Tablet:mx-6 Tablet:mb-40 Tablet:mt-[118px] Laptop:mx-[68px] Laptop:mb-[180px] Laptop:mt-7 Desktop:mx-auto Desktop:mb-[200px] Desktop:w-[1560px]">
        <KeywordBar />
        <section className="flex flex-col Laptop:gap-[100px]">
          <DetailInfo />
          <KeywordAndTalkAndGallery />
        </section>
      </div>
      <CastAndCrew />
    </div>
  );
}
