"use client";
import { useSearchParams } from "next/navigation";

import Placeholder from "@/app/my/_components/Placeholder";
import ReviewItem from "@/app/my/activity/ReviewItem";

interface ReviewListProps {
  reviews: PostreviewDTO[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab");
  const currentFilter = searchParams.get("sort");

  const getSortedReviews = () => {
    let sortedReviews: PostreviewDTO[];
    if (currentFilter === "asc") sortedReviews = reviews.reverse();
    else if (currentFilter === "like")
      sortedReviews = reviews.sort((a, b) => b.rateCount - a.rateCount);
    else sortedReviews = reviews;
    return sortedReviews;
  };

  if (currentTab === "평가로그") return null;
  if (!reviews.length) return <Placeholder type="review" />;
  return (
    <div className="grid grid-cols-1 gap-5 Tablet:grid-cols-2 Tablet:gap-5 Laptop:gap-6">
      {getSortedReviews().map((review) => (
        <ReviewItem key={review.review_id} review={review} />
      ))}
    </div>
  );
}
