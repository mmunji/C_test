function KeywordItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="inner-gray-orange flex h-10 items-center rounded-[20px] px-4 py-1 text-Gray_Orange Text-s-Medium Tablet:px-6 Tablet:py-2 Tablet:Text-m-Medium">
      {children}
    </div>
  );
}

export default function SearchPlaceholder() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center gap-2 py-[68px] text-center Tablet:gap-3 Tablet:py-0">
        <h2 className="text-Gray_Orange Text-m-Bold Tablet:Text-xl-Bold">
          아쉽게도 검색 결과가 없어요.
        </h2>
        <p className="text-L_Gray Text-s-Medium Tablet:Text-m-Medium">
          단어의 철자가 정확한지 확인하거나
          <br />
          다른 단어로 다시 검색해보세요.
        </p>
      </div>
      {/* <div className="my-7 h-3 w-[500%] -translate-x-1/2 bg-Black Tablet:my-20 Desktop:my-[120px]" /> */}
      <div className="h-3 rounded-[3px] bg-Black Tablet:hidden" />
      <div className="mb-[100px] mt-9 flex flex-col items-center justify-center gap-3 Tablet:my-0 Tablet:gap-6">
        <h2 className="text-Silver Text-s-Bold Tablet:Text-l-Bold">
          추천 검색어
        </h2>
        <div className="flex max-w-[358px] flex-wrap justify-center gap-x-3 gap-y-2 px-5 Tablet:max-w-[541px] Tablet:gap-6 Tablet:px-0">
          {Array(5)
            .fill("키워드감자다람쥐")
            .map((sdf, i) => (
              <KeywordItem key={i}>{sdf}</KeywordItem>
            ))}
        </div>
      </div>
    </div>
  );
}
