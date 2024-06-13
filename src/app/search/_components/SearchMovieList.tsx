import Image from "next/image";
import Link from "next/link";

import SearchPlaceholder from "@/app/search/_components/placeholders/SearchPlaceholder";
import SearchResponsiveContainer from "@/app/search/_components/SearchResponsiveContainer";
import SearchTitle from "@/app/search/_components/SearchTitle";
import ROUTES from "@/constants/routes";
import useDevice from "@/hooks/useDevice";

interface Props {
  movieList?: SearchMovieInfoDTO[];
  handleTabChange: (category: string) => void;
  isActiveTabIndex: number;
}

export default function SearchMovieList({
  movieList,
  handleTabChange,
  isActiveTabIndex,
}: Props) {
  const { isMobile } = useDevice();
  const sortedMovieList = !isActiveTabIndex
    ? movieList?.slice(0, isMobile ? 4 : 6)
    : movieList;
  if (isActiveTabIndex === 2) return null;
  return (
    <SearchResponsiveContainer dataLength={movieList?.length}>
      <SearchTitle
        isMobile={isMobile}
        isActiveTabIndex={isActiveTabIndex}
        handleTabChange={handleTabChange}
        category="영화"
        length={movieList?.length}
      />

      <div
        className={`${sortedMovieList?.length ? "grid grid-cols-2 gap-2 Tablet:grid-cols-3 Tablet:gap-5 Laptop:grid-cols-6 Desktop:gap-6" : ""}`}
      >
        {sortedMovieList?.length ? (
          sortedMovieList.map((movie) => (
            <Link
              href={`${ROUTES.DETAIL}/${movie.id}`}
              key={movie.id}
              className="relative h-[230px] Tablet:h-[341px] Laptop:h-[260px] Desktop:h-[360px]"
            >
              <Image
                className="rounded-lg object-cover Tablet:rounded-xl"
                src={`${movie?.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/images/detail/default_profile.png"}`}
                alt={movie.query}
                fill
              />
            </Link>
          ))
        ) : (
          <SearchPlaceholder isActiveTabIndex={isActiveTabIndex} />
        )}
      </div>
    </SearchResponsiveContainer>
  );
}
