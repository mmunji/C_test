"use server";

import dynamic from "next/dynamic";
import { cookies } from "next/headers";

import { movieAPIs } from "@/services/movie/movieAPIs";

import SimilarTasteSkleton from "../../Skeleton/SimilarTaste/SimilarTasteSkleton";

const SimilarTastesMovie = dynamic(() => import("./SimilarTastesMovie"), {
  ssr: false,
  loading: () => <SimilarTasteSkleton />,
});

export default async function SimilarTastesMovieWapper() {
  const cookie = cookies();
  const token = cookie.get("accessToken")?.value || null;
  const data: MovieReviewRecommed[] = await movieAPIs.getPeopleReviewers(token);
  return <SimilarTastesMovie reviewUsers={data} />;
}
