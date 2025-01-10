const MESSAGE_MAP = [
  "아쉽게도 검색 결과가 없어요.",
  "영화 검색 결과가 없어요.",
  "톡 검색 결과가 없어요.",
];

export default function SearchPlaceholderTitle({
  tabIndex,
}: {
  tabIndex: number;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-[60px] text-center Tablet:gap-3 Tablet:py-[80px] Tablet:pb-0 Laptop:py-0  Desktop:gap-7">
      <h2 className="text-Gray_Orange Text-m-Bold Tablet:Text-xl-Bold">
        {MESSAGE_MAP[tabIndex]}
      </h2>
      <p className="text-L_Gray Text-s-Medium Tablet:Text-m-Medium">
        단어의 철자가 정확한지 확인하거나
        <br />
        다른 단어로 다시 검색해보세요.
      </p>
    </div>
  );
}
