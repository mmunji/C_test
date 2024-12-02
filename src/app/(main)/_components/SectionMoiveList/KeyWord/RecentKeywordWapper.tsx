import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import RecentKeyword from "./RecentKeyword";

export default async function RecentKeywordWapper() {
  const data = await movieAPIs.getMentionKeword();

  if ("state" in data) return null;
  return <RecentKeyword data={data} />;
}
