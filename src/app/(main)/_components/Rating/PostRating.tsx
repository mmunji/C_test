import useRating from "@/app/detail/_hooks/useRating";
import RatingStar from "@/components/rating/RatingStar";
export default function PostRating() {
  const {
    ratingValue,
    setRatingValue,
    clickedValue,
    setClickedValue,
    handleDriveTalk,
  } = useRating({ initialValue: 0 });
  return (
    <>
      <div className="mx-auto flex  gap-1 Desktop:hidden">
        {[...Array(5)].map((_, i) => (
          <RatingStar
            key={i}
            {...{
              index: i,
              ratingValue,
              setRatingValue,
              clickedValue,
              setClickedValue,
              handleDriveTalk,
              ratingSize: "Lg",
            }}
          />
        ))}
      </div>
      <div className="mx-auto hidden gap-1 Desktop:flex">
        {[...Array(5)].map((_, i) => (
          <RatingStar
            key={i}
            {...{
              index: i,
              ratingValue,
              setRatingValue,
              clickedValue,
              setClickedValue,
              handleDriveTalk,
              ratingSize: "Xl",
            }}
          />
        ))}
      </div>
    </>
  );
}
