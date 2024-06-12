import Image from "next/image";

import SearchTitle from "@/app/search/_components/SearchTitle";

interface Props {
  movieList?: FindMovieDTO[];
}

export default function SearchMovieList({ movieList }: Props) {
  return (
    <div className="flex flex-col">
      <SearchTitle category="영화" length={movieList?.length} />
      <div className="grid grid-cols-2 gap-2 Tablet:grid-cols-3 Tablet:gap-5 Laptop:grid-cols-6 Laptop:gap-5 Desktop:gap-6">
        {movieList?.map((movie) => (
          <div
            key={movie.id}
            className="relative h-[230px] Tablet:h-[341px] Laptop:h-[260px] Desktop:h-[360px]"
          >
            <Image
              className="rounded-lg object-cover Tablet:rounded-xl"
              src={`${movie?.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/images/detail/default_profile.png"}`}
              alt={movie.title}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}
