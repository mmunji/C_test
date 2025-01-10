import KeywordList from "@/app/search/_components/placeholders/KeywordList";
import SearchPlaceholderTitle from "@/app/search/_components/placeholders/SearchPlaceholderTitle";
import useSearchTabStore from "@/stores/useTabStore";

const TAB_MAP = ["", "톡", "영화"];

export default function SearchPlaceholder({
  relatedKeywords,
  isAlone,
}: {
  relatedKeywords: string[];
  isAlone?: boolean;
}) {
  const { activeSearchTab } = useSearchTabStore();
  const tabIndex = activeSearchTab.includes("영화")
    ? 1
    : activeSearchTab.includes("톡")
      ? 2
      : 0;

  if (activeSearchTab === "전체" && isAlone) {
    return (
      <div className="text-Gray Text-m-Bold Tablet:Text-l-Bold">
        {TAB_MAP[tabIndex]} 검색 결과가 없어요.
      </div>
    );
  }

  return (
    <div className="flex flex-col Mobile:gap-0 Tablet:gap-[120px] Laptop:gap-20 Desktop:gap-36">
      <SearchPlaceholderTitle tabIndex={tabIndex} />
      <div className="mb-9 mt-[72px] h-3 w-[500%] -translate-x-1/2 bg-Black Tablet:hidden" />
      <div className="flex flex-col items-center justify-center gap-3 Tablet:gap-6">
        <h2 className="text-Silver Text-s-Bold Tablet:Text-l-Bold">
          추천 검색어
        </h2>
        <KeywordList relatedKeywords={relatedKeywords} />
      </div>
    </div>
  );
}
