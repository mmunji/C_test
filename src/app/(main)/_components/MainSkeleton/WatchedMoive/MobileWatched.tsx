export default function MobileWatched() {
  return (
    <div className="flex flex-col  gap-4">
      <div className=" h-7  w-[200px] animate-pulse rounded-lg bg-D2_Gray Tablet:hidden" />
      <div className="flex w-full  animate-pulse flex-col justify-center  gap-5 rounded-[20px] bg-D1_Gray px-3 py-7 Tablet:hidden ">
        <div className="mx-auto flex flex-col  gap-3">
          <div className="mx-auto h-[230px] w-[156px] animate-pulse rounded-lg bg-D2_Gray " />
          <div className="flex flex-col justify-center  gap-5">
            <div className=" flex flex-col gap-2">
              <div className="mx-auto h-6 w-[160px] animate-pulse rounded-lg bg-D2_Gray " />
              <div className="mx-auto h-6  w-[80px] animate-pulse rounded-lg bg-D2_Gray " />
            </div>
            <div className="mx-auto h-[52px] w-[200px] animate-pulse rounded-lg bg-D2_Gray " />
          </div>
        </div>
      </div>
    </div>
  );
}
