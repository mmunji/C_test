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

  if (currentTab === "평가로그") return null;
  if (!reviews.length) return <Placeholder type="review" />;

  return (
    <div className="grid grid-cols-1 gap-5 Tablet:grid-cols-2 Tablet:gap-5 Laptop:gap-6">
      {reviews.map((review) => (
        <ReviewItem key={review.review_id} review={review} />
      ))}
    </div>
  );
}
