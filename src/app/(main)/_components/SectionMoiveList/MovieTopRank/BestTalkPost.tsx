import Image from "next/image";

import { StarFillSm } from "@/../public/icons";
export default function BestTalkPost() {
  return (
    <div className="flex  justify-between gap-[12px] rounded-xl  bg-D1_Gray px-[16px] py-[8px]">
      <div className="flex">
        <span>프로필 </span>
        <Image src={StarFillSm} alt="별점" />
        0.0
      </div>
      <div>Content</div>
      <div>따봉</div>
    </div>
  );
}
