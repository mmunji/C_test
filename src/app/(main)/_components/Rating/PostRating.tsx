import useRating from "@/app/detail/_hooks/useRating";
import RatingStar from "@/components/rating/RatingStar";
export default function PostRating() {
  const {
    ratingValue,
    setRatingValue,
    clickedValue,
    setClickedValue,
    handleDriveTalk,
  } = useRating();
  return (
    <div className="flex flex-col ">
      <span className="text-center Text-l-Bold Laptop:hidden">
        {ratingValue.toFixed(1)}
      </span>
      <div className="mx-auto flex  gap-1 Laptop:hidden">
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
      <div className="mx-auto hidden  gap-1 Laptop:flex Desktop:hidden">
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
    </div>
  );
}
