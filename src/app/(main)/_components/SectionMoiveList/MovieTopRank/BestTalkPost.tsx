import Image from "next/image";

import { StarFillSm, ThumbsUpLineSm } from "@/../public/icons";
interface ReviewType {
  star: number;
  content: string;
  likeCount: number;
  profileImg: string;
}

export default function BestTalkPost({
  star,
  content,
  likeCount,
  profileImg,
}: ReviewType) {
  return (
    <div className="flex  w-full items-center justify-between gap-[12px]  rounded-xl bg-D1_Gray px-[16px] py-[8px] ">
      <div className="flex flex-row items-center justify-center Desktop:flex-col">
        {/* <div className="h-6 w-6 rounded-[60px] border-2 "  > */}
        {profileImg && (
          <img
            className="h-6 w-6 rounded-[60px] border-2 "
            src={`data:image/jpeg;base64,${profileImg}`}
          />
        )}
        <div className="flex Text-s-Bold">
          <Image src={StarFillSm} alt="별점" />
          <span>{star}</span>
        </div>
      </div>
      <div className="line-clamp-1 flex-1 ">{content}</div>
      <div className="flex items-center justify-center gap-1 Text-s-Medium">
        <Image src={ThumbsUpLineSm} alt="" />
        <span>{likeCount}</span>
      </div>
    </div>
  );
}
