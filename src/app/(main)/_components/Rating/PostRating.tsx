import useRating from "@/app/detail/_hooks/useRating";
import Modal from "@/components/modal/modal";
import RatingStar from "@/components/rating/RatingStar";
import useHandleClickAuthButton from "@/hooks/useHandleClickAuthButtons";

interface StarMoiveType {
  movienm?: string;
  movieId?: number;
  StarReview?: boolean;
  handleMovieList?: (text: string) => void;
}

export default function PostRating({
  movienm,
  movieId,
  StarReview,
  handleMovieList,
}: StarMoiveType) {
  const {
    ratingValue,
    setRatingValue,
    clickedValue,
    setClickedValue,
    handleDriveTalk,
    isOpen,
    setIsOpen,
  } = useRating({ initialValue: 0 });
  const { handleClickAuthButton } = useHandleClickAuthButton();
  return (
    <div className="flex w-full flex-col">
      <span className="text-center Text-l-Bold Laptop:hidden">
        {ratingValue.toFixed(1)}
      </span>
      <div className="flex gap-1 Laptop:hidden">
        {[...Array(5)].map((_, i) => (
          <RatingStar
            key={i}
            movienm={movienm}
            movieId={movieId}
            StarReview={StarReview}
            handleMovieList={handleMovieList}
            {...{
              type: "main",
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
      <div className="hidden w-full gap-1 Laptop:flex Desktop:hidden">
        {[...Array(5)].map((_, i) => (
          <RatingStar
            key={i}
            movienm={movienm}
            movieId={movieId}
            StarReview={StarReview}
            handleMovieList={handleMovieList}
            {...{
              type: "main",
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
      <div className="hidden w-full gap-1 Desktop:flex">
        {[...Array(5)].map((_, i) => (
          <RatingStar
            key={i}
            movienm={movienm}
            movieId={movieId}
            StarReview={StarReview}
            handleMovieList={handleMovieList}
            {...{
              type: "main",
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
      {isOpen && (
        <Modal isAlertModal={false} onClose={() => setIsOpen(false)}>
          <Modal.Login
            onKakaoLogin={() => handleClickAuthButton("kakao")}
            onNaverLogin={() => handleClickAuthButton("naver")}
          />
        </Modal>
      )}
    </div>
  );
}
