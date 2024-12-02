import { useEffect } from "react";

import { searchAPIs } from "@/services/search/searchAPIs";
import useSearchMovieTitlesStore from "@/stores/useSearchMovieTitlesStore";

export default function useGetPopularSearchList() {
  const { setPopularMovieTitles } = useSearchMovieTitlesStore();

  useEffect(() => {
    const getPopularSearchList = async () => {
      const { data } = await searchAPIs.getPopularFind();

      setPopularMovieTitles(data);
    };
    getPopularSearchList();
  }, [setPopularMovieTitles]);
}
