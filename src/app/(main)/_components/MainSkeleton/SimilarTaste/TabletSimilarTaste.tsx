import PostCardSkeleton from "../PostCardSkeleton";

export default function TabletSimilarTaste() {
  return (
    <div className="hidden flex-col gap-5 Tablet:flex Laptop:hidden">
      <div className="flex gap-5">
        {Array(9)
          .fill(0)
          .map((index, _) => {
            return (
              <div key={index} className="flex flex-col gap-1 ">
                <div className="h-[60px] w-[60px] animate-pulse rounded-[60px] bg-D2_Gray  " />
                <div className="mx-auto h-5 w-[48px] animate-pulse rounded-lg  bg-D2_Gray " />
              </div>
            );
          })}
      </div>
      <div className="flex   animate-pulse flex-col gap-5 rounded-xl bg-D1_Gray px-6 pb-5 pt-6">
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 animate-pulse rounded-[60px]  bg-D2_Gray " />
            <div className="h-6 w-[80px] animate-pulse rounded-lg bg-D2_Gray  " />
          </div>
          <div className="h-6 w-[200px] animate-pulse rounded-lg bg-D2_Gray  " />
        </div>
        <div className="flex w-full gap-6">
          {Array(4)
            .fill(0)
            .map((index, _) => {
              return <PostCardSkeleton color={"D3"} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
