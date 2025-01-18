import { useRef } from "react";

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

  const containerRef = useRef<HTMLDivElement>(null);
  const handleTouchMove = (e: React.TouchEvent) => {
    if (containerRef.current && !clickedValue) {
      const rect = containerRef.current.getBoundingClientRect();
      const touchX = e.touches[0].clientX - rect.left;
      const percentage = touchX / rect.width;

      const newRating = Math.min(
        Math.max(0, Math.round(percentage * 10) / 2),
        5,
      );
      setRatingValue(newRating);
    }
  };
  return (
    <div className="flex w-full flex-col">
      <span className="text-center Text-l-Bold Laptop:hidden">
        {ratingValue.toFixed(1)}
      </span>
      <div
        className="flex gap-1 Laptop:hidden"
        ref={containerRef}
        onTouchMove={handleTouchMove}
      >
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
