import useRating from "@/app/detail/_hooks/useRating";
import Button from "@/components/buttons/Button";
import Modal from "@/components/modal/modal";
import RatingStar from "@/components/rating/RatingStar";
import SpeechBubble from "@/components/speechBubble/SpeechBubble";
import useHandleClickAuthButton from "@/hooks/useHandleClickAuthButtons";
import useNeedLogin from "@/hooks/useNeedLogin";
import { useGetMyTalk } from "@/services/talk/talkQueries";

import DriveCommentText from "./DriveCommentText";
import FixedRating from "./FixedRating";
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
    readyToRating,
    isOpen,
    setIsOpen,
    showTalkForm,
    setShowTalkForm,
  } = useRating({ initialValue: 0 });
  const { handleClickAuthButton } = useHandleClickAuthButton();
  const genreList = movieDetailData.genreDTOList.map((el) => el.id);

  return (
    <div className="relative flex w-full flex-col justify-center rounded-xl py-3 Tablet:py-8 Laptop:mb-6 Laptop:bg-D1_Gray Laptop:px-7 Laptop:py-8">
      {driveTalkText === "" ? (
        <TextBeforeRating title={title} />
      ) : (
        <DriveCommentText
          ratingValue={ratingValue}
          driveTalkText={driveTalkText}
        />
      )}

      <div className="mx-auto mb-6 flex cursor-pointer Laptop:mb-0">
        {myTalk ? (
          <FixedRating star={myTalk?.star || 0} />
        ) : (
          [...Array(5)].map((_, i) => (
            <RatingStar
              key={i}
              {...{
                movienm: movieDetailData.title,
                index: i,
                ratingValue,
                setRatingValue,
                clickedValue,
                setClickedValue,
                ratingSize: "Xl",
                readyToRating,
                StarReview: false,
                movieId: movieId,
                genreList: genreList,
              }}
            />
          ))
        )}
      </div>

      {myTalk && myTalk.content === "" && !showTalkForm && (
        <>
          <Button
            variant="line"
            size="lg"
            onClick={() => setShowTalkForm(true)}
            className="mx-auto hidden bg-transparent Laptop:mt-6 Laptop:block"
          >
            톡 작성하기
          </Button>
          <Button
            variant="line"
            size="sm"
            onClick={() => setShowTalkForm(true)}
            className="mx-auto bg-transparent Laptop:hidden"
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
