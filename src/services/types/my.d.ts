type ActivityCount = "rateCount" | "reviewCount" | "bookmarkCount";

interface Bookmark {
  id: number;
  movie_id: number;
  poster_path: string;
}

interface BadgeCount {
  id: number;
  name: string;
  count: number;
}

interface ObtainedBadge {
  genre_id: number;
  genre_name: string;
  badge_name: string;
  use: boolean;
}

interface Log
  extends Pick<BannerDTO, "movieId" | "movienm" | "poster_path">,
    Pick<review, "id" | "star" | "content" | "createdAt"> {
  category: "keyword" | "review";
}
