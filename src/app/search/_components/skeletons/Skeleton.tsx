import { TextSkeleton } from "@/app/my/_components/skeletons/Skeleton";

export function SearchSkeleton() {
  return (
    <div className="mx-auto px-5 Tablet:px-6 Laptop:max-w-[1144px] Laptop:px-0 Desktop:max-w-[1560px]">
      <div className="">
        <TextSkeleton className="h-lg w-[250px] Tablet:h-[33.6px]" />
        <div className="my-3 flex h-10 items-center Tablet:mb-3 Tablet:mt-4 Laptop:mb-6 Laptop:mt-7 Desktop:mb-6 Desktop:mt-11">
          <TextSkeleton className="h-6 w-[170px]" />
        </div>
      </div>
      <div className="mb-[100px] Tablet:mb-[160px] Laptop:mb-[180px] Desktop:mb-[200px]">
        <SearchMovieListSkeleton />
        <div className="my-7 h-3 w-[500%] -translate-x-1/2 rounded-[3px] bg-Black Tablet:my-20 Laptop:h-[1px] Laptop:w-full Laptop:translate-x-0 Laptop:bg-Gray Desktop:my-[120px]" />
        <SearchReviewListSkeleton />
      </div>
    </div>
  );
}

function SearchMovieListSkeleton() {
  return (
    <div className="flex flex-col gap-3 Tablet:gap-2 Laptop:gap-5">
      <div className="flex h-10 items-center justify-between">
        <TextSkeleton className="h-lg w-[100px]" />
        <TextSkeleton className="h-[21px] w-[80px] Laptop:h-6" />
      </div>
      <div className="grid grid-cols-2 gap-2 Tablet:grid-cols-3 Tablet:gap-5 Laptop:grid-cols-6 Desktop:gap-6">
        {Array(6)
          .fill("movieItem")
          .map((_, i) => (
            <SearchMovieItemSkeleton key={i} />
          ))}
      </div>
    </div>
  );
}

function SearchMovieItemSkeleton() {
  return (
    <div className="flex flex-col gap-1 Tablet:gap-2">
      <div
        className={
          "group relative h-[230px] overflow-hidden rounded-lg Tablet:h-[341px] Tablet:rounded-xl Laptop:h-[260px] Desktop:h-[360px]"
        }
      >
        <div className="h-full w-full animate-pulse rounded-lg bg-D2_Gray" />
      </div>
      <TextSkeleton className="h-sm w-[150px] Tablet:h-md" />
    </div>
  );
}

function SearchReviewListSkeleton() {
  return (
    <div className="flex flex-col gap-3 Tablet:gap-2 Laptop:gap-5">
      <div className="flex h-10 items-center justify-between">
        <TextSkeleton className="h-lg w-[100px]" />
        <TextSkeleton className="h-[21px] w-[80px] Laptop:h-6" />
      </div>
      <div className="flex flex-col gap-3 Tablet:grid Tablet:grid-cols-2 Tablet:gap-5 Laptop:grid-cols-3 Desktop:grid-cols-4">
        {Array(9)
          .fill("reviewItem")
          .map((_, i) => (
            <SearchReviewItemSkeleton key={i} />
          ))}
      </div>
    </div>
  );
}
function SearchReviewItemSkeleton() {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-D1_Gray p-4 Tablet:gap-3 Tablet:px-7 Tablet:py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 animate-pulse rounded-full bg-D2_Gray" />
          <TextSkeleton className="h-sm w-[90px]" />
        </div>
        <TextSkeleton className="Tablet:sm h-xs w-[50px]" />
      </div>
      <div className="hidden h-[1px] w-full bg-D2_Gray Tablet:block" />
      <div className="h-[63px] animate-pulse rounded-lg bg-D2_Gray Tablet:h-[96px]" />
      <TextSkeleton className="h-sm w-[100px] Tablet:h-md" />
    </div>
  );
}
