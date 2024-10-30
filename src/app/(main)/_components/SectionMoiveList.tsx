import { Suspense } from "react";

import KeywordSkeleton from "./MainSkeleton/Keyword/KeywordSkeleton";
import MasterPieceSkeleton from "./MainSkeleton/MasterPieceMovie/MasterPieceSkeletion";
import MovieTopSkeleton from "./MainSkeleton/MovieTop/MovieTopSkeleton";
import SimilarTasteSkleton from "./MainSkeleton/SimilarTaste/SimilarTasteSkleton";
import MasterPieceMoiveWapper from "./MasterPieceMovie/MasterPieceMoiveWapper";
import RecentKeywordWapper from "./SectionMoiveList/KeyWord/RecentKeywordWapper";
import MovieTopWapper from "./SectionMoiveList/MovieTopRank/MovieTopWapper";
import SimilarTastesMovie from "./SectionMoiveList/SlimilarTaste/SimilarTastesMovie";
import SimilarTastesMovieWapper from "./SectionMoiveList/SlimilarTaste/SimilarTastesMovieWapper";
import WatchedMoive from "./SectionMoiveList/WatchedMovies/WatchedMoive";
export default function SectionMoiveList() {
  return (
    <div className="ablet:gap-[100px] mt-[65px] flex flex-col gap-[68px] px-5 Tablet:mt-[84px] Laptop:mt-[77px] Laptop:gap-[120px] Laptop:px-[68px] Desktop:mt-[120px] Desktop:gap-[140px] Desktop:px-[180px]">
      {/* 영화TOP4 전체  컴포넌트 */}
      <Suspense fallback={<MovieTopSkeleton />}>
        <MovieTopWapper />
      </Suspense>
      {/* 지금 많이 언급되는 키워드  컴포넌트 */}
      <Suspense fallback={<KeywordSkeleton />}>
        <RecentKeywordWapper />
      </Suspense>
      {/*씨네톡 속 숨겨진 명작  컴포넌트 */}
      <Suspense fallback={<MasterPieceSkeleton />}>
        <MasterPieceMoiveWapper />
      </Suspense>
      {/* 나와 취향이 비슷한 사람들 (다른 사람들은 이런 영화를 평가했어요)  컴포넌트 */}

      <SimilarTastesMovieWapper />
      {/*혹시 이 영화 보셨나요? */}
      <WatchedMoive />
      <div></div>
    </div>
  );
}
