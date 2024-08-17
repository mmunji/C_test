"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { StarXl } from "@/../public/icons";
import { movieAPIs } from "@/services/movie/movieAPIs";

import PostCard from "../../PostCard";
import PostRating from "../../Rating/PostRating";
import Labtop_Posts from "./Browser/Labtop_Posts";
import Mobile_Posts from "./Browser/Mobile_Posts";
import Tablet_Posts from "./Browser/Tablet_Posts";
export default function MoviePosts() {
  const [MovieWatchMovie, setMovieWatchMovie] = useState<WatchMovie | null>(
    null,
  );

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await movieAPIs.getWatchMovie();
        setMovieWatchMovie(response);
      } catch (error) {
        console.error("영화를 가져오는 중 오류 발생:", error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div>
      {/* Mobile */}
      <Mobile_Posts MovieWatchMovies={MovieWatchMovie} />
      {/* Tablet */}
      <Tablet_Posts MovieWatchMovies={MovieWatchMovie} />

      {/* Laptop , Desktop */}
      <Labtop_Posts MovieWatchMovies={MovieWatchMovie} />
    </div>
  );
}
