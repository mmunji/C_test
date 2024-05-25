import { useEffect, useState } from "react";

import useDevice from "./useDevice";

export default function useHeaderScrollThreshold() {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  const { device } = useDevice();

  const breakPointsMap: { [key: string]: number } = {
    mobile: 209,
    tablet: 252,
    laptop: 282,
    pc: 356,
  };

  const breakPoints = breakPointsMap[device];

  useEffect(() => {
    const initialScrollPosition = window.scrollY;
    if (initialScrollPosition > breakPoints) {
      setHasScrolledPast(true);
    }

    const handleScroll = () => {
      const position = window.scrollY;
      if (position > breakPoints) {
        setHasScrolledPast(true);
      } else if (position < breakPoints && hasScrolledPast) {
        setHasScrolledPast(false);
      }
    };

    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [breakPoints, hasScrolledPast]);

  return { hasScrolledPast };
}
