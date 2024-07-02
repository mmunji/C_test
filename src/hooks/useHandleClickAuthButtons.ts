import { useRouter } from "next/navigation";

import { API_URL } from "@/constants/api_url";

export default function useHandleClickAuthButton() {
  const router = useRouter();

  const handleClickAuthButton = (type: "kakao" | "naver") => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("prev-page", window.location.href);
      if (type === "kakao")
        router.push(`${API_URL}/oauth2/authorization/kakao`);
      else router.push(`${API_URL}/oauth2/authorization/naver`);
    }
  };

  return { handleClickAuthButton };
}
