import { TextSkeleton } from "@/app/my/_components/skeletons/Skeleton";
import Button from "@/components/buttons/Button";

export function BookmarkSkeleton() {
  return (
    <>
      <BookmarkHeaderSkeleton />
      <div className="grid grid-cols-2 gap-2 Tablet:grid-cols-3 Tablet:gap-x-5 Tablet:gap-y-4 Laptop:grid-cols-4 Laptop:gap-x-6 Laptop:gap-y-5">
        {Array(12)
          .fill("item")
          .map((_, i) => (
            <BookmarkItemSkeleton key={i} />
          ))}
      </div>
    </>
  );
}

function BookmarkItemSkeleton() {
  return (
    <div className="h-[230px] w-full animate-pulse overflow-hidden rounded-xl bg-D2_Gray Tablet:h-[288px] Laptop:h-[331px]"></div>
  );
}

function BookmarkHeaderSkeleton() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="flex items-center Text-m-Bold Tablet:Text-l-Bold">
        <TextSkeleton className="h-md Tablet:h-lg w-[150px]" />
      </h2>
      <div className="flex gap-2 Text-m-Medium">
        <Button disabled className="Tablet:flex" variant={"text"}>
          편집
        </Button>
      </div>
    </div>
  );
}
