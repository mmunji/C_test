import dynamic from "next/dynamic";

import { movieAPIs } from "@/services/movie/movieAPIs";

import KeywordSkeleton from "../../MainSkeleton/Keyword/KeywordSkeleton";

const RecentKeyword = dynamic(() => import("./RecentKeyword"), {
  ssr: false,
  loading: () => <KeywordSkeleton />,
});

export default async function RecentKeywordWapper() {
  const data = await movieAPIs.getMentionKeword();

  if ("state" in data) return null;
  return <RecentKeyword data={data} />;
}
