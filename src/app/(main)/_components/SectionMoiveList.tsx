import { Suspense } from "react";

import KeywordSkeleton from "./MainSkeleton/Keyword/KeywordSkeleton";
import MovieTopSkeleton from "./MainSkeleton/MovieTop/MovieTopSkeleton";
import MasterPieceMoiveWapper from "./MasterPieceMovie/MasterPieceMoiveWapper";
import RecentKeywordWapper from "./SectionMoiveList/KeyWord/RecentKeywordWapper";
import MovieTopWapper from "./SectionMoiveList/MovieTopRank/MovieTopWapper";
import SimilarTastesMovieWapper from "./SectionMoiveList/SlimilarTaste/SimilarTastesMovieWapper";
import WatchedMoive from "./SectionMoiveList/WatchedMovies/WatchedMoive";
export default function SectionMoiveList() {
  return (
    <div className="mx-5 Tablet:mx-6 Laptop:mx-[64px] Desktop:mx-0">
      <div className="mx-auto mb-[100px] mt-[65px] flex flex-col gap-[68px] Tablet:mb-[160px] Tablet:mt-[84px] Tablet:gap-[100px] Laptop:mb-[180px] Laptop:mt-[77px] Laptop:gap-[120px] Desktop:mb-[200px] Desktop:mt-[120px] Desktop:max-w-[1560px] Desktop:gap-[140px]">
        {/* <div className="mx-auto mb-[100px] mt-[65px] flex w-full max-w-[1560px] flex-col gap-[68px] Tablet:mb-[160px] Tablet:mt-[84px] Tablet:gap-[100px] Laptop:mb-[180px] Laptop:mt-[77px] Laptop:gap-[120px] Desktop:mb-[200px] Desktop:mt-[120px] Desktop:gap-[140px]"> */}
        {/* 영화TOP4 전체  컴포넌트 */}
        <Suspense fallback={<MovieTopSkeleton />}>
          <MovieTopWapper />
        </Suspense>
        {/* 지금 많이 언급되는 키워드  컴포넌트 */}
        <Suspense fallback={<KeywordSkeleton />}>
          <RecentKeywordWapper />
        </Suspense>
        {/*씨네톡 속 숨겨진 명작  컴포넌트 */}
        <MasterPieceMoiveWapper />
        {/* 나와 취향이 비슷한 사람들 (다른 사람들은 이런 영화를 평가했어요)  컴포넌트 */}
        <SimilarTastesMovieWapper />
        {/*혹시 이 영화 보셨나요? */}
        <WatchedMoive />
      </div>
    </div>
  );
}
