interface PostCardType {
  color?: string;
}
export default function PostCardSkeleton({ color }: PostCardType) {
  return (
    <div
      className={` h-[230px] w-[156px] animate-pulse cursor-pointer  overflow-hidden  rounded-xl Tablet:w-full ${color == "D3" ? "bg-D3_Gray" : " bg-D2_Gray "} Tablet:h-[240px] Laptop:h-[260px]   Desktop:h-[360px]`}
    ></div>
  );
}
