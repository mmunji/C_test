interface PostCardType {
  color?: string;
}
export default function PostCardSkeleton({ color }: PostCardType) {
  return (
    <div
      className={`h-[156px] w-full animate-pulse  cursor-pointer  overflow-hidden rounded-xl ${color == "D3" ? "bg-D3_Gray" : " bg-D2_Gray "} Tablet:h-[240px] Laptop:h-[260px]   Desktop:h-[360px]`}
    ></div>
  );
}
