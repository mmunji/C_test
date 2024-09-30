"use client";
import clsx from "clsx";

import SearchMovieList from "@/app/search/_components/list/MovieList";
import SearchReviewList from "@/app/search/_components/list/ReviewList";
import SearchPlaceholder from "@/app/search/_components/placeholders/SearchPlaceholder";
import useSearchTabStore from "@/stores/useTabStore";

interface SearchListContainerProps {
  movies: MovieResult[];
  reviews: ReviewResult[];
  relatedKeywords: string[];
}

export default function SearchListContainer({
  movies,
  reviews,
  relatedKeywords,
}: SearchListContainerProps) {
  const { activeSearchTab } = useSearchTabStore();

  if (!movies.length && !reviews.length && activeSearchTab === "전체")
    return <SearchPlaceholder relatedKeywords={relatedKeywords} />;

  return (
    <>
      <SearchMovieList movies={movies} relatedKeywords={relatedKeywords} />
      <div
        className={clsx(
          activeSearchTab !== "전체" && "hidden",
          "my-7 h-3 w-[500%] -translate-x-1/2 rounded-[3px] bg-Black Tablet:my-20 Laptop:h-[1px] Laptop:w-full Laptop:translate-x-0 Laptop:bg-Gray Desktop:my-[120px]",
        )}
      />
      <SearchReviewList reviews={reviews} relatedKeywords={relatedKeywords} />
    </>
  );
}
