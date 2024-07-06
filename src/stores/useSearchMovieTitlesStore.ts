import { create } from "zustand";

interface UseSearchMovieTitlesStore {
  movieTitles: string[];
  setMovieTitles: (movieTitles: string[]) => void;
}

const useSearchMovieTitlesStore = create<UseSearchMovieTitlesStore>((set) => ({
  movieTitles: [],
  setMovieTitles: (movieTitles: string[]) =>
    set(() => ({ movieTitles: movieTitles })),
}));

export default useSearchMovieTitlesStore;
