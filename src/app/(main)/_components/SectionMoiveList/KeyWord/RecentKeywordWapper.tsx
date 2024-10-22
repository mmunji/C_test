import { movieAPIs } from "@/services/movie/movieAPIs";
import { delay } from "@/utils/fn";

import RecentKeyword from "./RecentKeyword";

export default async function RecentKeywordWapper() {
  const data: MentionKeword[] | boolean = await movieAPIs.getMentionKeword();
  if (typeof data == false) {
    return null;
  }
  return <RecentKeyword data={data} />;
}
