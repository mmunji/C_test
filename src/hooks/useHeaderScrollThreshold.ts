import { useEffect, useState } from "react";

export default function useHeaderScrollThreshold() {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const initialScrollPosition = window.scrollY;
    if (initialScrollPosition > 816) {
      setHasScrolledPast(true);
    }

    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 816) {
        setHasScrolledPast(true);
      } else if (position < 816 && hasScrolledPast) {
        setHasScrolledPast(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledPast]);

  return { hasScrolledPast };
}
