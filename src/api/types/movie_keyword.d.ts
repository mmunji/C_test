interface MentionKeword {
  reviewList: reviewDTO[];
  keyword: string;
}
interface reviewDTO {
  nickname: string;
  review: review;
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
}
