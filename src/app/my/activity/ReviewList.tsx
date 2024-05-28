import Placeholder from "@/app/my/activity/Placeholder";
import ReviewItem from "@/app/my/activity/ReviewItem";

export default function ReviewList() {
  const data = true;

  return data ? (
    <div className="flex flex-col gap-5">
      {Array(5)
        .fill(1)
        .map((review, i) => (
          <ReviewItem key={i} />
        ))}
    </div>
  ) : (
    <Placeholder type="review" />
  );
}
