import { TextSkeleton } from "@/app/my/_components/skeletons/Skeleton";

export default function SimilarTasteSkleton() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className=" relative flex   flex-col gap-5 Tablet:flex-row Tablet:items-center">
          <TextSkeleton className="h-7 w-[200px] Laptop:h-10 Laptop:w-[300px]" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SimilarTasteReviewersSkeleton />
        <SlimilarPostSkeleton />
      </div>
    </div>
  );
}

function SimilarTasteReviewersSkeleton() {
  return (
    <div className="-mr-5 Tablet:-mr-6 Laptop:mr-0">
      <div className="flex items-center gap-4 overflow-hidden Tablet:gap-5 Desktop:gap-6">
        <SimilarTasteReviewerSkeleton />
        <SimilarTasteReviewerSkeleton />
        <SimilarTasteReviewerSkeleton />
        <SimilarTasteReviewerSkeleton />
        <SimilarTasteReviewerSkeleton />
        <SimilarTasteReviewerSkeleton />
        <SimilarTasteReviewerSkeleton />
        <SimilarTasteReviewerSkeleton />
      </div>
    </div>
  );
}

function SimilarTasteReviewerSkeleton() {
  return (
    <div className="flex flex-col items-center Laptop:w-[368px]  Laptop:items-start Laptop:gap-5 Laptop:rounded-xl Laptop:bg-Black Laptop:px-5 Laptop:py-6 Laptop:hover:bg-D1_Gray Desktop:w-[372px]">
      <div className="flex flex-col items-center gap-1 Laptop:flex-row Laptop:gap-2">
        <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full Laptop:h-10 Laptop:w-10 Laptop:border-none">
          <div className="h-full w-full animate-pulse bg-D2_Gray" />
        </div>
        <TextSkeleton className="h-5 w-10 Laptop:hidden" />
      </div>
      <div className="hidden flex-col gap-5 Laptop:flex">
        <TextSkeleton className="hidden h-6  w-[274px] Laptop:flex" />
        <TextSkeleton className="hidden h-6  w-[274px] Laptop:flex" />
      </div>
    </div>
  );
}

function SlimilarPostSkeleton() {
  return (
    <div className="flex flex-col gap-5 rounded-[20px] bg-Black p-5 Laptop:gap-4 Laptop:p-6 Laptop:pb-7">
      <div className="hidden Text-xl-Bold Laptop:flex">
        <TextSkeleton className="h-10 w-[300px]" />
      </div>
      <div className="flex flex-col gap-2 Laptop:hidden">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <div className="h-full w-full animate-pulse rounded-full bg-D2_Gray" />
          </div>
          <div className="flex flex-col gap-1">
            <TextSkeleton className="h-[21px] w-20" />
            <TextSkeleton className="h-[21px] w-[120px]" />
          </div>
        </div>
        <TextSkeleton className="h-[24px] w-[200px]" />
      </div>
      <div className="relative -mr-5 Laptop:mr-0">
        <div className="flex items-center gap-2 overflow-hidden Tablet:gap-4 Laptop:gap-5 Desktop:gap-6">
          <SlimilarPostItemSkeleton />
          <SlimilarPostItemSkeleton />
          <SlimilarPostItemSkeleton />
          <SlimilarPostItemSkeleton />
          <SlimilarPostItemSkeleton />
          <SlimilarPostItemSkeleton />
          <SlimilarPostItemSkeleton />
          <SlimilarPostItemSkeleton />
          <SlimilarPostItemSkeleton />
        </div>
      </div>
    </div>
  );
}

function SlimilarPostItemSkeleton() {
  return (
    <div className="flex w-[156px] shrink-0 flex-col gap-1 Tablet:w-[165px] Laptop:w-[174px] Laptop:gap-2 Desktop:w-[240px]">
      <div className="relative h-[230px] overflow-hidden rounded-xl Tablet:h-[240px] Laptop:h-[260px] Laptop:cursor-pointer Desktop:h-[360px]">
        <div className="h-full w-full animate-pulse rounded-lg bg-D2_Gray Laptop:rounded-xl" />
      </div>
    </div>
  );
}
