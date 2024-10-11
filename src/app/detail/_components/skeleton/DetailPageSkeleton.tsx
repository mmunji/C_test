import React, { PropsWithChildren } from "react";

function DetailPageSkeleton() {
  return (
    <>
      <DetailBannerSkeleton />

      <SkeletonContainer>
        <MobileAndTabletContentsSkeleton />
        <PCContentsSkeleton />
      </SkeletonContainer>
    </>
  );
}

function SkeletonContainer({ children }: PropsWithChildren) {
  return (
    <div className="absolute top-[380px] w-full px-5 pb-[100px] pt-8 Tablet:px-6 Tablet:pb-[160px] Laptop:top-[640px] Laptop:px-[68px] Laptop:pb-[180px] Laptop:pt-7 Desktop:left-1/2 Desktop:top-[816px] Desktop:w-[1560px] Desktop:-translate-x-1/2 Desktop:px-0 Desktop:pb-[200px]">
      {children}
    </div>
  );
}

function DetailBannerSkeleton() {
  return (
    <div className="absolute top-0 w-full">
      <div className="relative mx-[-20px] h-[380px] bg-D1_Gray Tablet:mx-[-24px] Laptop:hidden">
        <div className="absolute bottom-[-10px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <div className="h-[32px] w-[100px] animate-pulse rounded-lg bg-D2_Gray" />
          <div className="h-[20px] w-[140px] animate-pulse rounded-lg bg-D2_Gray" />
          <div className="h-[20px] w-[240px] animate-pulse rounded-lg bg-D2_Gray" />
        </div>
      </div>

      <div className="min-w-screen relative hidden bg-D1_Gray Laptop:block Laptop:h-[640px] Desktop:h-[816px]">
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 justify-between Laptop:w-[calc(100%-136px)] Desktop:w-[1560px]">
          <div className="mt-auto flex flex-col gap-3">
            <div className="h-10 w-[200px] animate-pulse rounded-lg bg-D2_Gray" />
            <div className="h-10 w-[400px] animate-pulse rounded-lg bg-D2_Gray" />
          </div>
          <div className="h-[258px] w-[172px] animate-pulse rounded-xl bg-D2_Gray Desktop:h-[360px] Desktop:w-[240px]" />
        </div>
      </div>
    </div>
  );
}

function MobileAndTabletContentsSkeleton() {
  return (
    <div className="Laptop:hidden">
      <div className="mx-auto flex justify-center gap-10">
        <div className="h-[50px] w-[50px] animate-pulse rounded-lg bg-D2_Gray" />
        <div className="h-[50px] w-[50px] animate-pulse rounded-lg bg-D2_Gray" />
        <div className="h-[50px] w-[50px] animate-pulse rounded-lg bg-D2_Gray" />
      </div>

      <div className="mt-5 h-12 w-full animate-pulse rounded-xl bg-D2_Gray" />
      <div className="mt-4 flex h-[114px] w-full flex-col gap-2 rounded-xl bg-D1_Gray px-4 pt-5">
        <div className="h-5 w-full animate-pulse rounded-lg bg-D2_Gray" />
        <div className="h-5 w-[160px] animate-pulse rounded-lg bg-D2_Gray Tablet:w-[350px]" />
      </div>

      <div className="mx-auto mt-7 h-10 w-[180px] animate-pulse rounded-[30px] bg-D2_Gray" />

      <div className="mx-auto mt-[52px] Tablet:mt-[102px]">
        <div className="flex justify-center gap-2">
          <div className="h-[32px] w-20 animate-pulse rounded-lg bg-D2_Gray" />
          <div className="h-[32px] w-20 animate-pulse rounded-lg bg-D2_Gray" />
          <div className="h-[32px] w-20 animate-pulse rounded-lg bg-D2_Gray" />
        </div>
        <div className="mt-2 flex justify-center gap-2">
          <div className="h-[32px] w-20 animate-pulse rounded-lg bg-D2_Gray" />
          <div className="h-[32px] w-20 animate-pulse rounded-lg bg-D2_Gray" />
        </div>
      </div>

      <div className="mt-[102px] h-[45px] w-full rounded-xl bg-D1_Gray Tablet:mt-[52px]" />
    </div>
  );
}

