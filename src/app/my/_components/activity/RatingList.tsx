import Placeholder from "@/app/my/_components/activity/Placeholder";
import RatingItem from "@/app/my/_components/activity/RatingItem";

export default function RatingList() {
  const data = true;
  return data ? (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8">
      {Array(12)
        .fill(1)
        .map((_, i) => (
          <RatingItem key={i} />
        ))}
    </div>
  ) : (
    <Placeholder type="rating" />
  );
}
