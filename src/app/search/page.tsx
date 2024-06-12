"use client";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import Footer from "@/app/(main)/_components/Footer";
import SearchMovieList from "@/app/search/_components/SearchMovieList";
import SearchPlaceholder from "@/app/search/_components/SearchPlaceholder";
import SearchTalkList from "@/app/search/_components/SearchTalkList";
import useFindMovieQuery from "@/app/search/_hooks/useFindMovieQuery";
import useFindMovieTalkQuery from "@/app/search/_hooks/useFindMovieTalkQuery";
import CommonTab from "@/components/commonTab/CommonTab";

const TABS = ["전체", "영화 55", "톡 11"];

export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const { data: movieList } = useFindMovieQuery(search);
  const { data: talkList } = useFindMovieTalkQuery(search);

  return (
    <div className={clsx(`mt-3 Tablet:mt-4 Laptop:mt-8 Desktop:mt-16`)}>
      <div className="mx-auto px-5 Tablet:px-6 Laptop:max-w-[1144px] Laptop:px-0 Desktop:max-w-[1560px]">
        <div className="">
          <h1 className="flex gap-2 Text-l-Bold Tablet:Text-xl-Bold">
            <strong className="text-Primary">{search}</strong>
            <span>검색결과</span>
          </h1>
          <div className="">
            <CommonTab
              {...{
                tabs: TABS,
                activeTab,
                setActiveTab,
              }}
            />
          </div>
        </div>
        {movieList?.length ? (
          <>
            <SearchMovieList movieList={movieList} />
            <div className="my-7 h-3 w-[500%] -translate-x-1/2 rounded-[3px] bg-Black Tablet:my-20 Laptop:h-1 Laptop:w-full Laptop:translate-x-0 Desktop:my-[120px]" />
            <SearchTalkList talkList={talkList} />
          </>
        ) : (
          <SearchPlaceholder />
        )}
      </div>
      <Footer />
    </div>
  );
}