function PCContentsSkeleton() {
  return (
    <div className="hidden w-full Laptop:block">
      <div className="w-full animate-pulse rounded-[20px] bg-D2_Gray Laptop:h-[74px] Desktop:h-20" />
      <div className="mt-[52px] flex flex-col gap-[100px]">
        <div className="flex Laptop:gap-5 Desktop:gap-6">
          <div className="h-[256px] w-full rounded-xl bg-D1_Gray px-8 pt-7">
            <div className="h-5 w-full animate-pulse rounded-lg bg-D2_Gray" />
            <div className="mt-4 h-5 w-[350px] animate-pulse rounded-lg bg-D2_Gray" />
          </div>

          <div className="h-[256px] w-full">
            <div className="h-10 w-[140px] animate-pulse rounded-lg bg-D2_Gray" />
            <div className="mt-5 flex gap-4">
              {Array(8)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-[196px] w-full rounded-lg bg-D1_Gray"
                  >
                    <div className="h-[112px] w-full animate-pulse rounded-lg bg-D2_Gray" />

                    <div className="mt-1 flex h-[60px] w-full flex-col items-center justify-center px-2 pt-2">
                      <div className="h-4 w-full animate-pulse rounded-[4px] bg-D2_Gray" />
                      <div className="mt-2 h-4 min-w-[calc(100%-16px)] animate-pulse rounded-[4px] bg-D2_Gray" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div>
          <div className="h-10 w-[140px] animate-pulse rounded-lg bg-D2_Gray" />

          <div className="mt-5 flex Laptop:gap-5 Desktop:gap-6">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-full animate-pulse rounded-xl bg-D2_Gray Laptop:h-[150px] Desktop:h-[210px]"
                />
              ))}
          </div>
        </div>

        <div className="flex Laptop:gap-7 Desktop:gap-9">
          <div className="flex w-full flex-col items-center gap-6 rounded-xl">
            <div className="flex w-full flex-col items-center gap-6 rounded-xl bg-D1_Gray Laptop:py-8 Desktop:py-7">
              <div className="h-10 w-[140px] animate-pulse rounded-lg bg-D2_Gray" />
              <div className="h-10 w-[240px] animate-pulse rounded-lg bg-D2_Gray" />
            </div>
            <div className="w-full rounded-xl bg-D1_Gray p-8">
              <div className="h-10 w-[140px] animate-pulse rounded-lg bg-D2_Gray" />

              {Array(2)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="mt-5 flex flex-col last:border-t-[1px] last:border-D2_Gray last:pt-5"
                  >
                    <div className="flex h-10 items-center gap-4">
                      <div className="h-10 w-10 animate-pulse rounded-full bg-D2_Gray" />
                      <div className="h-5 w-[120px] animate-pulse rounded-lg bg-D2_Gray" />
                    </div>

                    <div className="ml-[56px] mt-2">
                      <div className="h-5 w-full animate-pulse rounded-lg bg-D2_Gray" />
                      <div className="mt-2 h-5 w-[400px] animate-pulse rounded-lg bg-D2_Gray" />
                    </div>

                    <div className="ml-auto h-7 w-[100px] animate-pulse rounded-lg bg-D2_Gray" />
                  </div>
                ))}
            </div>
          </div>

          <div className="h-fit rounded-xl bg-D1_Gray Laptop:min-w-[360px] Laptop:p-10 Desktop:min-w-[492px] Desktop:px-[60px] Desktop:pb-[93px] Desktop:pt-[60px]">
            <div className="flex h-[200px] flex-col items-center justify-center">
              <div className="flex Laptop:gap-2 Desktop:gap-3">
                <div className="animate-pulse rounded-lg bg-D2_Gray Laptop:h-[32px] Laptop:w-20 Desktop:h-10 Desktop:w-[100px]" />
                <div className="animate-pulse rounded-lg bg-D2_Gray Laptop:h-[32px] Laptop:w-20 Desktop:h-10 Desktop:w-[100px]" />
                <div className="animate-pulse rounded-lg bg-D2_Gray Laptop:h-[32px] Laptop:w-20 Desktop:h-10 Desktop:w-[100px]" />
              </div>
              <div className="flex Laptop:mt-2 Laptop:gap-2 Desktop:mt-3 Desktop:gap-3">
                <div className="animate-pulse rounded-lg bg-D2_Gray Laptop:h-[32px] Laptop:w-20 Desktop:h-10 Desktop:w-[100px]" />
                <div className="animate-pulse rounded-lg bg-D2_Gray Laptop:h-[32px] Laptop:w-20 Desktop:h-10 Desktop:w-[100px]" />
              </div>
            </div>
            <div className="h-[45px] w-full animate-pulse rounded-xl bg-D2_Gray Laptop:mt-5 Desktop:mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPageSkeleton;
