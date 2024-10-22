export default function MobileMovieTop() {
  return (
    <div>
      <div className="flex w-[238px] animate-pulse flex-col gap-4 rounded-xl bg-D1_Gray pb-4 Tablet:hidden">
        <div className="h-[358px] w-full animate-pulse rounded-xl   bg-D2_Gray  " />
        <div className="flex flex-col  gap-2 px-4 ">
          <div className="h-4 w-10 animate-pulse rounded-[4px] bg-D2_Gray " />
          <div className="flex items-center gap-2 ">
            <div className="h-[24px] w-[24px] animate-pulse rounded-[60px] bg-D3_Gray  " />
            <div className="flex flex-col gap-2">
              <div className="h-4 w-[174px] animate-pulse rounded-[4px]   bg-D2_Gray  " />
              <div className="h-4 w-[174px] animate-pulse rounded-[4px]   bg-D2_Gray  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
