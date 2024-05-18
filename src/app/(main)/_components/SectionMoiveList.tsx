import MasterPieceMoive from "./SectionMoiveList/MasterPieceMoive";
import MoiveTopRank from "./SectionMoiveList/MovieTopRank";
import RecentKeyword from "./SectionMoiveList/RecentKeyword";
import SimilarTastesMoive from "./SectionMoiveList/SimilarTastesMoive";
import WatchedMoive from "./SectionMoiveList/WatchedMoive";
export default function SectionMoiveList() {
  return (
    <div className="flex flex-col gap-[150px] Laptop:px-[68px] Desktop:px-[180px]">
      {/* 영화TOP4 전체  컴포넌트 */}
      <MoiveTopRank />
      {/* 지금 많이 언급되는 키워드  컴포넌트 */}
      <RecentKeyword />
      {/*씨네톡 속 숨겨진 명작  컴포넌트 */}
      <MasterPieceMoive />
      {/* 나와 취향이 비슷한 사람들  컴포넌트 */}
      <SimilarTastesMoive />
      {/*혹시 이 영화 보셨나요? */}
      <WatchedMoive />
      <div></div>
    </div>
  );
}
