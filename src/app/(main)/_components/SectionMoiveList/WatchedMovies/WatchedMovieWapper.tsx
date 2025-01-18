"use server";

import dynamic from "next/dynamic";
import { cookies } from "next/headers";

import { movieAPIs } from "@/services/movie/movieAPIs";

import WatchedSkeleton from "../../Skeleton/WatchedMoive/WatchedSkeleton";

const WatchedMoive = dynamic(() => import("./WatchedMoive"), {
  ssr: false,
  loading: () => <WatchedSkeleton />,
});
export default async function WatchedMovieWapper() {
  const cookie = cookies();
  const token = cookie.get("accessToken")?.value || null;

  const data: WatchMovie[] = await movieAPIs.getWatchMovie(token);

  return <WatchedMoive data={data} />;
}
