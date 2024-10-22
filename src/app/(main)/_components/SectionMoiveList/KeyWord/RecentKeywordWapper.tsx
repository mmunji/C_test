import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import RecentKeyword from "./RecentKeyword";

export default async function RecentKeywordWapper() {
  const data = await movieAPIs.getMentionKeword();

  return <RecentKeyword data={data} />;
}
