import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseSearchMovieTitlesStore {
  popularMovieTitles: string[];
  movieTitles: string[];
  setMovieTitles: (movieTitles: string[]) => void;
  setPopularMovieTitles: (popularMovieTitles: string[]) => void;
}

const useSearchMovieTitlesStore = create(
  persist<UseSearchMovieTitlesStore>(
    (set, _get) => ({
      popularMovieTitles: [],
      movieTitles: [],
      setMovieTitles: (movieTitles: string[]) =>
        set(() => ({ movieTitles: movieTitles })),
      setPopularMovieTitles: (popularMovieTitles: string[]) =>
        set(() => ({ popularMovieTitles: popularMovieTitles })),
    }),
    {
      name: "searched-movie-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useSearchMovieTitlesStore;
