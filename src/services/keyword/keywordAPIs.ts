import { API_URL } from "@/constants/api_url";

import { tokenManager } from "../auth/tokenManager";

export const keywordAPIs = {
  getKeyword: async (movieId: number) => {
    const res = await fetch(`${API_URL}/keywords/${movieId}`, {
      cache: "no-store",
    });
    const data: Keyword[] = await res.json();

    return data;
  },

  getLatestKeyword: async (movieId: number) => {
    const res = await fetch(`${API_URL}/keywords/latest/${movieId}`, {
      cache: "no-store",
    });
    const data: Keyword[] = await res.json();

    return data;
  },

  addKeyword: async (movieId: number, keyword: string) => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/keywords/${movieId}/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
      body: JSON.stringify({
        keyword: keyword,
      }),
    });
    const data: Keyword | ErrorResponse = await res.json();

    return { data, res };
  },
};
