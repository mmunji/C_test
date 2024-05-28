import Image from "next/image";

import { StarFillMd } from "../../../../public/icons";

export default function RatingItem() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="h-[220px] rounded-lg bg-Gray_Orange"></div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-L_Gray Text-s-Medium">영화제목</div>
        <div className="flex items-center gap-[2px]">
          {Array(5)
            .fill(1)
            .map((_, i) => (
              <Image key={i} alt="별점" src={StarFillMd}></Image>
            ))}
        </div>
      </div>
    </div>
  );
}
