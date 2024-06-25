import { API_URL } from "@/constants/api_url";

export const authAPIS = {
  authBy: async (authToken: string) => {
    const res = await fetch(`${API_URL}/AuthBy?authToken=${authToken}`);

    const data = await res.json();
    return { data, res };
  },
};
