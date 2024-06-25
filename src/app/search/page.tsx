import { Suspense } from "react";

import SearchListContainer from "@/app/search/_components/SearchListContainer";
import { SearchListContainerSkeleton } from "@/app/search/_components/skeletons/Skeletons";
import Footer from "@/components/footer/Footer";

export default function Page({
  searchParams,
}: {
  searchParams: { [key in "query"]: string };
}) {
  const query = searchParams?.query ?? "";
  return (
    <div className="mt-3 Tablet:mt-4 Laptop:mt-8 Desktop:mt-16">
      <Suspense key={query} fallback={<SearchListContainerSkeleton />}>
        <SearchListContainer query={query} />
      </Suspense>
      <Footer />
    </div>
  );
}
