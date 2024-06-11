interface FindMovieDTO extends Pick<MovieDetailData, "title" | "overview"> {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface FindMovieTalkDTO {
  id: number;
  movieId: number;
  userId: number;
  star: number;
  content: string;
  spoiler: boolean;
}
