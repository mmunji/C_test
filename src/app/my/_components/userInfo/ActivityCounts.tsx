import { myAPIs } from "@/services/my/myAPIs";

export default async function ActivityCounts() {
  const activityCount = await myAPIs.getActivityCount();
  return (
    <div className="flex w-full justify-center gap-6 rounded-xl bg-D1_Gray p-3 Tablet:justify-between Tablet:gap-[41px] Tablet:px-[88px] Tablet:py-3 Laptop:px-[100px]">
      <div className="relative flex w-[54px] flex-col items-center gap-0 py-0 Tablet:w-auto Tablet:gap-1 Tablet:px-3 Tablet:py-2">
        <span className="Text-m-Bold Tablet:Text-l-Bold">
          {activityCount.rateCount}
        </span>
        <span className="whitespace-nowrap text-L_Gray Text-xs-Regular Tablet:text-Silver Tablet:Text-m-Bold">
          받은 좋아요
        </span>
      </div>
      <div className="w-[1px] bg-D2_Gray"></div>
      <div className="relative flex w-[54px] flex-col items-center gap-0 py-0 Tablet:w-auto Tablet:gap-1 Tablet:px-3 Tablet:py-2">
        <span className="Text-m-Bold Tablet:Text-l-Bold">
          {activityCount.reviewCount}
        </span>
        <span className="whitespace-nowrap text-L_Gray Text-xs-Regular Tablet:text-Silver Tablet:Text-m-Bold">
          평가한 영화
        </span>
      </div>
      <div className="w-[1px] bg-D2_Gray"></div>
      <div className="relative flex w-[54px] flex-col items-center gap-0 py-0 Tablet:w-auto Tablet:gap-1 Tablet:px-3 Tablet:py-2">
        <span className="Text-m-Bold Tablet:Text-l-Bold">
          {activityCount.bookmarkCount}
        </span>
        <span className="whitespace-nowrap text-L_Gray Text-xs-Regular Tablet:text-Silver Tablet:Text-m-Bold">
          찜한 영화
        </span>
      </div>
    </div>
  );
}
