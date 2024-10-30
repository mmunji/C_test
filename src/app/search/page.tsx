import { Metadata } from "next";
import { Suspense } from "react";

import SearchContainer from "@/app/search/_components/Container";
import { SearchSkeleton } from "@/app/search/_components/skeletons/Skeleton";
import Footer from "@/components/footer/Footer";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { query: string };
}): Promise<Metadata> {
  return {
    title: `${searchParams.query} - 씨네톡 검색`,
    description: `${searchParams.query} 영화 리뷰 검색 결과`,
    openGraph: {
      images: [
        {
          url: "/images/og/Opengraph__Image.jpg",
        },
      ],
    },
    twitter: {
      images: [
        {
          url: "/images/og/Opengraph__Image.jpg",
        },
      ],
    },
  };
}

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
