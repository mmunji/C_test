"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { tokenKey } from "@/constants/token";
import customFetchInstance from "@/services/customFetch";

export const logout = async () => {
  cookies().delete(tokenKey);
  redirect("/");
};

export const changeUserInfo = async (
  value: string,
  type: "gender" | "nickname" | "birthday",
) => {
  const data = await customFetchInstance.authFetch<{ state: boolean }>(
    `/my/userInfoMerge/${type}?value=${value}`,
    "PATCH",
  );
  if (data?.state) revalidateTag("user");
  return data;
};

export const verifyNickname = async (nickname: string) => {
  const data = await customFetchInstance.authFetch<boolean>(
    `/my/NicknameCheck?nickname=${nickname}`,
  );
  return data;
};

export const deleteBookmark = async (list: number[]) => {
  const queryString = list.map((id) => `BookmarkList=${id}`).join("&");
  const data = await customFetchInstance.authFetch<{ state: boolean }>(
    `/my/BookmarkDelete?${queryString}`,
    "DELETE",
  );
  if (data?.state) revalidateTag("my");
  return data?.state;
};

export const deleteAccount = async () => {
  const data = await customFetchInstance.authFetch<{ state: boolean }>(
    `/my/UserDelete`,
    "DELETE",
  );
  return data?.state;
};

export const updateBadge = async (list: number[]) => {
  const queryString = list.map((id) => `BadgeList=${id}`).join("&");
  const data = await customFetchInstance.authFetch<{ state: boolean }>(
    queryString
      ? `/my/BadgeUseUpdate?${queryString || ""}`
      : `/my/BadgeUseUpdate?BadgeList`,
    "PATCH",
  );
  if (data?.state) revalidateTag("badges");
  return data?.state;
};

export const updateProfileImage = async (formData: FormData) => {
  const data = await customFetchInstance.authFetch<{
    state: boolean;
  }>(`/my/UserProfileChange`, "PATCH", { body: formData });
  if (data?.state) revalidateTag("user");
  return data;
};

export const deleteReview = async (reviewId: number) => {
  const data = await customFetchInstance.authFetch<{ state: boolean }>(
    `/reviews/${reviewId}`,
    "DELETE",
  );
  if (data.state) revalidateTag("my");
  return data;
};
