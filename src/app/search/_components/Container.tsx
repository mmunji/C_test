import clsx from "clsx";

import SearchListContainer from "@/app/search/_components/list/ListContainer";
import Tab, { TabButton } from "@/app/search/_components/Tab";
import { searchPageAPIs } from "@/services/search/searchPageAPIs";

interface SearchContainerProps {
  query: string;
}

export default async function SearchContainer({ query }: SearchContainerProps) {
  const [movies, reviews, relatedKeywords] = await Promise.all([
    searchPageAPIs.getMovies(query),
    searchPageAPIs.getReviews(query),
    searchPageAPIs.getRelatedKeywords(query),
  ]);
  const isEmpty = !movies.length && !reviews.length;
  return (
    <div className="mx-auto px-5 Tablet:px-6 Laptop:max-w-[1144px] Laptop:px-0 Desktop:max-w-[1560px]">
      <div className="">
        <h1 className="Text-l-Bold Tablet:Text-xl-Bold">
          <strong className="mr-2 hidden text-Primary Tablet:inline-block">
            {query}
          </strong>
          <strong className="mr-2 inline-block text-Primary Tablet:hidden">
            {query.length > 13 ? `${query.slice(0, 13)}...` : query}
          </strong>
          검색결과
        </h1>
        <div
          className={clsx(
            isEmpty && "Laptop:mb-7 Desktop:mb-11",
            "my-3 Tablet:mb-3 Tablet:mt-4 Laptop:mb-6 Laptop:mt-7 Desktop:mb-6 Desktop:mt-11",
          )}
        >
          <Tab>
            <TabButton isDefault>전체</TabButton>
            <TabButton>영화 {movies.length}</TabButton>
            <TabButton>톡 {reviews.length}</TabButton>
          </Tab>
        </div>
      </div>
      <div className="mb-[100px] Tablet:mb-[160px] Laptop:mb-[180px] Desktop:mb-[200px]">
        <SearchListContainer
          relatedKeywords={relatedKeywords}
          isEmpty={isEmpty}
          movies={movies}
          revires={reviews}
        />
      </div>
    </div>
  );
}
