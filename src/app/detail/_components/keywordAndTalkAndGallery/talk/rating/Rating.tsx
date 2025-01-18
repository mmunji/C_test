import { useEffect, useRef, useState } from "react";

import useRating from "@/app/detail/_hooks/useRating";
import Button from "@/components/buttons/Button";
import Modal from "@/components/modal/modal";
import RatingStar from "@/components/rating/RatingStar";
import SpeechBubble from "@/components/speechBubble/SpeechBubble";
import useHandleClickAuthButton from "@/hooks/useHandleClickAuthButtons";
import useLoggedInStore from "@/stores/useLoggedIn";
import useRefetchMyTalk from "@/stores/useRefetchMyTalk";

import DriveCommentText from "./DriveCommentText";
import TalkForm from "./talkForm/TalkForm";
import TextBeforeRating from "./TextBeforeRating";

interface RatingProps {
  title: string;
  movieId: number;
  movieDetailData: MovieDetailData;
  myTalk: MyTalk;
}

export default function Rating({
  title,
  movieId,
  movieDetailData,
  myTalk,
}: RatingProps) {
  const {
    ratingValue,
    setRatingValue,
    clickedValue,
    setClickedValue,
    driveTalkText,
    setDriveTalkText,
    readyToRating,
    isOpen,
    setIsOpen,
    showTalkForm,
    setShowTalkForm,
  } = useRating({ initialValue: myTalk ? myTalk?.star : 0, myTalk });
  const { handleClickAuthButton } = useHandleClickAuthButton();
  const genreList = movieDetailData.genreDTOList.map((el) => el.id);
  const [isLoading, setIsLoading] = useState(false);
  const { loggedIn } = useLoggedInStore();

  const { myTalk: isMyTalk } = useRefetchMyTalk();
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
  useEffect(() => {
    if (!loggedIn) {
      setRatingValue(0);
      setDriveTalkText("");
    }
  }, [loggedIn, setDriveTalkText, setRatingValue]);

  useEffect(() => {
    if (!isMyTalk) {
      setRatingValue(0);
      setDriveTalkText("");
    }
  }, [isMyTalk, setDriveTalkText, setRatingValue]);

  useEffect(() => {
    if (clickedValue) {
      setIsLoading(true);
    }

    if (myTalk) {
      setIsLoading(false);
    }
  }, [clickedValue, myTalk]);

  return (
    <div className="relative flex w-full flex-col justify-center rounded-xl py-3 Tablet:py-8 Laptop:mb-6 Laptop:bg-D1_Gray Laptop:px-7 Laptop:py-8">
      {driveTalkText === "" && !isMyTalk ? (
        <TextBeforeRating title={title} />
      ) : (
        <DriveCommentText
          ratingValue={ratingValue}
          driveTalkText={driveTalkText}
        />
      )}

      <div
        className="mx-auto mb-6 flex cursor-pointer Laptop:mb-0"
        ref={containerRef}
        onTouchMove={handleTouchMove}
      >
        {isMyTalk
          ? [...Array(5)].map((_, i) => (
              <RatingStar
                key={i}
                {...{
                  myTalk: myTalk,
                  type: "detail-edit",
                  movienm: movieDetailData.title,
                  index: i,
                  ratingValue,
                  setRatingValue,
                  clickedValue,
                  setClickedValue,
                  ratingSize: "Xl",
                  readyToRating,
                  StarReview: showTalkForm ? false : true,
                  movieId: movieId,
                  genreList: genreList,
                }}
              />
            ))
          : [...Array(5)].map((_, i) => (
              <RatingStar
                key={i}
                {...{
                  myTalk: myTalk,
                  type: "detail",
                  movienm: movieDetailData.title,
                  index: i,
                  ratingValue,
                  setRatingValue,
                  clickedValue,
                  setClickedValue,
                  ratingSize: "Xl",
                  readyToRating,
                  StarReview: showTalkForm ? false : true,
                  movieId: movieId,
                  genreList: genreList,
                }}
              />
            ))}
      </div>

      {isLoading && loggedIn && (
        <>
          <Button
            variant="line"
            size="lg"
            className="mx-auto hidden bg-transparent hover:bg-transparent active:bg-transparent Laptop:mt-6 Laptop:block"
          >
            별점 저장중...
          </Button>
          <Button
            variant="line"
            size="sm"
            className="mx-auto bg-transparent hover:bg-transparent active:bg-transparent Laptop:hidden"
          >
            별점 저장중...
          </Button>
        </>
      )}

      {myTalk && myTalk.content === "" && !showTalkForm && (
        <>
          <Button
            size="lg"
            onClick={() => setShowTalkForm(true)}
            className="mx-auto hidden bg-D2_Gray Laptop:mt-6 Laptop:block"
          >
            톡 작성하기
          </Button>
          <Button
            size="sm"
            onClick={() => setShowTalkForm(true)}
            className="mx-auto bg-D2_Gray Laptop:hidden"
          >
            톡 작성하기
          </Button>
        </>
      )}

      {showTalkForm && (
        <TalkForm
          {...{
            movieId,
            ratingValue,
            movieDetailData,
            setShowTalkForm,
            myTalk,
          }}
        />
      )}

      {!clickedValue && !showTalkForm && !myTalk && (
        <div className="absolute bottom-0 left-1/2 w-[243px] translate-x-[-50%] translate-y-[50%] Tablet:bottom-5 Laptop:bottom-0">
          <SpeechBubble id={"Rating"} exit={clickedValue} dir="top">
            먼저 별점을 매기고 톡을 작성해주세요.
          </SpeechBubble>
        </div>
      )}

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
