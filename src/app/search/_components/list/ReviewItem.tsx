import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import ROUTES from "@/constants/routes";

import { StarFillSm } from "../../../../../public/icons";
import { ProfileBlue } from "../../../../../public/images";

export default function ReviewItem({ review }: { review: ReviewResult }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const highlightedText = (text: string, query: string | null) => {
    if (!query) return text;
    if (text.includes(query)) {
      const parts = text.split(new RegExp(`(${query})`, "gi"));
      return parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span className="Text-s-Bold Tablet:Text-m-Bold" key={index}>
            {part}
          </span>
        ) : (
          part
        ),
      );
    }
    return text;
  };

  return (
    <Link
      href={`${ROUTES.DETAIL}/${review.reviewDTO.movieId}`}
      key={review.reviewDTO.id}
      className="group flex flex-col gap-2 rounded-xl bg-D1_Gray p-4 hover:bg-D2_Gray active:bg-D3_Gray Tablet:gap-3 Tablet:px-7 Tablet:py-6"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-6 w-6 overflow-hidden rounded-full">
            <Image
              unoptimized
              className="object-cover"
              alt="유저 프로필 이미지"
              fill
              src={
                review.userDTO.profile
                  ? `data:image/png;base64,${review.userDTO.profile}`
                  : ProfileBlue
              }
            />
          </div>
          <span className="text-Silver Text-s-Medium">
            {review.userDTO.nickname}
          </span>
        </div>
        <div className="flex items-center">
          <Image
            unoptimized
            alt="별 아이콘"
            width={16}
            height={16}
            src={StarFillSm}
          />
          <span className="Text-xs-Regular Tablet:Text-s-Bold">
            {Number.isInteger(review.reviewDTO.star)
              ? `${review.reviewDTO.star}.0`
              : review.reviewDTO.star}
          </span>
        </div>
      </div>
      <div className="hidden h-[1px] w-full bg-D2_Gray group-hover:bg-D1_Gray group-active:bg-D2_Gray Tablet:block" />
      <div className="line-clamp-3 h-[63px] break-words text-Gray_Orange Text-s-Regular Tablet:line-clamp-4 Tablet:h-[96px] Tablet:Text-m-Regular">
        {highlightedText(review.reviewDTO.content, query)}
      </div>
      <div className="flex items-center text-L_Gray Text-s-Regular Tablet:Text-m-Medium">
        <p className="line-clamp-1">{review.reviewDTO.movienm}</p>
        <p>&nbsp;·&nbsp;</p>
        <p>{review.reviewDTO.createdAt}</p>
      </div>
    </Link>
  );
}
