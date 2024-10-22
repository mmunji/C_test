import LaptopSimilarTaste from "./LaptopSimilarTaste";
import MobileSimilarTaste from "./MobileSimilarTaste";
import TabletSimilarTaste from "./TabletSimilarTaste";

export default function SimilarTasteSkleton() {
  return (
    <div>
      <div className="flex flex-col gap-4  ">
        <h1 className="Text-l-Bold Laptop:Text-xxl-Bold">
          다른 사람들은 이런 영화를 평가했어요
        </h1>
        <MobileSimilarTaste />
        <TabletSimilarTaste />
        <LaptopSimilarTaste />
      </div>
    </div>
  );
}
