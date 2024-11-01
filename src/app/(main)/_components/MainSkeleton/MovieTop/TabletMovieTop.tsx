import PostCardSkeleton from "../PostCardSkeleton";

export default function TabletMovieTop() {
  return (
    <div className="hidden w-full gap-4 Tablet:flex Laptop:hidden">
      <div className="h-[344px] w-[230px] animate-pulse rounded-xl  bg-D2_Gray "></div>
      <div className="flex w-full flex-col justify-between pt-3">
        <div className="flex flex-col gap-3">
          <div className="h-[30px] w-[77px] animate-pulse rounded-lg  bg-D2_Gray  " />
          <div className="h-6 w-[174px] animate-pulse rounded-lg  bg-D2_Gray  " />
        </div>
        <div className="flex w-full flex-col gap-3">
          <div className="h-7 w-[100px] animate-pulse rounded-lg  bg-D2_Gray  " />
          <div className="flex h-[184px] w-full  gap-4">
            {Array(3)
              .fill(0)
              .map((index, _) => {
                return (
                  <div
                    key={_}
                    className="flex w-full animate-pulse  flex-col items-center justify-between rounded-xl bg-D2_Gray  px-4 py-5 "
                  >
                    <div className="flex flex-col gap-2">
                      <div className="mx-auto h-[30px] w-[30px] animate-pulse rounded-[60px] bg-D3_Gray  " />
                      <div className="h-4 w-20 animate-pulse rounded-lg  bg-D3_Gray  " />
                    </div>
                    <div className="flex w-full flex-col gap-2">
                      <div className="h-6 w-full animate-pulse rounded-lg  bg-D3_Gray  " />
                      <div className="h-6 w-full animate-pulse rounded-lg  bg-D3_Gray  " />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
