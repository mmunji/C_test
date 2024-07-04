interface Talk {
  reviewList: ReviewList[];
  listSize: number;
  totalPage: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}

interface ReviewList {
  nickName: string;
  star: number;
  content: string;
  createdAt: string;
  spoiler: boolean;
  likeCount: number;
  dislikeCount: number;
}
