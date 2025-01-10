"use server";

import { cookies } from "next/headers";

export default async function useMessage(type: "similar" | "watch") {
  const cookie = cookies();
  const token = cookie.get("accessToken")?.value || null;

  let title = "";
  let message = "";

  if (type == "similar") {
    title = token
      ? "나와 취향이 비슷한 사람들"
      : "다른 사람들은 이런 영화를 평가했어요";
    message = token
      ? "톡을 많이 작성할수록 내 취향에 비슷해져요."
      : "로그인하면 맞춤형으로 추천받을 수 있어요. ";
  } else if (type == "watch") {
    message = token
      ? "별을 눌러 평가해보세요 :)"
      : "로그인 하고 별을 눌러 평가해보세요 ";
  }
  return { title, message };
}
