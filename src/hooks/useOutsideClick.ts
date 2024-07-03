import { useEffect, useRef } from "react";

export default function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const initialClickOutside = useRef<boolean>(false);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        initialClickOutside.current = true;
      } else {
        initialClickOutside.current = false;
      }
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        initialClickOutside.current &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        callback();
      }
      initialClickOutside.current = false;
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchstart", handleMouseDown);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchstart", handleMouseDown);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [callback]);

  return ref;
}
