import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useGetSearchParams(params: string) {
  const [activeTab, setActiveTab] = useState(params);
  const searchParams = useSearchParams();

  const search = searchParams.get(params);

  useEffect(() => {
    setActiveTab(search ?? "");
  }, [search]);
  return { search, activeTab };
}
