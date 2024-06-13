import { Suspense } from "react";

import KeywordList from "@/app/search/_components/placeholders/KeywordList";
import { KeywordsSkeleton } from "@/app/search/_components/skeletons/Skeletons";

interface SearchPlaceholderProps {
  isActiveTabIndex: number;
  isAllDataEmpty?: boolean;
}

const MESSAGE_MAP = [
  "아쉽게도 검색 결과가 없어요.",
  "영화 검색 결과가 없어요.",
  "톡 검색 결과가 없어요.",
];
const TAB_MAP = ["", "톡", "영화"];

function SearchPlaceholderTitle({ isActiveTabIndex }: SearchPlaceholderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-[60px] text-center Tablet:gap-3 Tablet:py-[80px] Tablet:pb-0 Laptop:py-0  Desktop:gap-7">
      <h2 className="text-Gray_Orange Text-m-Bold Tablet:Text-xl-Bold">
        {MESSAGE_MAP[isActiveTabIndex]}
      </h2>
      <p className="text-L_Gray Text-s-Medium Tablet:Text-m-Medium">
        단어의 철자가 정확한지 확인하거나
        <br />
        다른 단어로 다시 검색해보세요.
      </p>
    </div>
  );
}
export default function SearchPlaceholder({
  isActiveTabIndex,
  isAllDataEmpty = false,
}: SearchPlaceholderProps) {
  if (!isActiveTabIndex && !isAllDataEmpty) {
    return (
      <div className="text-Gray Text-m-Bold Tablet:Text-l-Bold">
        {TAB_MAP[isActiveTabIndex]} 검색 결과가 없어요.
      </div>
    );
  }

  return (
    <div className="flex flex-col Mobile:gap-0 Tablet:gap-[120px] Laptop:gap-20 Desktop:gap-36">
      <SearchPlaceholderTitle isActiveTabIndex={isActiveTabIndex} />
      <div className="mb-9 mt-[72px] h-3 w-[500%] -translate-x-1/2 bg-Black Tablet:hidden" />
      <div className="flex flex-col items-center justify-center gap-3 Tablet:gap-6">
        <h2 className="text-Silver Text-s-Bold Tablet:Text-l-Bold">
          추천 검색어
        </h2>
        {/* <Suspense fallback={<KeywordsSkeleton />}> */}
        <KeywordList />
        {/* </Suspense> */}
      </div>
    </div>
  );
}
