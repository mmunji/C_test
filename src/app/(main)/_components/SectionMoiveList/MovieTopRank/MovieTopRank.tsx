"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { ChevronDown } from "@/../public/icons";
import Button from "@/components/buttons/Button";
import Dropdown from "@/components/dropdown/dropdown";
import { movieAPIs } from "@/services/movie/movieAPIs";

import DeskTop_BestMovie from "./DeskTop_BestMoive";
import Laptop_BestMovie from "./Laptop_BestMovie";
import Mobile_BestMovie from "./Mobile_BestMovie";
import Tablet_BestMoive from "./Tablet_BestMoive";
export default function MoiveTopRank() {
  const [filter, setFilter] = useState(0);
  /* 슬라이드 버튼 만들어야함 */
  const MovieGenreType = [
    "전체",
    "액션",
    "모험",
    "범죄",
    "스릴러",
    "로맨스",
    "코미디",
    "판타지",
    "공포",
    "드라마",
    "가족",
    "SF",
    "애니메이션",
    "다큐멘터리",
    "음악",
    "역사",
    "전쟁",
    "서부",
    "TV영화",
  ];
  const [MovieTopTenData, setMovieTopTenData] = useState<Movie_TopTen | null>(
    null,
  );
  // const MovieMasterPiece: MovieHidingPiece = await movieAPIs.getHidingPiece();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await movieAPIs.getMovieTopTen(filter);
        setMovieTopTenData(response);
      } catch (error) {
        console.error("영화를 가져오는 중 오류 발생:", error);
      }
    };

    fetchMovie();
  }, [filter]);
  return (
    <div className="flex flex-col gap-4  ">
      <div className="flex justify-between">
        <div className="flex gap-[24px]">
          <h1 className="Text-l-Bold Laptop:Text-xxl-Bold">영화톡TOP10</h1>
          <Dropdown type="genre">
            <Dropdown.Trigger>
              <div className=" text-white">전체</div>
            </Dropdown.Trigger>

            <Dropdown.List>
              {MovieGenreType.map((genre, index) => {
                return (
                  <Dropdown.Item key={index} onClick={() => setFilter(index)}>
                    {genre}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.List>
          </Dropdown>
          {/* {StateCategory ? <MovieCategory /> : ""} */}
        </div>
        <span className="text-D3_Gray">00.00.00 기준 `</span>
      </div>
      {/* 모바일 */}
      <Tablet_BestMoive MovieData={MovieTopTenData} />
      <DeskTop_BestMovie MovieData={MovieTopTenData} />
      <Laptop_BestMovie MovieData={MovieTopTenData} />
      <Mobile_BestMovie MovieData={MovieTopTenData} />
    </div>
  );
}
