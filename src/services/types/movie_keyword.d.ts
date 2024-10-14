interface MentionKeword {
  reviewList: reviewDTO[];
  keyword: string;
  count: number;
}
interface reviewDTO {
  nickname: string;
  review: review;
  profile: string;
}
interface review {
  content: string;
  id: number;
  movienm: string;
  movieId: number;
  spoiler: boolean;
  star: number;
  userId: number;
  parentReview: null;
  createdAt: string;
}
