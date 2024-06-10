import { API_URL } from "@/constants/api_url";

export const keywordAPIs = {
  getKeyword: async (movieId: number) => {
    const res = await fetch(`${API_URL}/keywords/${movieId}`);
    const data: Keyword[] = await res.json();

    return data;
  },

  addKeyword: async (movieId: number, keyword: string) => {
    const res = await fetch(`${API_URL}/keywords/${movieId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer `,
      },
      body: JSON.stringify({
        keyword: keyword,
      }),
    });
    const data: Keyword = await res.json();

    return { data, res };
  },
};
