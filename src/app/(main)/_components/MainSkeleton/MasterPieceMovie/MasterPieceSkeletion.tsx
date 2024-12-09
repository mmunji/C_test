import { TextSkeleton } from "@/app/my/_components/skeletons/Skeleton";

function MasterPieceItemSkeleton() {
  return (
    <div className="flex w-[156px] shrink-0 flex-col gap-2 Tablet:w-[165px] Laptop:w-[174px] Desktop:w-[240px]">
      <div className="h-[230px] shrink-0 animate-pulse rounded-xl bg-D2_Gray Tablet:h-[240px] Laptop:h-[260px] Desktop:h-[360px]" />
      <TextSkeleton className="hidden h-7 w-full Laptop:flex" />
    </div>
  );
}

export default function MasterPieceSkeleton() {
  return (
    <div className="flex flex-col gap-5 Tablet:gap-4">
      <div className="flex flex-col gap-1 Laptop:flex-row Laptop:justify-between">
        <h2 className="Text-l-Bold Laptop:Text-xxl-Bold">
          씨네톡 속 숨겨진 명작
        </h2>
        <span className="text-L_Gray Text-m-Regular Laptop:hidden">
          리뷰수 대비 평점이 높은 작품들이에요
        </span>
      </div>
      <div className="flex gap-2 overflow-hidden Tablet:gap-4 Laptop:gap-5 Desktop:gap-6">
        <MasterPieceItemSkeleton />
        <MasterPieceItemSkeleton />
        <MasterPieceItemSkeleton />
        <MasterPieceItemSkeleton />
        <MasterPieceItemSkeleton />
        <MasterPieceItemSkeleton />
        <MasterPieceItemSkeleton />
        <MasterPieceItemSkeleton />
      </div>
    </div>
  );
}
