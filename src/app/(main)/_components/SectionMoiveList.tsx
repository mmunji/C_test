import MasterPieceMoive from "./MasterPieceMovie/MasterPieceMoive";
import RecentKeyword from "./SectionMoiveList/KeyWord/RecentKeyword";
import MoiveTopRank from "./SectionMoiveList/MovieTopRank/MovieTopRank";
import SimilarTastesMoive from "./SectionMoiveList/SlimilarTaste/SimilarTastesMoive";
import WatchedMoive from "./SectionMoiveList/WatchedMovies/WatchedMoive";
export default function SectionMoiveList() {
  return (
    <div className="mt-10 flex flex-col gap-[68px]  px-5 Laptop:gap-[150px]   Laptop:px-[68px] Desktop:gap-[150px] Desktop:px-[180px]">
      {/* 영화TOP4 전체  컴포넌트 */}
      <MoiveTopRank />
      {/* 지금 많이 언급되는 키워드  컴포넌트 */}
      <RecentKeyword />
      {/*씨네톡 속 숨겨진 명작  컴포넌트 */}
      <MasterPieceMoive />
      {/* 나와 취향이 비슷한 사람들 (다른 사람들은 이런 영화를 평가했어요)  컴포넌트 */}
      <SimilarTastesMoive />
      {/*혹시 이 영화 보셨나요? */}
      <WatchedMoive />
      <div></div>
    </div>
  );
}
