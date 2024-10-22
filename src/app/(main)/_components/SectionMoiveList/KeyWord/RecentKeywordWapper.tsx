import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import RecentKeyword from "./RecentKeyword";

export default async function RecentKeywordWapper() {
  await delay(150000000);
  const data = await movieAPIs.getMentionKeword();
  return <RecentKeyword data={data} />;
}
