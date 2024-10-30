import { useRouter } from "next/navigation";

export default function useHandleClickAuthButton() {
  const router = useRouter();

  const handleClickAuthButton = (type: "kakao" | "naver") => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("prev-page", window.location.href);
      if (type === "kakao")
        router.push(
          `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao?redirecturl=${process.env.NEXT_PUBLIC_CLIENT_URL}`,
        );
      else
        router.push(
          `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/naver?redirecturl=${process.env.NEXT_PUBLIC_CLIENT_URL}`,
        );
    }
  };

  return { handleClickAuthButton };
}
