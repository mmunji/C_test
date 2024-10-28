import { useEffect, useState } from "react";

import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import WatchedSkeleton from "../../MainSkeleton/WatchedMoive/WatchedSkeleton";
import SimilarTastesMovie from "./SimilarTastesMovie";

export default async function SimilarTastesMovieWapper() {
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
    <WatchedSkeleton />
  ) : (
    <SimilarTastesMovie data={PeopleReviewers} />
  );
}
