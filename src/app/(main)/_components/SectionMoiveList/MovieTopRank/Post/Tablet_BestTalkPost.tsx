import Image from "next/image";
import Link from "next/link";

import { ThumbsUpLineSm } from "../../../../../../../public/icons";
import GetRating from "../../../Rating/GetRating";
interface ReviewType {
  star: number;
  content: string;
  likeCount?: number;
  profileImg?: string;
  movieId?: number;
}
export default function Tablet_BestTalkPost({
  star,
  content,
  likeCount,
  profileImg,
  movieId,
}: ReviewType) {
  return (
    <Link href={`detail/${movieId}`} className="w-full">
      <div className="flex h-[184px] w-full flex-col items-center justify-center gap-2 rounded-xl bg-D1_Gray px-4 pb-4 pt-5">
        <Image
          height={30}
          width={30}
          className="h-[30px] w-[30px] rounded-[60px] object-cover"
          src={`data:image/jpeg;base64,${profileImg}
            `}
          alt="영화 포스터"
        />
        <GetRating StarRating={star} ratingsize="Sm" space={false} />
        <div className="flex flex-col gap-1">
          <div className="line-clamp-3 h-[63px] text-Gray_Orange Text-s-Regular">
            <span className="line-clamp-3"> {content}</span>
          </div>
        </div>
        <div className="flex w-full justify-end gap-1">
          <Image
            src={ThumbsUpLineSm}
            alt="업버튼"
            style={{ color: "#999490" }}
          />
          <span className="text-L_Gray Text-s-Medium">{likeCount}</span>
        </div>
      </div>
    </Link>
  );
}
