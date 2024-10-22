import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import SimilarTastesMovie from "./SimilarTastesMovie";

export default async function SimilarTastesMovieWapper() {
  await delay(50000000);
  const data = await movieAPIs.getPeopleReviewers();
  return <SimilarTastesMovie data={data} />;
}
