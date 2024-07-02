import { API_URL } from "@/constants/api_url";

export const searchAPIs = {
  searchMovies: async (movieTitle: string) => {
    const res = await fetch(`${API_URL}/find/findMovie?query=${movieTitle}`);

    const data = await res.json();
    return { res, data };
  },
};
