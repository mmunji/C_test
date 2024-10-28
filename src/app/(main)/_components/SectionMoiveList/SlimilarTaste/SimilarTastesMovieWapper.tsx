"use client";
import { useEffect, useState } from "react";

import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import SimilarTasteSkleton from "../../MainSkeleton/SimilarTaste/SimilarTasteSkleton";
import SimilarTastesMovie from "./SimilarTastesMovie";

export default function SimilarTastesMovieWapper() {
  const [PeopleReviewers, setPeopleReviewers] = useState<MovieReviewRecommed[]>(
    [],
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response: MovieReviewRecommed[] =
          await movieAPIs.getPeopleReviewers();
        setPeopleReviewers(response);
      } catch (error) {
        console.error("Failed to fetch movie data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, []);

  return isLoading ? (
    <SimilarTasteSkleton />
  ) : (
    <SimilarTastesMovie data={PeopleReviewers} />
  );
}
