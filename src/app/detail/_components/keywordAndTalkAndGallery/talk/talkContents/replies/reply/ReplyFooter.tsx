import Image from "next/image";
import React, { useState } from "react";

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

export default function ReplyFooter() {
  const [like, setLike] = useState(false);
  const [disLike, setDislike] = useState(false);

  return (
    <section className="flex h-10 items-center justify-end gap-3">
      <section
        onClick={() => setLike(!like)}
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
          0,000
        </p>
      </section>

      <section
        onClick={() => setDislike(!disLike)}
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
          0,000
        </p>
      </section>
    </section>
  );
}
