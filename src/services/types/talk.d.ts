interface Talk {
  reviewList: ReviewList[];
  commentList: ReviewList[];
  listSize: number;
  totalPage: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}

interface MyTalk {
  content: string;
  createTime: string;
  reviewId: number;
  star: number;
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
  commentCount: number;
  likeCheck: boolean;
  dislikeCheck: boolean;
}
