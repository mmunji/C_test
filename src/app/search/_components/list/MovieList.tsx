import clsx from "clsx";

import SearchListHeader from "@/app/search/_components/list/Header";
import MovieItem from "@/app/search/_components/list/MovieItem";
import SearchPlaceholder from "@/app/search/_components/placeholders/SearchPlaceholder";
import useSlicedDataByDevice from "@/app/search/_hooks/useSlicedDataByDevice";
import useSearchTabStore from "@/stores/useTabStore";

interface SearchMovieListProps {
  movies: MovieResult[];
  relatedKeywords: string[];
}

export default function SearchMovieList({
  movies,
  relatedKeywords,
}: SearchMovieListProps) {
  const { activeSearchTab } = useSearchTabStore();
  const slicedData = useSlicedDataByDevice<MovieResult>({
    category: "movie",
    data: movies,
  });
  const data = activeSearchTab === "전체" ? slicedData : movies;

  return (
    <div className="flex flex-col gap-3 Tablet:gap-2 Laptop:gap-5">
      <SearchListHeader category="영화" length={movies?.length} />
      <div
        className={clsx(
          movies?.length &&
            "grid grid-cols-2 gap-2 Tablet:grid-cols-3 Tablet:gap-5 Laptop:grid-cols-6 Desktop:gap-6",
        )}
      >
        {movies.length ? (
          data.map((movie) => <MovieItem key={movie.id} movie={movie} />)
        ) : (
          <SearchPlaceholder isAlone relatedKeywords={relatedKeywords} />
        )}
      </div>
    </div>
  );
}
