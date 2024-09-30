import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import SearchListHeader from "@/app/search/_components/list/Header";
import SearchPlaceholder from "@/app/search/_components/placeholders/SearchPlaceholder";
import useDeviceLimits from "@/app/search/_hooks/useDeviceLimits";
import ROUTES from "@/constants/routes";
import useSearchTabStore from "@/stores/useTabStore";

import { StarFillSm } from "../../../../../public/icons";

interface SearchReviewListProps {
  reviews: ReviewResult[];
  relatedKeywords: string[];
}

export default function SearchReviewList({
  reviews,
  relatedKeywords,
}: SearchReviewListProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const { activeSearchTab } = useSearchTabStore();
  const sortedMovieList = useDeviceLimits<ReviewResult>({
    category: "talk",
    data: reviews,
  });
  const data = activeSearchTab === "전체" ? sortedMovieList : reviews;

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

  if (activeSearchTab.includes("영화")) return null;
  return (
    <div className="flex flex-col gap-3 Tablet:gap-2 Laptop:gap-5">
      <SearchListHeader category="톡" length={reviews?.length} />
      <div
        className={clsx(
          reviews?.length &&
            "flex flex-col gap-3 Tablet:grid Tablet:grid-cols-2 Tablet:gap-5 Laptop:grid-cols-3 Desktop:grid-cols-4",
        )}
      >
        {reviews?.length ? (
          data.map((talk) => (
            <Link
              href={`${ROUTES.DETAIL}/${talk.reviewDTO.movieId}`}
              key={talk.reviewDTO.id}
              className="flex flex-col gap-2 rounded-xl bg-D1_Gray p-4 hover:bg-D2_Gray active:bg-D3_Gray Tablet:gap-3 Tablet:px-7 Tablet:py-6"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    alt="유저 프로필 이미지"
                    width={24}
                    height={24}
                    src={
                      talk.userDTO.profile
                        ? `data:image/png;base64,${talk.userDTO.profile}`
                        : "/images/detail/default_profile2.png"
                    }
                  />
                  <span className="text-Silver Text-s-Medium">
                    {talk.userDTO.nickname}
                  </span>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="별 아이콘"
                    width={16}
                    height={16}
                    src={StarFillSm}
                  />
                  <span className="Text-xs-Regular Tablet:Text-s-Bold">
                    {Number.isInteger(talk.reviewDTO.star)
                      ? `${talk.reviewDTO.star}.0`
                      : talk.reviewDTO.star}
                  </span>
                </div>
              </div>
              <div className="hidden h-[1px] w-full bg-D2_Gray Tablet:block" />
              <div className="line-clamp-3 h-[63px] break-words text-Gray_Orange Text-s-Regular Tablet:line-clamp-4 Tablet:h-[96px] Tablet:Text-m-Regular">
                {highlightedText(talk.reviewDTO.content, query)}
              </div>
              <div className="text-L_Gray Text-s-Regular Tablet:Text-m-Medium">
                {talk.reviewDTO.movienm} · {talk.reviewDTO.createdAt}
              </div>
            </Link>
          ))
        ) : (
          <SearchPlaceholder isAlone relatedKeywords={relatedKeywords} />
        )}
      </div>
    </div>
  );
}
