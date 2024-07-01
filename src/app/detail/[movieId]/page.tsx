import React from "react";

import { keywordAPIs } from "@/services/keyword/keywordAPIs";
import { movieAPIs } from "@/services/movie/movieAPIs";

import DetailBannerSection from "../_components/detailBannerSection/DetailBannerSection";
import DetailInfo from "../_components/detailInfo/DetailInfo";
import TrailerAndPhoto from "../_components/keywordAndTalkAndGallery/gallery/trailerAndPhoto/TrailerAndPhoto";
import Keyword from "../_components/keywordAndTalkAndGallery/keyword/Keyword";
import KeywordAndTalkAndGallery from "../_components/keywordAndTalkAndGallery/KeywordAndTalkAndGallery";
import Talk from "../_components/keywordAndTalkAndGallery/talk/Talk";
import KeywordBar from "../_components/keywordBar/KeywordBar";

export default async function Detail({
  params,
}: {
  params: { movieId: string };
}) {
  const movieId = Number(params.movieId);
  const movieDetailData: MovieDetailData =
    await movieAPIs.getMovieDetail(movieId);
  const keywordsData: Keyword[] = await keywordAPIs.getKeyword(movieId);
  const latestKeywordData = await keywordAPIs.getLatestKeyword(movieId);

  const noKeyword = keywordsData?.length === 0;
  const top1Keyword = keywordsData.sort((a, b) => b.count - a.count)[0];
  const movieTitle = movieDetailData.title;

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
              <Talk title={movieTitle} movieId={movieId} />
            </div>
            <div className="w-[32.26%]">
              <Keyword
                {...{
                  keywordsData,
                  noKeyword,
                  movieId,
                  title: movieTitle,
                  latestKeywords: latestKeywordData,
                }}
              />
            </div>
          </section>

          <KeywordAndTalkAndGallery
            {...{
              movieDetailData,
              keywordsData,
              noKeyword,
              movieId,
              title: movieTitle,
              latestKeywords: latestKeywordData,
            }}
          />
        </section>
      </div>
    </div>
  );
}
