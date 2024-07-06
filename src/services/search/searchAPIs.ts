import { API_URL } from "@/constants/api_url";

export const searchAPIs = {
  searchMovies: async (movieTitle: string) => {
    const res = await fetch(`${API_URL}/find/findMovie?query=${movieTitle}`);

    const data = await res.json();
    return { res, data };
  },

  saveSearchMovies: async (movieTitle: string) => {
    const res = await fetch(`${API_URL}/find/findSave?findword=${movieTitle}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return { res, data };
  },

  getPopularFind: async () => {
    const res = await fetch(`${API_URL}/find/PopularFind`);

    const data = await res.json();
    return { res, data };
  },
};
