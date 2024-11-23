"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { CaretDownMd, ChevronDown, Filter } from "@/../public/icons";
import Button from "@/components/buttons/Button";
import Dropdown from "@/components/dropdown/dropdown";
import { movieAPIs } from "@/services/movie/movieAPIs";

import DeskTop_BestMovie from "./DeskTop_BestMoive";
import Laptop_BestMovie from "./Laptop_BestMovie";
import Mobile_BestMovie from "./Mobile_BestMovie";
import Tablet_BestMoive from "./Tablet_BestMoive";

interface MoiveTopRankType {
  data: Movie_TopTen | null;
}

export default function MoiveTopRank({ data }: MoiveTopRankType) {
  const [filter, setFilter] = useState(0);

  const MovieGenreType = [
    {
      name: "전체",
      index: 0,
    },
    { name: "액션", index: 28 },
    { name: "모험", index: 12 },
    { name: "범죄", index: 80 },
    { name: "스틸러", index: 53 },
    { name: " 로맨스", index: 10749 },
    { name: "코미디", index: 35 },
    { name: "판타지", index: 14 },
    { name: "공포", index: 27 },
    { name: "드라마", index: 18 },
    { name: "가족", index: 10751 },
    { name: "SF", index: 878 },
    { name: "애니메이션", index: 16 },
    { name: "다큐멘터리", index: 99 },
    { name: "음악", index: 10402 },
    { name: "역사", index: 36 },
    { name: "전쟁", index: 10752 },
    { name: "서부", index: 37 },
    { name: "TV영화", index: 10770 },
  ];

  const [MovieTopTenData, setMovieTopTenData] = useState<Movie_TopTen | null>(
    data,
  );

  const fetchMovie = async (index: number) => {
    try {
      const response = await movieAPIs.getMovieTopTen(
        MovieGenreType[index].index,
      );
      setMovieTopTenData(response);
    } catch (error) {
      console.error("영화를 가져오는 중 오류 발생:", error);
    }
  };
  const getSortedGenres = () => {
    if (filter === 0) return MovieGenreType; // "전체"가 선택된 경우 순서 변경 없이 반환

    const selectedGenreIndex = filter;
    const fixedGenres = MovieGenreType.slice(1); // "전체"를 제외한 나머지
    const reorderedGenres = [
      ...fixedGenres.slice(selectedGenreIndex - 1),
      ...fixedGenres.slice(0, selectedGenreIndex - 1),
    ];

    return [MovieGenreType[0], ...reorderedGenres]; // "전체"를 맨 앞에 추가
  };

  useEffect(() => {}, [filter]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[24px]">
          <h1 className="Text-l-Bold Laptop:Text-xxl-Bold">영화 톡 TOP 10</h1>
          <div className="flex gap-1">
            <Dropdown type="genre">
              <Dropdown.Trigger>
                <Button type="button" variant={"textIconR"}>
                  {MovieGenreType[filter].name}
                  <Image
                    src={CaretDownMd}
                    alt="더보기"
                    className="cursor-pointer"
                  />
                </Button>
              </Dropdown.Trigger>
              <Dropdown.List className="left-0 top-11">
                {getSortedGenres().map((genre, index) => (
                  <Dropdown.Item
                    key={genre.index}
                    onClick={() => {
                      setFilter(MovieGenreType.indexOf(genre));
                      fetchMovie(MovieGenreType.indexOf(genre));
                    }}
                  >
                    {genre.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.List>
            </Dropdown>
          </div>
        </div>

        <span className="text-D3_Gray Text-xs-Regular Tablet:Text-s-Medium">
          매월 업데이트
        </span>
      </div>

      <div>
        {/* 모바일 */}
        <Tablet_BestMoive MovieData={MovieTopTenData} />
        <DeskTop_BestMovie
          MovieData={MovieTopTenData}
          genreTitle={MovieGenreType[filter].name}
        />
        <Laptop_BestMovie MovieData={MovieTopTenData} />
        <Mobile_BestMovie MovieData={MovieTopTenData} />
      </div>
    </div>
  );
}
