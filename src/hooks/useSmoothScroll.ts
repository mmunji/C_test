import { useCallback } from "react";

export default function useSmoothScroll() {
  const smoothScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  return { smoothScroll };
}
