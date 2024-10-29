"use client";

import useDevice from "@/hooks/useDevice";

export default function LaptopKeyword() {
  const { device } = useDevice();
  let count = device == "laptop" ? 8 : 10;
  return (
    <div className="hidden gap-5  Laptop:flex">
      <div className="flex flex-col gap-5">
        {Array(5)
          .fill(0)
          .map((index, _) => {
            return (
              <div
                key={_}
                className="h-11 w-[174px] animate-pulse rounded-lg bg-D2_Gray"
              />
            );
          })}
      </div>
      <div className=" grid w-full grid-cols-4 gap-6 Desktop:hidden">
        {Array(8)
          .fill(0)
          .map((index, _) => {
            return (
              <div
                key={_}
                className=" h-full w-full animate-pulse flex-col gap-2 rounded-xl bg-D2_Gray   px-7 pt-6 "
              >
                <div className="flex flex-col gap-4">
                  <div className="h-4 w-20 animate-pulse rounded-[4px] bg-D3_Gray " />
                  <div className="h-4 w-full animate-pulse rounded-[4px] bg-D3_Gray " />
                  <div className="h-4 w-full animate-pulse rounded-[4px] bg-D3_Gray " />
                </div>
              </div>
            );
          })}
      </div>
      <div className=" hidden w-full grid-cols-5 gap-6 Desktop:grid">
        {Array(10)
          .fill(0)
          .map((index, _) => {
            return (
              <div
                key={_}
                className=" h-full w-full animate-pulse flex-col gap-2 rounded-xl bg-D2_Gray   px-7 pt-6 "
              >
                <div className="flex flex-col gap-4">
                  <div className="h-4 w-20 animate-pulse rounded-[4px] bg-D3_Gray " />
                  <div className="h-4 w-full animate-pulse rounded-[4px] bg-D3_Gray " />
                  <div className="h-4 w-full animate-pulse rounded-[4px] bg-D3_Gray " />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
