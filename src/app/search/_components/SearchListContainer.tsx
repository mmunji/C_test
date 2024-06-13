import clsx from "clsx";
import { useEffect, useState } from "react";

import SearchPlaceholder from "@/app/search/_components/placeholders/SearchPlaceholder";
import SearchMovieList from "@/app/search/_components/SearchMovieList";
import SearchTalkList from "@/app/search/_components/SearchTalkList";
import { useSearchMovieAndTalkQuery } from "@/app/search/_queries/useSearchMovieAndTalkQuery";
import CommonTab from "@/components/commonTab/CommonTab";

const INIT_TAB = "전체";

interface Props {
  query: string;
}

export default function SearchListContainer({ query }: Props) {
  const [activeTab, setActiveTab] = useState(INIT_TAB);
  const [tabs, setTabs] = useState(["전체", "영화 0", "톡 0"]);
  const { movieList, talkList } = useSearchMovieAndTalkQuery(query);
  const isActiveTabIndex =
    activeTab === "전체" ? 0 : activeTab.includes("영화") ? 1 : 2;
  const isAllDataEmpty = !movieList?.length && !talkList?.length;

  const handleTabChange = (category: string) => setActiveTab(category);

  useEffect(() => {
    const movieCount = movieList?.length ?? 0;
    const talkCount = talkList?.length ?? 0;
    setTabs(["전체", `영화 ${movieCount}`, `톡 ${talkCount}`]);
  }, [movieList, talkList]);

  useEffect(() => {
    setActiveTab(INIT_TAB);
  }, [query]);

  return (
    <div className="mx-auto px-5 Tablet:px-6 Laptop:max-w-[1144px] Laptop:px-0 Desktop:max-w-[1560px]">
      <div className="">
        <h1 className="Text-l-Bold Tablet:Text-xl-Bold">
          <strong className="mr-2 text-Primary">{query}</strong>
          검색결과
        </h1>
        <div
          className={clsx(
            isAllDataEmpty && !isActiveTabIndex && "Laptop:mb-3",
            "my-3 Tablet:mb-3 Tablet:mt-4 Laptop:mb-6 Laptop:mt-7 Desktop:mt-11",
          )}
        >
          <CommonTab
            {...{
              tabs,
              activeTab,
              setActiveTab,
            }}
          />
        </div>
      </div>
      <div className="mb-[100px] Tablet:mb-[160px] Laptop:mb-[180px] Desktop:mb-[200px]">
        {isAllDataEmpty && !isActiveTabIndex ? (
          <SearchPlaceholder
            isAllDataEmpty
            isActiveTabIndex={isActiveTabIndex}
          />
        ) : (
          <>
            <SearchMovieList
              handleTabChange={handleTabChange}
              isActiveTabIndex={isActiveTabIndex}
              movieList={movieList}
            />
            <div
              className={clsx(
                isActiveTabIndex && "hidden",
                "my-7 h-3 w-[500%] -translate-x-1/2 rounded-[3px] bg-Black Tablet:my-20 Laptop:h-[1px] Laptop:w-full Laptop:translate-x-0 Laptop:bg-Gray Desktop:my-[120px]",
              )}
            />
            <SearchTalkList
              handleTabChange={handleTabChange}
              isActiveTabIndex={isActiveTabIndex}
              talkList={talkList}
            />
          </>
        )}
      </div>
    </div>
  );
}
