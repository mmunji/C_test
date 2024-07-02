import { useEffect, useState } from "react";

import { searchAPIs } from "@/services/search/searchAPIs";

import useDebounce from "./useDebounce";

export default function useSearchMovies(value: string) {
  const debouncedSearchTerm = useDebounce(value, 300);
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      const { data } = await searchAPIs.searchMovies(debouncedSearchTerm);

      const movieTitlesArr = data
        ?.map((movie: { title: string }) => movie.title)
        .slice(0, 10);

      setMovieTitles(movieTitlesArr);
    };

    if (debouncedSearchTerm) {
      searchMovies();
    }
  }, [debouncedSearchTerm]);

  return { movieTitles };
}
