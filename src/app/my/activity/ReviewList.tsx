import Placeholder from "@/app/my/activity/Placeholder";
import ReviewItem from "@/app/my/activity/ReviewItem";

export default function ReviewList() {
  const data = true;

  return data ? (
    <div className="grid grid-cols-1 gap-5 Tablet:grid-cols-2 Tablet:gap-5 Laptop:gap-6">
      {Array(5)
        .fill(1)
        .map((_, i) => (
          <ReviewItem key={i} />
        ))}
    </div>
  ) : (
    <Placeholder type="review" />
  );
}
