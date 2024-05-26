import Placeholder from "@/app/my/_components/activity/Placeholder";
import ReviewItem from "@/app/my/_components/activity/ReviewItem";

export default function ReviewList() {
  const data = true;

  return data ? (
    <div className="flex flex-col gap-5">
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
