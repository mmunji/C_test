import Link from "next/link";

import usePopularKeywordQuery from "@/app/search/_queries/usePopularKeywordQuery";
import ROUTES from "@/constants/routes";

export default function KeywordList() {
  const { data } = usePopularKeywordQuery();
  return (
    <div className="flex w-full flex-wrap justify-center gap-x-3 gap-y-2 Tablet:max-w-[541px] Tablet:gap-6">
      {data?.map((keyword) => (
        <Link
          href={{
            pathname: ROUTES.SEARCH.default,
            query: {
              query: keyword,
            },
          }}
          key={keyword}
          className="inner-gray-orange flex h-10 items-center rounded-[20px] px-4 py-1 text-Gray_Orange Text-s-Medium Tablet:px-6 Tablet:py-2 Tablet:Text-m-Medium"
        >
          {keyword}
        </Link>
      ))}
    </div>
  );
}
