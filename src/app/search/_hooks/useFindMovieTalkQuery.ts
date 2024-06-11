import { useQuery } from "@tanstack/react-query";

import { API_URL } from "@/constants/api_url";

export const findMovieTalk = async (title: string | null) => {
  if (!title) return;
  const res = await fetch(`${API_URL}/find/findReview?query=${title}`);
  const data: FindMovieTalkDTO[] = await res.json();
  return data;
};

export default function useFindMovieTalkQuery(title: string | null) {
  return useQuery({
    queryKey: ["findMovieTalk", title],
    queryFn: () => findMovieTalk(title),
  });
}
