import Image from "next/image";

import { StarFillSm, ThumbsUpLineSm } from "@/../public/icons";
export default function BestTalkPost() {
  return (
    <div className="flex  w-full items-center justify-between gap-[12px]  rounded-xl bg-D1_Gray px-[16px] py-[8px] ">
      <div className="flex flex-row items-center justify-center Desktop:flex-col">
        <div className="h-6 w-6 rounded-[60px] border-2 " />
        <div className="flex Text-s-Bold">
          <Image src={StarFillSm} alt="별점" />
          <span>0.0</span>
        </div>
      </div>
      <div className="line-clamp-2 flex-1 ">1줄은 이렇게 보여집니다.</div>
      <div className="flex items-center justify-center gap-1 Text-s-Medium">
        <Image src={ThumbsUpLineSm} alt="" />
        <span>0,000</span>
      </div>
    </div>
  );
}
