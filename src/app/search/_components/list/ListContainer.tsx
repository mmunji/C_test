"use client";
import clsx from "clsx";

import SearchMovieList from "@/app/search/_components/list/MovieList";
import SearchReviewList from "@/app/search/_components/list/ReviewList";
import SearchPlaceholder from "@/app/search/_components/placeholders/SearchPlaceholder";
import useQueryString from "@/app/search/_hooks/useQueryString";

interface SearchListContainerProps {
  movies: MovieResult[];
  revires: ReviewResult[];
  isEmpty: boolean;
  relatedKeywords: string[];
}

export default function SearchListContainer({
  movies,
  revires,
  isEmpty,
  relatedKeywords,
}: SearchListContainerProps) {
  const { tab } = useQueryString();
  const activeTab = !tab ? "전체" : tab;
  if (isEmpty && activeTab === "전체")
    return <SearchPlaceholder relatedKeywords={relatedKeywords} />;

  return (
    <>
      <SearchMovieList movies={movies} relatedKeywords={relatedKeywords} />
      <div
        className={clsx(
          activeTab !== "전체" && "hidden",
          "my-7 h-3 w-[500%] -translate-x-1/2 rounded-[3px] bg-Black Tablet:my-20 Laptop:h-[1px] Laptop:w-full Laptop:translate-x-0 Laptop:bg-Gray Desktop:my-[120px]",
        )}
      />
      <SearchReviewList reviews={revires} relatedKeywords={relatedKeywords} />
    </>
  );
}
