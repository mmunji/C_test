import React from "react";

import { keywordAPIs } from "@/api/keyword/keywordAPIs";
import { movieAPIs } from "@/api/movie/movieAPIs";

import DetailBannerSection from "./_components/detailBannerSection/DetailBannerSection";
import DetailInfo from "./_components/detailInfo/DetailInfo";
import TrailerAndPhoto from "./_components/keywordAndTalkAndGallery/gallery/trailerAndPhoto/TrailerAndPhoto";
import Keyword from "./_components/keywordAndTalkAndGallery/keyword/Keyword";
import KeywordAndTalkAndGallery from "./_components/keywordAndTalkAndGallery/KeywordAndTalkAndGallery";
import Talk from "./_components/keywordAndTalkAndGallery/talk/Talk";
import KeywordBar from "./_components/keywordBar/KeywordBar";

export default async function Detail() {
  const movieDetailData: MovieDetailData =
    await movieAPIs.getMovieDetail(838209);
  const keywordsData: Keyword[] = await keywordAPIs.getKeyword(838209);
  const noKeyword = keywordsData?.length === 0;
  const top1Keyword = keywordsData.sort((a, b) => b.count - a.count)[0];

  return (
    <div className="bg-BG">
      <DetailBannerSection movieDetailData={movieDetailData} />
      <div className="mx-5 mb-[100px] mt-[137px] Tablet:mx-6 Tablet:mb-40 Tablet:mt-[118px] Laptop:mx-[68px] Laptop:mb-[180px] Laptop:mt-7 Desktop:mx-auto Desktop:mb-[200px] Desktop:w-[1560px]">
        {!noKeyword && (
          <KeywordBar title={movieDetailData.title} top1Keyword={top1Keyword} />
        )}
        <section className="flex w-full flex-col Laptop:gap-[100px]">
          <DetailInfo movieDetailData={movieDetailData} />

          <div className="hidden Laptop:block">
            <TrailerAndPhoto
              trailerAndPhoto={{
                trailer: movieDetailData.videoList,
                photo: movieDetailData.imageDTOList,
              }}
            />
          </div>

          <section className="hidden Laptop:flex Laptop:gap-7 Desktop:gap-9">
            <div className="w-[67.74%]">
              <Talk />
            </div>
            <div className="w-[32.26%]">
              <Keyword keywordsData={keywordsData} noKeyword={noKeyword} />
            </div>
          </section>

          <KeywordAndTalkAndGallery
            {...{ movieDetailData, keywordsData, noKeyword }}
          />
        </section>
      </div>
    </div>
  );
}
