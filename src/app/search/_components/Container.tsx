import clsx from "clsx";

import SearchListContainer from "@/app/search/_components/list/ListContainer";
import Tab from "@/app/search/_components/Tab";
import { searchPageAPIs } from "@/services/search/searchPageAPIs";

interface SearchContainerProps {
  query: string;
}

export default async function SearchContainer({ query }: SearchContainerProps) {
  const [movies, reviews, relatedKeywords] = await Promise.all([
    searchPageAPIs.getMovies(query),
    searchPageAPIs.getReviews(query),
    searchPageAPIs.getRelatedKeywords(),
  ]);
  const isDataEmpty = !movies.length && !reviews.length;
  const shuffledKeywords = relatedKeywords.sort(() => 0.5 - Math.random());
  return (
    <div className="mx-auto px-5 Tablet:px-6 Laptop:max-w-[1144px] Laptop:px-0 Desktop:max-w-[1560px]">
      <div className="">
        <h1 className="flex min-w-0 items-center Text-l-Bold Tablet:Text-xl-Bold">
          <strong className="mr-2 overflow-hidden text-ellipsis whitespace-nowrap text-Primary">
            {query}
          </strong>
          <span className="shrink-0">검색결과</span>
        </h1>
        <div
          className={clsx(
            isDataEmpty && "Laptop:mb-7 Desktop:mb-11",
            "my-3 Tablet:mb-3 Tablet:mt-4 Laptop:mb-6 Laptop:mt-7 Desktop:mb-6 Desktop:mt-11",
          )}
        >
          <Tab movieLength={movies.length} reviewLength={reviews.length} />
        </div>
      </div>
      <div className="mb-[100px] Tablet:mb-[160px] Laptop:mb-[180px] Desktop:mb-[200px]">
        <SearchListContainer
          relatedKeywords={shuffledKeywords}
          movies={movies}
          reviews={reviews}
        />
      </div>
    </div>
  );
}
