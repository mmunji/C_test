"use client";

import { josa } from "es-hangul";

import { usePaletteStore } from "../../_stores/usePaletteStore";
import LoadingSpinner from "../common/LoadingSpinner";

export default function KeywordBar() {
  const movieTitle = "웡카";
  const sentence1 = josa(movieTitle, "은/는") + " 지금";
  const { gradientStyle } = usePaletteStore();

  return (
    <>
      {gradientStyle === "" ? (
        <div className="mb-4 flex h-12 w-full items-center justify-center rounded-xl Laptop:mb-[52px] Laptop:h-[74px]">
          <LoadingSpinner />
        </div>
      ) : (
        <div
          className="mb-4 flex h-12 w-full items-center justify-center rounded-xl border-[1px] border-D1_Gray Laptop:mb-[52px] Laptop:h-[74px]"
          style={{
            background: gradientStyle === "" ? "#403E3C" : gradientStyle,
          }}
        >
          <section className="flex h-6 items-center Laptop:h-[34px]">
            <span className="mr-2 text-regular font-Bold text-Silver Laptop:text-xl">
              {gradientStyle !== "" && sentence1}
            </span>
            <span className="text-regular font-Bold text-Primary Laptop:text-xl">
              {gradientStyle !== "" && "초콜릿 향"}
            </span>
          </section>
        </div>
      )}
    </>
  );
}
