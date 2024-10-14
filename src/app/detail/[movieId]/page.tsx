import { Metadata } from "next";
import React, { Suspense } from "react";

import { movieAPIs } from "@/services/movie/movieAPIs";

import DetailPage from "../_components/DetailPage";
import DetailPageSkeleton from "../_components/skeleton/DetailPageSkeleton";

const MAX_LENGTH = 60;
export async function generateMetadata({
  params,
}: {
  params: { movieId: string };
}): Promise<Metadata> {
  const movie = await movieAPIs.getMovieDetail(+params.movieId);
  return {
    title: `${movie.title} - 씨네톡`,
    description:
      movie.overview.length > MAX_LENGTH
        ? movie.overview.slice(0, MAX_LENGTH) + "..."
        : movie.overview,
    openGraph: {
      images: [
        {
          url: movie.posterImg,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: movie.posterImg,
        },
      ],
    },
  };
}

function page({ params }: { params: { movieId: string } }) {
  return (
    <Suspense fallback={<DetailPageSkeleton />}>
      <DetailPage params={params} />
    </Suspense>
  );
}

export default page;
