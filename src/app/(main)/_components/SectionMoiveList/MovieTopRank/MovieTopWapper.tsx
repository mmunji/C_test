import dynamic from "next/dynamic";

import { movieAPIs } from "@/services/movie/movieAPIs";

import MovieTopSkeleton from "../../Skeleton/MovieTop/MovieTopSkeleton";

const MovieTopRank = dynamic(() => import("./MovieTopRank"), {
  ssr: false,
  loading: () => <MovieTopSkeleton />,
});
export default async function MovieTopWapper() {
  const data = await movieAPIs.getMovieTopTen(0);

  return <MovieTopRank data={data} />;
}
