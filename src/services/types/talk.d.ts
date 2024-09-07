interface Talk {
  reviewList: ReviewList[];
  listSize: number;
  totalPage: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}

interface ReviewList {
  id: number;
  nickName: string;
  profileImage: string;
  badgeList: [];
  star: number;
  content: string;
  createdAt: string;
  spoiler: boolean;
  likeCount: number;
  dislikeCount: number;
}
