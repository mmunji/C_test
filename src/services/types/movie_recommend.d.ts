interface MovieReviewRecommed {
  userId: number;
  ninkname: string;
  profile: string;
  reviewCount: number;
  rateCount: number;
  bages: BadgeDTO[];
  reviews: PostreviewDTO[];
}
interface BadgeDTO {
  badge_id: number;
  badge_name: string;
}
interface PostreviewDTO {
  review_id: number;
  movie_id: number;
  moviewnm: string;
  poster_id: string;
  star: number;
  content: string;
  regDate: string;
  rateCount: 0;
  rereviewCount: 0;
}
