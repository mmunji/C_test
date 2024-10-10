import { API_URL } from "@/constants/api_url";

import { tokenManager } from "../auth/tokenManager";

export const talkAPIs = {
  getTalks: async (
    movieId: number,
    page: number,
    sort: "star" | "createdAt" = "createdAt",
  ) => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(
      `${API_URL}/reviews/${movieId}?page=${page}&sort=${sort}`,
      {
        headers: {
          "Content-Type": "application/json",
          access: `${accessToken}`,
        },
        cache: "no-store",
      },
    );

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

    const data = await res.json();
    return { data, res };
  },

  addTalks: async ({
    movieName,
    movieId,
    star,
    content,
    spoiler,
    genreList,
  }: {
    movieName: string;
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
        movieName,
        star,
        content,
        spoiler,
        genreList,
      }),
    });

    const data = await res.json();
    return { data, res };
  },

  removeTalk: async (talkId: number | undefined) => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/reviews/${talkId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
    });

    const data = res.json();
    return { res, data };
  },

  reportTalk: async ({
    talkId,
    category,
    content,
  }: {
    talkId?: number | null;
    category: string;
    content: string;
  }) => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/reports/${talkId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
      body: JSON.stringify({
        category: category,
        content: content,
      }),
    });

    const data = res.json();
    return { res, data };
  },

  editTalk: async (
    talkId: number | undefined,
    movieName: string | undefined,
    star: number | undefined,
    content: string | undefined,
    spoiler: boolean | undefined,
    genreList: number[],
  ) => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/reviews/${talkId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
      body: JSON.stringify({
        movieName: movieName,
        star: star,
        content: content,
        spoiler: spoiler,
        genreList: genreList,
      }),
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

    const data = await res.json();
    return { res, data };
  },

  getReplies: async (parentReviewId: number, page: number) => {
    const accessToken = tokenManager.getToken();

    const res = await fetch(
      `${API_URL}/reviews/${parentReviewId}/comments?page=${page}`,
      {
        method: "GET",
        headers: {
          access: `${accessToken}`,
        },
      },
    );

    const data: Talk = await res.json();
    return data;
  },

  addReply: async (parentReviewId: number, content: string) => {
    const accessToken = tokenManager.getToken();

    const res = await fetch(`${API_URL}/reviews/${parentReviewId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
      body: JSON.stringify({ content }),
    });

    const data = await res.json();
    return { data, res };
  },

  getMyStar: async (movieId: number) => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/reviews/star?movieId=${movieId}`, {
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    return { data, res };
  },
};
