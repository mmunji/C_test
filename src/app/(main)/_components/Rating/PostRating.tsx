import useRating from "@/app/detail/_hooks/useRating";
import RatingStar from "@/components/rating/RatingStar";

interface StarMoiveType {
  movienm?: string;
  movieId?: number;
  StarReview?: boolean;
}

export default function PostRating({
  movienm,
  movieId,
  StarReview,
}: StarMoiveType) {
  const {
    ratingValue,
    setRatingValue,
    clickedValue,
    setClickedValue,
    handleDriveTalk,
  } = useRating({ initialValue: 0 });
  return (
    <div className="flex flex-col ">
      <span className="text-center Text-l-Bold Laptop:hidden">
        {ratingValue.toFixed(1)}
      </span>
      <div className="mx-auto flex  gap-1 Laptop:hidden">
        {[...Array(5)].map((_, i) => (
          <RatingStar
            key={i}
            movienm={movienm}
            movieId={movieId}
            StarReview={StarReview}
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
            movienm={movienm}
            movieId={movieId}
            StarReview={StarReview}
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
            movienm={movienm}
            movieId={movieId}
            StarReview={StarReview}
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
