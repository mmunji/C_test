"use client";
import { useEffect, useState } from "react";

import { movieAPIs } from "@/services/movie/movieAPIs";

import WatchedSkeleton from "../../MainSkeleton/WatchedMoive/WatchedSkeleton";
import Labtop_Posts from "./Browser/Labtop_Posts";
import Mobile_Posts from "./Browser/Mobile_Posts";
import Tablet_Posts from "./Browser/Tablet_Posts";
export default function MoviePosts() {
  // await movieAPIs.getWatchMovie();
  const [WatchMovieData, setWatchMovieData] = useState<WatchMovie[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response: WatchMovie[] = await movieAPIs.getWatchMovie();
        setWatchMovieData(response);
      } catch (error) {
        console.error("Failed to fetch movie data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, []);

  return isLoading ? (
    <WatchedSkeleton />
  ) : (
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
