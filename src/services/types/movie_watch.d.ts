interface WatchMovie {
  movieId: number;
  movienm: string;
  poster_path: string;
  overview: string;
  release_date: string;
  genres: MovieGenreDto[];
  rate?: number;
}
