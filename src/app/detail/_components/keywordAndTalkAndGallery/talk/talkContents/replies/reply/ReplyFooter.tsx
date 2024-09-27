import Image from "next/image";
import React, { useState } from "react";

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
    setDislike(false);
    setLike(!like);
    likeReply(reply.id);
  };

  const handleClickDislike = () => {
    setLike(false);
    setDislike(!disLike);
    dislikeReply(reply.id);
  };

  return (
    <section className="flex h-10 items-center justify-end gap-3">
      <section
        onClick={handleClickLike}
        className="flex cursor-pointer items-center"
      >
        <Image
          src={like ? ThumbsUpFillSm : ThumbsUpLineSm}
          alt="좋아요"
          className="Tablet:hidden"
        />
        <Image
          src={like ? ThumbsUpFillMd : ThumbsUpLineMd}
          alt="좋아요"
          className="hidden Tablet:block"
        />
        <p className="select-none text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          {reply.likeCount}
        </p>
      </section>

      <section
        onClick={handleClickDislike}
        className="flex cursor-pointer items-center"
      >
        <Image
          src={disLike ? ThumbsDownFillSm : ThumbsDownLineSm}
          alt="싫어요"
          className="Tablet:hidden"
        />
        <Image
          src={disLike ? ThumbsDownFillMd : ThumbsDownLineMd}
          alt="싫어요"
          className="hidden Tablet:block"
        />
        <p className="select-none text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          {reply.dislikeCount}
        </p>
      </section>
    </section>
  );
}
