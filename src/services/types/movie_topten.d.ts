interface Movie_TopTen {
  movieId: number;
  movienm: string;
  poster_path: string;
  release_date: string;
  genres: MovieGenreDto[];
  rate: number;
  reviewCount: number;
  reviewList: reviewDTO[];
  tmdbrate: number;
}
interface MovieGenreDto {
  id: number;
  name: string;
}
interface MovieReviewDTO {
  reviewId: number;
  star: number;
  content: string;
  likeCount?: number;
  profile: string;
}
