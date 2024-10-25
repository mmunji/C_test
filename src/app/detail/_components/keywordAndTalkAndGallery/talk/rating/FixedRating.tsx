import RatingStar from "@/components/rating/RatingStar";

export default function FixedRating({ star }: { star: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <RatingStar
          type="detail"
          key={i}
          index={i}
          ratingValue={star}
          setRatingValue={() => {}}
          clickedValue={true}
          setClickedValue={() => {}}
          ratingSize=""
        />
      ))}
    </div>
  );
}
