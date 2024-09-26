import { useSearchParams } from "next/navigation";

export default function useQueryString() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const query = searchParams.get("query");
  const filter = searchParams.get("sort");

  return { tab, query, filter };
}
