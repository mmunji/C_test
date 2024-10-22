import { movieAPIs } from "@/services/movie/movieAPIs";

import RecentKeyword from "./RecentKeyword";

export default async function RecentKeywordWapper() {
  const data = await movieAPIs.getMentionKeword();
  if (!data || "state" in data) return null;
  return <RecentKeyword data={data} />;
}
