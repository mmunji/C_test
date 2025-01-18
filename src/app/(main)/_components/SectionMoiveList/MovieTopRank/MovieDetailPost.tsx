import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import useDevice from "@/hooks/useDevice";

import {
  BestTalkFire,
  ChatLineLg,
  ChevronRightMd,
  StarFillMd,
  TmdbSm,
} from "../../../../../../public/icons";
import BestTalkPost from "./Device/BestTalkPost";
import Tablet_BestTalkPost from "./Device/Tablet_BestTalkPost";

interface MovieDetailType {
  MovieDetailData: Movie_TopTen;
  Filter?: number;
  index: number;
  MovieGenre: string;
}
function sortGenresByTitle(
  genres: MovieGenreDto[],
  genreTitle: string,
): MovieGenreDto[] {
  return [...genres].sort((a, b) => {
    if (a.name === genreTitle) return -1; // genreTitle과 같으면 앞으로 이동
    if (b.name === genreTitle) return 1;
    return 0; // 나머지는 순서를 유지
  });
}

export default function MovieDetailPost({
  MovieDetailData,
  Filter,
  index,
  MovieGenre,
}: MovieDetailType) {
  const { device } = useDevice();
  return (
    <div
      className={`${
        Filter === index
          ? "Laptop:visibility-visible Laptop:opacity-100"
          : "Laptop:visibility-hidden Laptop:opacity-0"
      }  flex h-full flex-col justify-between gap-3 Laptop:gap-0 Laptop:transition-opacity Laptop:duration-700 Laptop:ease-in`}
    >
      <div className="flex flex-col gap-2 Laptop:gap-3">
        <div className="flex gap-3   Laptop:items-center">
          <Link
            href={`detail/${MovieDetailData.movieId}`}
            className="max-w-[62%] flex-shrink Laptop:max-w-[50%]"
          >
            <h4 className="line-clamp-1  w-full  Text-l-Bold Laptop:Text-xl-Bold Desktop:Text-xxl-Bold">
              {MovieDetailData.movienm}
            </h4>
          </Link>
          <div className="flex flex-grow items-center  gap-2  text-Gray_Orange Text-xs-Regular Laptop:gap-[10px] Desktop:Text-s-Regular">
            <span>{dayjs(MovieDetailData.release_date).format("YYYY")}</span>
            <div className="flex h-3 w-[1px] items-center border-r-[1px] border-L_Gray" />
            <div className="flex w-full gap-1 ">
              {sortGenresByTitle(MovieDetailData.genres, MovieGenre)
                .slice(0, 3)
                .map((genre: MovieGenreDto, index: number) => (
                  <span key={index} className="Text-xs-Regular">
                    {genre.name}
                    {index < Math.min(2, MovieDetailData.genres.length - 1) &&
                      " / "}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* 각각의 플랫폼 평점  */}
        <div className="flex gap-5">
          <div className="flex gap-1 Text-m-Medium">
            <Image src={TmdbSm} alt="white_ start" className="h-6 w-6" />
            <span>{MovieDetailData.tmdbrate.toFixed(1)}</span>
          </div>
          <div className="flex gap-1 Text-m-Medium">
            <Image src={StarFillMd} alt="Primary_Start" className="h-6 w-6" />
            <span>{MovieDetailData.rate.toFixed(1)}</span>
          </div>
          <div className="flex gap-1 Text-m-Medium">
            <Image src={ChatLineLg} alt="ChatBox" className="h-6 w-6" />
            <span>{MovieDetailData.reviewCount}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col Desktop:w-[504px]">
        <div className="flex flex-col justify-between  Laptop:flex-row">
          {MovieDetailData.reviewList && (
            <div className="flex items-center gap-1">
              <Image src={BestTalkFire} alt="" className="h-6 w-6" />
              <h4 className="Text-m-Bold">BEST 톡</h4>
            </div>
          )}
          <Link
            href={`detail/${MovieDetailData.movieId}`}
            className="hidden items-center gap-1  p-2 pr-1 Laptop:flex"
          >
            <span className="text-Gray_Orange Text-s-Medium Desktop:Text-m-Medium ">
              자세히보기
            </span>
            <Image src={ChevronRightMd} alt="화살표" />
          </Link>
        </div>
        <div className="flex w-full gap-4 Laptop:flex-col Laptop:gap-2">
          {MovieDetailData.reviewList.map((reviewList: MovieReviewDTO) => {
            if (device == "laptop" || device == "desktop")
              return (
                <BestTalkPost
                  key={reviewList.reviewId}
                  reviewData={reviewList}
                  movieId={MovieDetailData.movieId}
                />
              );
            else {
              return (
                <Tablet_BestTalkPost
                  key={reviewList.reviewId}
                  reviewData={reviewList}
                  movieId={MovieDetailData.movieId}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
