import Image from "next/image";

import GetRating from "@/app/(main)/_components/Rating/GetRating";

import { ChatFillSm, ThumbsUpFillSm } from "../../../../public/icons";

export default function HoverPostCard({ movie }: { movie: MovieHidingPiece }) {
  return (
    <div className="absolute z-10 hidden h-full w-full flex-col gap-2 bg-black/70 px-5 py-6 group-hover:Laptop:flex Desktop:gap-4 Desktop:px-6 Desktop:pb-5 Desktop:pt-7 group-hover:Desktop:flex">
      <div className="flex w-full justify-center">
        <GetRating StarRating={movie.StarAvg} ratingsize="Md" space={true} />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col justify-between gap-1">
          <p className="line-clamp-5 Text-m-Regular Desktop:line-clamp-[9]">
            {movie.content}
          </p>
          <p className="text-end text-Gray Text-xs-Regular">{movie.regDate}</p>
        </div>
        <div className="my-2 h-px w-full rounded-sm bg-Gray Desktop:my-1" />
        <div className="flex w-full justify-end gap-2 text-Gray_Orange Text-s-Medium">
          <div className="flex  gap-1">
            <Image src={ThumbsUpFillSm} alt="별" />
            <span>{movie.likeCount}</span>
          </div>
          <div className="flex  gap-1">
            <Image src={ChatFillSm} alt="별" />
            <span>{movie.rereviewCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
