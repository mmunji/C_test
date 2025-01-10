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
      {!activeSearchTab.includes("톡") && (
        <SearchMovieList movies={movies} relatedKeywords={relatedKeywords} />
      )}
      <div
        className={clsx(
          activeSearchTab !== "전체" && "hidden",
          "relative -left-5 my-7 h-3 w-screen rounded-[3px] bg-Black Tablet:my-20 Laptop:static Laptop:h-[1px] Laptop:w-full Laptop:bg-Gray Desktop:my-[120px]",
        )}
      />
      {!activeSearchTab.includes("영화") && (
        <SearchReviewList reviews={reviews} relatedKeywords={relatedKeywords} />
      )}
    </>
  );
}
