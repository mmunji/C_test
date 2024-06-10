import { API_URL } from "@/constants/api_url";

export const talkAPIs = {
  getTalks: async (movieId: number) => {
    const res = await fetch(`${API_URL}/reviews/${movieId}?page=0`, {
      cache: "no-store",
    });

    console.log("res:", res);

    const data = await res.json();
    return data;
  },
};
