import clsx from "clsx";

import SearchListHeader from "@/app/search/_components/list/Header";
import ReviewItem from "@/app/search/_components/list/ReviewItem";
import SearchPlaceholder from "@/app/search/_components/placeholders/SearchPlaceholder";
import useSlicedDataByDevice from "@/app/search/_hooks/useSlicedDataByDevice";
import useSearchTabStore from "@/stores/useTabStore";

interface SearchReviewListProps {
  reviews: ReviewResult[];
  relatedKeywords: string[];
}

export default function SearchReviewList({
  reviews,
  relatedKeywords,
}: SearchReviewListProps) {
  const { activeSearchTab } = useSearchTabStore();
  const slicedData = useSlicedDataByDevice<ReviewResult>({
    category: "talk",
    data: reviews,
  });
  const data = activeSearchTab === "전체" ? slicedData : reviews;

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
          data.map((review) => (
            <ReviewItem key={review.reviewDTO.id} review={review} />
          ))
        ) : (
          <SearchPlaceholder isAlone relatedKeywords={relatedKeywords} />
        )}
      </div>
    </div>
  );
}
