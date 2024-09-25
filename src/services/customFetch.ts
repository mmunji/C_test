import { cookies } from "next/headers";

import { tokenKey } from "@/constants/token";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

class CustomFetch {
  async fetch<T>(
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
    options?: RequestInit | undefined,
  ) {
    const fetchOptions: RequestInit = {
      ...options,
    };
    try {
      const res = await fetch(`${baseUrl}${url}`, {
        method,
        ...fetchOptions,
      });
      return res.json() as T;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async authFetch<T>(
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
    options?: RequestInit | undefined,
    isGetUser: boolean = false,
  ): Promise<T | (typeof isGetUser extends true ? T | null : T)> {
    const accessToken = cookies().get(tokenKey)?.value;
    if (!accessToken) {
      if (!isGetUser) throw new Error("unauthorized error");
      return null as any;
    }
    const fetchOptions: RequestInit = {
      ...options,
      method,
      headers: {
        access: accessToken,
        ...options?.headers,
      },
    };

    try {
      const res = await fetch(`${baseUrl}${url}`, fetchOptions);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message);
      return data as T;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  }
}

const customFetchInstance = new CustomFetch();
export default customFetchInstance;
