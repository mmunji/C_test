import clsx from "clsx";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

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
  showReplies: boolean;
  setShowReplies: Dispatch<SetStateAction<boolean>>;
}

export default function TalkContentsFooter({
  spoiler,
  showSpoiler,
  showReplies,
  setShowReplies,
}: TalkContentsFooterProps) {
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);

  const handleClickLike = () => {
    setDisLike(false);
    setLike(!like);
  };

  const handleClickDisLike = () => {
    setLike(false);
    setDisLike(!disLike);
  };

  const handleClickReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <section className="flex items-center justify-end Tablet:mt-2">
      <section
        onClick={handleClickLike}
        className="my-2 ml-1 mr-2 flex cursor-pointer items-center gap-1"
      >
        <Image
          src={like ? ThumbsUpFillSm : ThumbsUpLineSm}
          alt="좋아요"
          className="Laptop:hidden"
        />
        <Image
          src={like ? ThumbsUpFillMd : ThumbsUpLineMd}
          alt="좋아요"
          className="hidden Laptop:block"
        />
        <p className="select-none text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          0,000
        </p>
      </section>
      <section
        onClick={handleClickDisLike}
        className="my-2 ml-1 mr-2 flex cursor-pointer items-center gap-1"
      >
        <Image
          src={disLike ? ThumbsDownFillSm : ThumbsDownLineSm}
          alt="싫어요"
          className="Laptop:hidden"
        />
        <Image
          src={disLike ? ThumbsDownFillMd : ThumbsDownLineMd}
          alt="싫어요"
          className="hidden Laptop:block"
        />
        <p className="select-none text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          0,000
        </p>
      </section>
      <button
        disabled={!showSpoiler}
        onClick={handleClickReplies}
        className={clsx("mx-1 my-2 flex items-center", {
          "cursor-pointer": spoiler ? showSpoiler : true,
          "cursor-default": spoiler && !showSpoiler,
        })}
      >
        <p
          className={clsx(
            "mr-1 select-none Text-xs-Regular Tablet:Text-s-Medium",
            {
              "text-Gray_Orange": spoiler ? showSpoiler : true,
              "text-Gray": spoiler && !showSpoiler,
            },
          )}
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
      </button>
    </section>
  );
}
