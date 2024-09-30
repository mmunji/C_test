import { Suspense } from "react";

import SearchContainer from "@/app/search/_components/Container";
import { SearchSkeleton } from "@/app/search/_components/skeletons/Skeleton";
import Footer from "@/components/footer/Footer";

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  return (
    <div className="mt-3 Tablet:mt-4 Laptop:mt-8 Desktop:mt-16">
      <Suspense key={searchParams.query} fallback={<SearchSkeleton />}>
        <SearchContainer query={searchParams.query} />
      </Suspense>
      <Footer />
    </div>
  );
}
