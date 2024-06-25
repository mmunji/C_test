import Image from "next/image";

import { StarFillMd } from "../../../../public/icons";

export default function RatingItem() {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-[220px]">
        <Image
          alt="웡카"
          src="/images/detail/detail-poster-example.png"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-L_Gray Text-s-Medium Tablet:Text-m-Medium">
          웡카
        </div>
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
