import { API_URL } from "@/constants/api_url";

import { tokenManager } from "../auth/tokenManager";

export const talkAPIs = {
  getTalks: async (movieId: number, page: number) => {
    const res = await fetch(`${API_URL}/reviews/${movieId}?page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    return data;
  },

  addTalks: async ({
    movieId,
    star,
    content,
    spoiler,
    genreList,
  }: {
    movieId: number;
    star: number;
    content: string;
    spoiler: boolean;
    genreList: number[];
  }) => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/reviews/${movieId}/save`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
      body: JSON.stringify({
        star,
        content,
        spoiler,
        genreList,
      }),
    });

    const data = await res.json();
    return { data, res };
  },
};
