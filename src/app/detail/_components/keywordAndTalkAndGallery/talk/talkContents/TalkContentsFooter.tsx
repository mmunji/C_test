import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

import {
  BottomArrow,
  FilledThumbsDown,
  FilledThumbsUp,
  GrayBottomArrow,
  UnfilledThumbsDown,
  UnfilledThumbsUp,
} from "../../../../../../../public/icons";

interface TalkContentsFooterProps {
  spoiler: boolean;
  showSpoiler: boolean;
}

export default function TalkContentsFooter({
  spoiler,
  showSpoiler,
}: TalkContentsFooterProps) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleClickLike = () => {
    setDisliked(false);
    setLiked(true);
  };

  const handleClickDislike = () => {
    setLiked(false);
    setDisliked(true);
  };

  return (
    <section className="flex items-center justify-end Tablet:mt-2">
      <section
        onClick={handleClickLike}
        className="my-2 ml-1 mr-2 flex cursor-pointer gap-1"
      >
        <Image
          src={liked ? FilledThumbsUp : UnfilledThumbsUp}
          alt="좋아요"
          className="Tablet:h-6 Tablet:w-6"
        />
        <p className="select-none text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          0,000
        </p>
      </section>
      <section
        onClick={handleClickDislike}
        className="my-2 ml-1 mr-2 flex cursor-pointer gap-1"
      >
        <Image
          src={disliked ? FilledThumbsDown : UnfilledThumbsDown}
          alt="싫어요"
          className="Tablet:h-6 Tablet:w-6"
        />
        <p className="select-none text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          0,000
        </p>
      </section>
      <section
        className={clsx("mx-1 my-2 flex items-center", {
          "cursor-pointer": spoiler ? showSpoiler : true,
          "cursor-default": spoiler && !showSpoiler,
        })}
      >
        <p
          className={clsx("select-none Text-xs-Regular Tablet:Text-s-Medium", {
            "text-Gray_Orange": spoiler ? showSpoiler : true,
            "text-Gray": spoiler && !showSpoiler,
          })}
        >
          답글
        </p>
        <p
          className={clsx("Text-xs-Regular Tablet:Text-s-Medium", {
            "text-Gray_Orange": spoiler ? showSpoiler : true,
            "text-Gray": spoiler && !showSpoiler,
          })}
        >
          999+
        </p>
        <Image
          src={
            spoiler
              ? showSpoiler
                ? BottomArrow
                : GrayBottomArrow
              : BottomArrow
          }
          alt="더보기"
        />
      </section>
    </section>
  );
}
