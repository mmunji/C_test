import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import MoiveTopRank from "./MovieTopRank";

export default async function MovieTopWapper() {
  const data = await movieAPIs.getMovieTopTen(0);

  return <MoiveTopRank data={data} />;
}
