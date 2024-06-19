import Image from "next/image";

import { ThumbsUpLineSm } from "../../../../../../../public/icons";
import GetRating from "../../../Rating/GetRating";

export default function Tablet_BestTalkPost() {
  return (
    <div className="flex h-[184px] w-[148px] flex-col items-center justify-center gap-2 rounded-3xl bg-D1_Gray px-4 pb-4 pt-5">
      <div className="h-[30px] w-[30px] rounded-[60px] border-2 bg-white" />
      <GetRating ratingsize="Sm" />
      <div className="line-clamp-3 Text-s-Regular">
        태블릿은 3줄까지만 보여줍니다. 태블릿은 3줄까지만 보여줍니
      </div>
      <div className="flex justify-end gap-1">
        <Image src={ThumbsUpLineSm} alt="업버튼" />
        <span className="Text-s-Medium">0,000</span>
      </div>
    </div>
  );
}
