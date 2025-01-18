import MasterPieceMoiveWapper from "./MasterPieceMovie/MasterPieceMoiveWapper";
import RecentKeywordWapper from "./SectionMoiveList/KeyWord/RecentKeywordWapper";
import MovieTopWapper from "./SectionMoiveList/MovieTopRank/MovieTopWapper";
import SimilarTastesMovieWapper from "./SectionMoiveList/SlimilarTaste/SimilarTastesMovieWapper";
import WatchedMovieWapper from "./SectionMoiveList/WatchedMovies/WatchedMovieWapper";

export default function SectionMoiveList() {
  return (
    <div className="mx-5 Tablet:mx-6 Laptop:mx-[64px] Desktop:mx-0">
      <div className="mx-auto mb-[100px] mt-[65px] flex flex-col gap-[68px] Tablet:mb-[160px] Tablet:mt-[84px] Tablet:gap-[100px] Laptop:mb-[180px] Laptop:mt-[77px] Laptop:gap-[120px] Desktop:mb-[200px] Desktop:mt-[120px] Desktop:max-w-[1560px] Desktop:gap-[140px]">
        <MovieTopWapper />
        {/* 지금 많이 언급되는 키워드  컴포넌트 */}
        <RecentKeywordWapper />
        {/*씨네톡 속 숨겨진 명작  컴포넌트 */}
        <MasterPieceMoiveWapper />
        {/* 나와 취향이 비슷한 사람들 (다른 사람들은 이런 영화를 평가했어요)  컴포넌트 */}
        <SimilarTastesMovieWapper />
        {/*혹시 이 영화 보셨나요? */}
        <WatchedMovieWapper />
      </div>
    </div>
  );
}
