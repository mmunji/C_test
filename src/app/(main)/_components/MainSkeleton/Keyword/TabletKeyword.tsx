"use client";
export default function TabletKeyword() {
  return (
    <div className="hidden flex-col gap-4 Tablet:flex Laptop:hidden">
      <div className="flex gap-3">
        {Array(5)
          .fill("0")
          .map((index, _) => {
            return (
              <div
                key={index}
                className="h-10 w-[100px] animate-pulse rounded-[39px] bg-D2_Gray"
              ></div>
            );
          })}
      </div>
      <div className="grid h-full w-full grid-cols-3 gap-6">
        {Array(6)
          .fill(0)
          .map((index, _) => {
            return (
              <div
                key={index}
                className=" w-full animate-pulse flex-col gap-2 rounded-xl bg-D2_Gray   px-7 py-6 "
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
