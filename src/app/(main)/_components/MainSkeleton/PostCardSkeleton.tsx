interface PostCardType {
  color?: string;
}
export default function PostCardSkeleton({ color }: PostCardType) {
  return (
    <div
      className={`h-[156px] w-[230px] animate-pulse  cursor-pointer  overflow-hidden rounded-xl ${color == "D3" ? "bg-D3_Gray" : " bg-D2_Gray "} Tablet:h-[240px] Tablet:w-[260px] Laptop:h-[260px] Laptop:w-[174px]  Desktop:h-[360px] Desktop:w-[240px]`}
    ></div>
  );
}
