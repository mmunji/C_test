import Image from "next/image";
import React, { useState } from "react";

import Button from "@/components/buttons/Button";
import Modal from "@/components/modal/modal";
import useHandleClickAuthButton from "@/hooks/useHandleClickAuthButtons";
import useNeedLogin from "@/hooks/useNeedLogin";
import { useDislikeTalk, useLikeTalk } from "@/services/talk/talkMutations";

import {
  ThumbsDownFillMd,
  ThumbsDownFillSm,
  ThumbsDownLineMd,
  ThumbsDownLineSm,
  ThumbsUpFillMd,
  ThumbsUpFillSm,
  ThumbsUpLineMd,
  ThumbsUpLineSm,
} from "../../../../../../../../../public/icons";

interface ReplyFooterProps {
  reply: ReviewList;
  movieId: number;
  parentReviewId: number;
}

export default function ReplyFooter({
  reply,
  movieId,
  parentReviewId,
}: ReplyFooterProps) {
  const { handleNeedLogin, isOpen, setIsOpen } = useNeedLogin();
  const { handleClickAuthButton } = useHandleClickAuthButton();
  const [like, setLike] = useState(false);
  const [disLike, setDislike] = useState(false);
  const { mutate: likeReply } = useLikeTalk({
    type: "reply",
    parentReviewId: parentReviewId,
  });
  const { mutate: dislikeReply } = useDislikeTalk({
    type: "reply",
    parentReviewId: parentReviewId,
  });

  const handleClickLike = () => {
    if (handleNeedLogin()) return;
    setDislike(false);
    setLike(!like);
    likeReply(reply?.id);
  };

  const handleClickDislike = () => {
    if (handleNeedLogin()) return;
    setLike(false);
    setDislike(!disLike);
    dislikeReply(reply?.id);
  };

  return (
    <>
      <section className="flex h-10 items-center justify-end">
        <Button
          onClick={handleClickLike}
          className="flex cursor-pointer items-center"
          variant="textIconR"
        >
          <Image
            unoptimized
            src={reply?.likeCheck ? ThumbsUpFillSm : ThumbsUpLineSm}
            alt="좋아요"
            className="Tablet:hidden"
          />
          <Image
            unoptimized
            src={reply?.likeCheck ? ThumbsUpFillMd : ThumbsUpLineMd}
            alt="좋아요"
            className="hidden Tablet:block"
          />
          <p className="select-none text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
            {reply?.likeCount}
          </p>
        </Button>

        <Button
          onClick={handleClickDislike}
          className="flex cursor-pointer items-center"
          variant="textIconR"
        >
          <Image
            unoptimized
            src={reply?.dislikeCheck ? ThumbsDownFillSm : ThumbsDownLineSm}
            alt="싫어요"
            className="Tablet:hidden"
          />
          <Image
            unoptimized
            src={reply?.dislikeCheck ? ThumbsDownFillMd : ThumbsDownLineMd}
            alt="싫어요"
            className="hidden Tablet:block"
          />
          <p className="select-none text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
            {reply?.dislikeCount}
          </p>
        </Button>
      </section>
      {isOpen && (
        <Modal isAlertModal={false} onClose={() => setIsOpen(false)}>
          <Modal.Login
            onKakaoLogin={() => handleClickAuthButton("kakao")}
            onNaverLogin={() => handleClickAuthButton("naver")}
          />
        </Modal>
      )}
    </>
  );
}
