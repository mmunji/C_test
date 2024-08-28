import Image from "next/image";

import { ThumbsUpLineSm } from "../../../../../../../public/icons";
import GetRating from "../../../Rating/GetRating";
interface ReviewType {
  star: number;
  content: string;
  likeCount: number;
  profileImg?: string;
}
export default function Tablet_BestTalkPost({
  star,
  content,
  likeCount,
  profileImg,
}: ReviewType) {
  return (
    <div className="flex h-[184px] w-[148px] flex-col items-center justify-center gap-2 rounded-3xl bg-D1_Gray px-4 pb-4 pt-5">
      <img
        className="h-[30px] w-[30px] rounded-[60px]"
        src={`data:image/jpeg;base64,${profileImg}`}
        alt="Profile"
      />

      <GetRating StarRating={star} ratingsize="Sm" />
      <div className="line-clamp-3 Text-s-Regular">{content}</div>
      <div className="flex justify-end gap-1">
        <Image src={ThumbsUpLineSm} alt="업버튼" />
        <span className="Text-s-Medium">{likeCount}</span>
      </div>
    </div>
  );
}
