interface MentionKeword {
  reviewList: reviewDTO[];
  keyword: string;
  count: number;
}
interface StateTO {
  state: boolean;
}

interface reviewDTO {
  nickname: string;
  review: review;
  profile: string;
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
