interface MovieReviewRecommed {
  userId: number;
  nickname: string;
  profile: string;
  reviewCount: number;
  rateCount: number;
  badges: BadgeDTO[];
  reviews: PostreviewDTO[];
  null: number;
}
interface BadgeDTO {
  badge_id: number;
  badge_name: string;
}
interface PostreviewDTO {
  review_id: number;
  movie_id: number;
  movienm: string;
  poster_id: string;
  star: number;
  content: string;
  regDate: string;
  rateCount: number;
  rereviewCount: number;
}
