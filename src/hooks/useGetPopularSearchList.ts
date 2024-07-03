import { useEffect } from "react";

import { searchAPIs } from "@/services/search/searchAPIs";
import useSearchMovieTitlesStore from "@/stores/useSearchMovieTitlesStore";

import useDebounce from "./useDebounce";

export default function useGetPopularSearchList(inputValue: string) {
  const debouncedSearchTerm = useDebounce(inputValue, 200);
  const { movieTitles, setMovieTitles } = useSearchMovieTitlesStore();

  useEffect(() => {
    const getPopularSearchList = async () => {
      const { data } = await searchAPIs.getPopularFind();

      if (!inputValue) {
        setMovieTitles(data);
      } else {
      }
    };
    getPopularSearchList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm, movieTitles.length, setMovieTitles]);
}
