import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

import {
  CaretDownGraySm,
  CaretDownSm,
  ThumbsDownFillMd,
  ThumbsDownFillSm,
  ThumbsDownLineMd,
  ThumbsDownLineSm,
  ThumbsUpFillMd,
  ThumbsUpFillSm,
  ThumbsUpLineMd,
  ThumbsUpLineSm,
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
    setLiked(!liked);
  };

  const handleClickDislike = () => {
    setLiked(false);
    setDisliked(!disliked);
  };

  return (
    <section className="flex items-center justify-end Tablet:mt-2">
      <section
        onClick={handleClickLike}
        className="my-2 ml-1 mr-2 flex cursor-pointer gap-1"
      >
        <Image
          src={liked ? ThumbsUpFillSm : ThumbsUpLineSm}
          alt="좋아요"
          className="Laptop:hidden"
        />
        <Image
          src={liked ? ThumbsUpFillMd : ThumbsUpLineMd}
          alt="좋아요"
          className="hidden Laptop:block"
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
          src={disliked ? ThumbsDownFillSm : ThumbsDownLineSm}
          alt="싫어요"
          className="Laptop:hidden"
        />
        <Image
          src={disliked ? ThumbsDownFillMd : ThumbsDownLineMd}
          alt="싫어요"
          className="hidden Laptop:block"
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
                ? CaretDownSm
                : CaretDownGraySm
              : CaretDownSm
          }
          alt="더보기"
        />
      </section>
    </section>
  );
}
