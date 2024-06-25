interface SearchMovieDetails {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  poster_path: string;
  overview: string;
  original_language: string;
  release_date: string;
  video: boolean;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

interface SearchResultDTO extends SearchMovieDetails {
  original_title: string;
  title: string;
}

interface SearchMovieInfoDTO extends SearchMovieDetails {
  original_query: string;
  query: string;
}

interface SearchMovieTalkDTO extends Pick<SearchMovieDetails, "id"> {
  movieId: number;
  userId: number;
  star: number;
  content: string;
  spoiler: boolean;
}
