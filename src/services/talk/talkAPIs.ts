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

    const data: Talk = await res.json();
    return data;
  },

  getMyTalk: async (movieId: number) => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/reviews/my?movieId=${movieId}`, {
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data: Talk = await res.json();
    return { data, res };
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

  removeTalk: async (talkId: number) => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/reviews/${talkId}`, {
      method: "DELETE",
      headers: {
        access: `${accessToken}`,
      },
    });

    const data = res.json();
    return { res, data };
  },

  like: async (talkId: number) => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/reviews/${talkId}/like`, {
      method: "POST",
      headers: {
        access: `${accessToken}`,
      },
    });

    const data = res.json();
    return { res, data };
  },

  dislike: async (talkId: number) => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/reviews/${talkId}/dislike`, {
      method: "POST",
      headers: {
        access: `${accessToken}`,
      },
    });

    const data = res.json();
    return { res, data };
  },
};
