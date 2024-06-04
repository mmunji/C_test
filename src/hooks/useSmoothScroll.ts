import { useCallback } from "react";

import useDevice from "./useDevice";

export default function useSmoothScroll() {
  const { device } = useDevice();
  const marginTop = device === "mobile" || device === "tablet" ? 64 : 80;

  const smoothScroll = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - marginTop,
          behavior: "smooth",
        });
      }
    },
    [marginTop],
  );

  return { smoothScroll };
}
