import Image from "next/image";

import { StarFillSm, ThumbsUpLineMd } from "@/../public/icons";

import Profile from "../../../Profile/Profile";
interface ReviewType {
  star: number;
  content: string;
  likeCount: number;
  profileImg?: string;
}

export default function BestTalkPost({
  star,
  content,
  likeCount,
  profileImg,
}: ReviewType) {
  return (
    <div className="flex  w-full items-center justify-between gap-3  rounded-xl bg-D1_Gray px-[16px] py-[8px] ">
      <div className="flex flex-row items-center justify-center Desktop:flex-col">
        <div className="flex gap-1">
          {/* <Profile url={profileImg} /> */}
          <div className=" flex items-center Text-s-Bold">
            <Image src={StarFillSm} alt="별점" />
            <span className="Text-s-Medium">{star}</span>
          </div>
        </div>
      </div>
      <div className="line-clamp-1 flex-1 text-Gray_Orange">{content}</div>
      <div className="flex items-center justify-center gap-1 Text-s-Medium">
        <Image src={ThumbsUpLineMd} alt="" />
        <span>{likeCount}</span>
      </div>
    </div>
  );
}
