import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import MoiveTopRank from "./MovieTopRank";

export default async function MovieTopWapper() {
  await delay(5000000);
  const data = await movieAPIs.getMovieTopTen(0);

  return <MoiveTopRank data={data} />;
}
