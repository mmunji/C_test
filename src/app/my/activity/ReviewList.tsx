import Placeholder from "@/app/my/_components/Placeholder";
import ReviewItem from "@/app/my/activity/ReviewItem";

interface ReviewListProps {
  reviews: PostreviewDTO[];
  activeFilter: Filter;
}

export default function ReviewList({ reviews, activeFilter }: ReviewListProps) {
  const getSortedReviews = () => {
    let sortedReviews: PostreviewDTO[];
    if (activeFilter === "asc") sortedReviews = reviews.reverse();
    else if (activeFilter === "like")
      sortedReviews = reviews.sort((a, b) => b.rateCount - a.rateCount);
    else sortedReviews = reviews;
    return sortedReviews;
  };

  if (!reviews.length) return <Placeholder type="review" />;
  return (
    <div className="grid grid-cols-1 gap-5 Tablet:grid-cols-2 Tablet:gap-5 Laptop:gap-6">
      {getSortedReviews().map((review) => (
        <ReviewItem key={review.review_id} review={review} />
      ))}
    </div>
  );
}
