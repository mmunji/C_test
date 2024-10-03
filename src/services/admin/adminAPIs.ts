import { API_URL } from "@/constants/api_url";

import { tokenManager } from "../auth/tokenManager";

export const adminAPIs = {
  FeedbackList: async () => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/afeedback/feedBackList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
    });
    const data = await res.json();
    return data;
  },
  ReportsList: async () => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/areports/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
    });
    const data = await res.json();
    return data;
  },
  UserCount: async () => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/amain/userCountList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
    });
    const data: Users = await res.json();
    return data;
  },
  ReviewCount: async () => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/amain/reviewCountList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
    });
    const data: Users = await res.json();
    return data;
  },
  KeywordwCount: async () => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(`${API_URL}/amain/keywordCountList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access: `${accessToken}`,
      },
    });
    const data: Users = await res.json();
    return data;
  },
  AdamageReport: async (id: number, category: string, date: string) => {
    const accessToken = tokenManager.getToken();
    const res = await fetch(
      `${API_URL}/adamage/${id}?category=${category}&date=${date}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access: `${accessToken}`,
        },
      },
    );
    const data = await res.json();
    return data;
  },
};
