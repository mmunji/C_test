import { API_URL } from "@/constants/api_url";

export const talkAPIs = {
  getTalks: async (movieId: number, page: number) => {
    const res = await fetch(`${API_URL}/reviews/${movieId}?page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data: Talk = await res.json();
    return data;
  },

  addTalks: async ({
    movieId,
    star,
    content,
    spoiler,
  }: {
    movieId: number;
    star: number;
    content: string;
    spoiler: boolean;
  }) => {
    const res = await fetch(`${API_URL}/reviews/${movieId}/save`, {
      method: "POST",
      cache: "no-store",
      body: JSON.stringify({
        star,
        content,
        spoiler,
      }),
    });

    const data = await res.json();
    return { data, res };
  },
};
