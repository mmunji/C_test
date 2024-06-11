import { useQuery } from "@tanstack/react-query";

import { API_URL } from "@/constants/api_url";

export const findMovie = async (title: string | null) => {
  if (!title) return;
  const res = await fetch(`${API_URL}/find/findMovie?query=${title}`);
  const data: FindMovieDTO[] = await res.json();
  return data;
};

export default function useFindMovieQuery(title: string | null) {
  return useQuery({
    queryKey: ["findMovie", title],
    queryFn: () => findMovie(title),
  });
}
