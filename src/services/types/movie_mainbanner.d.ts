interface BannerDTO {
  movieId: number;
  movienm: string;
  poster_path: string;
  backdrop_path: string;
  genres: GenreDto[];
  rate: number;
  keyword: string;
  reviewList: BannerReview[];
}

interface BannerReview {
  star: number;
  content: string;
  createdAt: string;
}
