import Image from "next/image";
import Link from "next/link";

import { StarFillSm, ThumbsUpLineMd } from "@/../public/icons";

interface ReviewType {
  movieId?: number;
  reviewData: MovieReviewDTO;
}

export default function BestTalkPost({ reviewData, movieId }: ReviewType) {
  return (
    <Link href={`detail/${movieId}`}>
      <div className="flex  w-full items-center justify-between gap-3  rounded-xl bg-D1_Gray px-[16px] py-2 Desktop:py-3 ">
        {reviewData.content ? (
          <>
            <div className="flex-2 flex flex-row items-center justify-center gap-1 Desktop:flex-col">
              <Image
                height={24}
                width={24}
                className="h-6 w-6 rounded-[60px] object-cover"
                src={`data:image/jpeg;base64,${reviewData.profile}
            `}
                alt="영화 포스터"
              />
              <div className=" flex items-center Text-s-Bold">
                <Image src={StarFillSm} alt="별점" />
                <span className="Text-s-Medium">
                  {reviewData.star.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="line-clamp-1 flex-1 text-Gray_Orange Text-s-Regular Desktop:line-clamp-2">
              {reviewData.content}
            </div>
            <div className="flex items-center justify-center gap-1 Text-s-Medium">
              <Image src={ThumbsUpLineMd} alt="" />
              {reviewData.likeCount && <span>{reviewData.likeCount}</span>}
            </div>
          </>
        ) : (
          <>
            <div className="flex-2 flex flex-row items-center justify-center gap-1 Desktop:flex-col">
              <Image
                height={24}
                width={24}
                className="h-6 w-6 rounded-[60px]"
                src={"/images/ssikongi/PNG/Check.png"}
                alt="영화 포스터"
              />
              <div className=" flex items-center Text-s-Bold">
                <Image src={StarFillSm} alt="별점" />
                <span className="Text-s-Medium">
                  {reviewData.star.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="line-clamp-1 flex-1 text-Gray_Orange Desktop:line-clamp-2">
              {reviewData.content}
            </div>
            <div className="flex items-center justify-center gap-1 Text-s-Medium">
              <Image src={ThumbsUpLineMd} alt="" />
              {reviewData.likeCount && <span>{reviewData.likeCount}</span>}
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
