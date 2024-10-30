"use client";
import { useEffect, useState } from "react";

import { movieAPIs } from "@/services/movie/movieAPIs";

import WatchedSkeleton from "../../MainSkeleton/WatchedMoive/WatchedSkeleton";
import Labtop_Posts from "./Browser/Labtop_Posts";
import Mobile_Posts from "./Browser/Mobile_Posts";
import Tablet_Posts from "./Browser/Tablet_Posts";
interface WatchMovieDataType {
  WatchMovieData: WatchMovie[];
}
export default function MoviePosts({ WatchMovieData }: WatchMovieDataType) {
  // await movieAPIs.getWatchMovie();

  return (
    <div>
      {/* Mobile */}
      <Mobile_Posts MovieWatchMovies={WatchMovieData} />
      {/* Tablet */}
      <Tablet_Posts MovieWatchMovies={WatchMovieData} />
      {/* Laptop, Desktop */}
      <Labtop_Posts MovieWatchMovies={WatchMovieData} />
    </div>
  );
}
