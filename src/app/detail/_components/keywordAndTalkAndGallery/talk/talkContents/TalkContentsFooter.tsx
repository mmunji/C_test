import Image from "next/image";
import React from "react";

import {
  BottomArrow,
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
  return (
    <section className="flex items-center justify-end Tablet:mt-2">
      <section className="my-2 ml-1 mr-2 flex cursor-pointer gap-1">
        <Image src={UnfilledThumbsUp} alt="좋아요" />
        <p className="select-none text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          0,000
        </p>
      </section>
      <section className="my-2 ml-1 mr-2 flex cursor-pointer gap-1">
        <Image src={UnfilledThumbsDown} alt="싫어요" />
        <p className="select-none text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          0,000
        </p>
      </section>
      <section
        className={`mx-1 my-2 flex  ${!spoiler && "cursor-pointer"} items-center`}
      >
        <p
          className={`select-none ${spoiler ? (showSpoiler ? "text-Gray_Orange" : "text-Gray") : "text-Gray_Orange"} Text-xs-Regular Tablet:Text-s-Medium`}
        >
          답글
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
