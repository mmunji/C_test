"use client";

import { josa } from "es-hangul";

import LoadingSpinner from "../../../../components/loadingSpinner/LoadingSpinner";
import { usePaletteStore } from "../../_stores/usePaletteStore";

interface KeywordBarProps {
  title: string;
  top1Keyword: Keyword;
}

export default function KeywordBar({ title, top1Keyword }: KeywordBarProps) {
  const movieTitle = title;
  const sentence1 = josa(movieTitle, "은/는") + " 지금";
  const { gradientStyle } = usePaletteStore();

  return (
    <>
      {gradientStyle === "" ? (
        <div className="mb-4 flex h-12 w-full animate-pulse items-center justify-center rounded-xl bg-D2_Gray Laptop:mb-[52px] Laptop:h-[74px]">
          <div className="Tablet:hidden">
            <LoadingSpinner size="sm" color="primary" />
          </div>
          <div className="hidden Tablet:block Laptop:hidden">
            <LoadingSpinner size="md" color="primary" />
          </div>
          <div className="hidden Laptop:block">
            <LoadingSpinner size="lg" color="primary" />
          </div>
        </div>
      ) : (
        <div
          className="mb-4 flex h-12 w-full items-center justify-center rounded-xl border-[1px] border-D1_Gray px-4 Laptop:mb-[52px] Laptop:h-[74px]"
          style={{
            background: gradientStyle === "" ? "#403E3C" : gradientStyle,
          }}
        >
          <section className="flex h-6 w-full items-center justify-center overflow-hidden Laptop:h-[34px]">
            <span
              className="mr-2 overflow-hidden truncate whitespace-nowrap text-regular font-Bold text-Silver Laptop:text-xl"
              style={{ textOverflow: "ellipsis" }}
            >
              {gradientStyle !== "" && sentence1}
            </span>
            <span className="whitespace-nowrap text-regular font-Bold text-Primary Laptop:text-xl">
              {gradientStyle !== "" && `${top1Keyword.keyword}`}
            </span>
          </section>
        </div>
      )}
    </>
  );
}
