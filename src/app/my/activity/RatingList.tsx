import Placeholder from "@/app/my/_components/Placeholder";
import RatingItem from "@/app/my/activity/RatingItem";

export default function RatingList() {
  const data = true;
  return data ? (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8 Tablet:grid-cols-4 Tablet:gap-x-5 Tablet:gap-y-10 Laptop:grid-cols-6 Laptop:gap-x-6">
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
