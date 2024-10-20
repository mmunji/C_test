export default function Banner() {
  return (
    <div className="relative w-full animate-pulse overflow-hidden rounded-[20px] bg-gray-300 Tablet:h-[360px] Laptop:h-[489px] Desktop:h-[637px]">
      <div className="absolute inset-0   flex  animate-pulse flex-col justify-between rounded-[20px] px-5 pb-4 pt-8 Tablet:flex-row Tablet:px-9 Tablet:pb-7 Laptop:px-[74px] Laptop:py-[40px] Desktop:h-[637px] Desktop:px-[108px] Desktop:py-[60px]">
        <div className="h-[200px] w-1/3   animate-pulse  rounded-md bg-gray-400"></div>
        <div className="h-[1px] animate-pulse  border-[1px]  border-[#FFFFFF] opacity-15 Tablet:hidden"></div>
        <div className="h-[200px] w-2/3 animate-pulse  rounded-md  bg-gray-400"></div>
      </div>
    </div>
  );
}
