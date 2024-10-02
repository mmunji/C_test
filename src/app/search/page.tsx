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
    title: `${searchParams.query} - 씨네톡`,
    description: `${searchParams.query} 영화 리뷰 검색 결과`,
    openGraph: {
      title: "씨네톡 - 키워드 하나로 완성되는 영화 리뷰 탐색",
      description: `${searchParams.query} 영화 리뷰 검색 결과`,
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/search?query=${searchParams}`,
      siteName: "씨네톡",
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
