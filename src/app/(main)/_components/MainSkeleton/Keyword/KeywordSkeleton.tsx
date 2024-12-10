import LaptopKeyword from "./LaptopKeyword";
import MobileKeyword from "./MobileKeyword";
import TabletKeyword from "./TabletKeyword";

export default function KeywordSkeleton() {
  return (
    <div className="flex flex-col gap-4  ">
      <h2 className="Text-l-Bold Laptop:Text-xxl-Bold">
        지금 많이 언급되는 키워드
      </h2>
      <div>
        <LaptopKeyword />
        <MobileKeyword />
        <TabletKeyword />
      </div>
    </div>
  );
}
