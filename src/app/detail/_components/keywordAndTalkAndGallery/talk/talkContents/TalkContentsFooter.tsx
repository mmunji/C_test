import Image from "next/image";
import React from "react";

import {
  BottomArrow,
  UnfilledThumbsDown,
  UnfilledThumbsUp,
} from "../../../../../../../public/icons";

export default function TalkContentsFooter() {
  return (
    <section className="flex items-center justify-end Tablet:mt-2">
      <section className="my-2 ml-1 mr-2 flex gap-1">
        <Image src={UnfilledThumbsUp} alt="좋아요" />
        <p className="text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          0,000
        </p>
      </section>
      <section className="my-2 ml-1 mr-2 flex gap-1">
        <Image src={UnfilledThumbsDown} alt="싫어요" />
        <p className="text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          0,000
        </p>
      </section>
      <section className="mx-1 my-2 flex items-center">
        <p className="text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          답글
        </p>
        <Image src={BottomArrow} alt="더보기" className="cursor-pointer" />
      </section>
    </section>
  );
}
