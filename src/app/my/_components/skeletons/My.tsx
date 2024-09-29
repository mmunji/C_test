import Image from "next/image";

import { TextSkeleton } from "@/app/my/_components/skeletons/Skeleton";
import Button from "@/components/buttons/Button";

import { MoreHorizontal } from "../../../../../public/icons";

export function UserInfoSkeletons() {
  return (
    <section className="mb-9 flex w-full flex-col items-center gap-7 px-5 Tablet:mb-0 Tablet:gap-[52px] Tablet:px-0">
      <div className="flex flex-col items-center gap-4 px-6 Tablet:gap-3 Tablet:px-0 Laptop:gap-4">
        <div className="flex justify-center">
          <div className="relative">
            <div className="relative h-16 w-16 overflow-hidden rounded-full Tablet:h-[100px] Tablet:w-[100px]">
              <div className="h-full w-full animate-pulse overflow-hidden bg-D2_Gray object-cover" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 Tablet:gap-3 Laptop:gap-4">
          <TextSkeleton className="h-md w-[250px] Tablet:h-xxl" />
          <div className="flex items-center gap-1 Tablet:gap-4">
            <div className="h-[29px] w-[90px] animate-pulse rounded-lg bg-D2_Gray Tablet:h-10" />
            <div className="h-[29px] w-[90px] animate-pulse rounded-lg bg-D2_Gray Tablet:h-10" />
            <div className="h-[29px] w-[90px] animate-pulse rounded-lg bg-D2_Gray Tablet:h-10" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-6 rounded-xl bg-D1_Gray p-3 Tablet:justify-between Tablet:gap-[41px] Tablet:px-[88px] Tablet:py-3 Laptop:px-[100px]">
        <div className="relative flex w-[54px] flex-col items-center gap-0 py-0 Tablet:w-auto Tablet:gap-1 Tablet:px-3 Tablet:py-2">
          <TextSkeleton className="h-md w-[50px] Tablet:h-lg" />
          <span className="text-L_Gray Text-xs-Regular Tablet:Text-s-Regular Laptop:text-Silver Laptop:Text-m-Bold">
            받은 좋아요
          </span>
        </div>
        <div className="w-[1px] bg-D2_Gray"></div>
        <div className="relative flex w-[54px] flex-col items-center gap-0 py-0 Tablet:w-auto Tablet:gap-1 Tablet:px-3 Tablet:py-2">
          <TextSkeleton className="h-md w-[50px] Tablet:h-lg" />
          <span className="text-L_Gray Text-xs-Regular Tablet:Text-s-Regular Laptop:text-Silver Laptop:Text-m-Bold">
            평가한 영화
          </span>
        </div>
        <div className="w-[1px] bg-D2_Gray"></div>
        <div className="relative flex w-[54px] flex-col items-center gap-0 py-0 Tablet:w-auto Tablet:gap-1 Tablet:px-3 Tablet:py-2">
          <TextSkeleton className="h-md w-[50px] Tablet:h-lg" />
          <span className="text-L_Gray Text-xs-Regular Tablet:Text-s-Regular Laptop:text-Silver Laptop:Text-m-Bold">
            찜한 영화
          </span>
        </div>
      </div>
    </section>
  );
}

export function BadgeSkeleton() {
  return (
    <section className="flex flex-col gap-4 p-5 Tablet:p-0">
      <div className="relative flex items-end gap-1">
        <div className="flex flex-1 flex-col gap-1">
          <h2 className="Text-m-Bold Tablet:Text-l-Bold">내 뱃지</h2>
          <div className="flex items-center justify-between gap-2">
            <p className="text-Gray Text-s-Regular Tablet:Text-m-Medium">
              뱃지는 닉네임 옆에 표시돼요.
            </p>
          </div>
        </div>
        <div>
          <Button disabled size={"md"} variant={"text"}>
            편집
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 Tablet:grid-cols-4 Tablet:gap-5 Laptop:grid-cols-6 Laptop:gap-x-6 Laptop:gap-y-4">
        {Array(19)
          .fill("badge")
          .map((_, i) => (
            <BadgeItemSkeleton key={i} />
          ))}
      </div>
    </section>
  );
}
function BadgeItemSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-Black py-3 Tablet:gap-4 Tablet:py-7">
      <div className="h-11 w-11 animate-pulse rounded-lg bg-D2_Gray Tablet:h-12 Tablet:w-12" />
      <div className="flex flex-col items-center gap-1">
        <TextSkeleton className="h-sm w-[35px]" />
        <div className="flex items-center gap-1">
          <TextSkeleton className="h-xs w-[65px]" />
        </div>
      </div>
    </div>
  );
}

export function ActivitySkeleton({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <section
      className={`${isMobile ? "flex Tablet:hidden" : "hidden Tablet:flex"} flex-col gap-3 px-5 Tablet:gap-4 Tablet:px-0`}
    >
      <h2 className="hidden Text-m-Bold Tablet:block Tablet:Text-l-Bold">
        내 활동
      </h2>
      <div className="flex h-10 items-center justify-between">
        <TextSkeleton className="h-md w-[150px] Tablet:h-lg" />
        <TextSkeleton className="h-sm w-[90px] Tablet:h-md" />
      </div>
      <div className="grid grid-cols-1 gap-5 Tablet:grid-cols-2 Tablet:gap-5 Laptop:gap-6">
        {Array(8)
          .fill("review")
          .map((_, i) => (
            <ActivityReviewItemSkeleton key={i} />
          ))}
      </div>
    </section>
  );
}

export function ActivityReviewItemSkeleton() {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-D1_Gray px-5 pb-5 pt-3 Laptop:gap-4 Laptop:px-7 Laptop:pb-6 Laptop:pt-4">
      <div className="">
        <div className="flex h-10 items-center justify-between Laptop:mb-2">
          <div className="flex items-center gap-2">
            <TextSkeleton className="h-md w-[80px]" />
            <TextSkeleton className="h-[16px] w-[90px]" />
          </div>
        </div>
        <div className="min-h-[72px] w-full animate-pulse rounded-lg bg-D2_Gray Laptop:min-h-24" />
      </div>
      <div className="flex items-center justify-between border-t border-D2_Gray pt-3">
        <TextSkeleton className="h-xs w-[80px]" />
        <TextSkeleton className="h-sm w-[80px]" />
      </div>
    </div>
  );
}
