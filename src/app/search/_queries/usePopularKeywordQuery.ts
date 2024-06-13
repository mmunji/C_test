import { useSuspenseQuery } from "@tanstack/react-query";

import { API_URL } from "@/constants/api_url";

const dummy: string[] = [
  "바보12",
  "바보123",
  "바보124qweeeeeeeeeeeeee",
  "바보126",
  "바보127",
  "바보127",
  "바보127",
  "바보127",
];

export const getPopularKeyword = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1800));
  return dummy.slice(0, 5);
  // const res = await fetch(`${API_URL}/find/PopularFind`);
  // const data: string[] = await res.json();
  // return data;
};

export default function usePopularKeywordQuery() {
  return useSuspenseQuery({
    queryKey: ["search", "popularKeywords"],
    queryFn: getPopularKeyword,
  });
}
