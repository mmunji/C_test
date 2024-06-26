import { API_URL } from "@/constants/api_url";

export const authAPIS = {
  authBy: async (authToken: string) => {
    const res = await fetch(`${API_URL}/AuthBy?authToken=${authToken}`);

    const data = await res.json();
    return { data, res };
  },

  signUp: async (nickname: string, gender: string, birthday: string) => {
    const res = await fetch(`${API_URL}/my/nickNameMerge`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname: nickname,
        gender: gender,
        birthday: birthday,
      }),
    });

    const data = await res.json();
    return { data, res };
  },
};
