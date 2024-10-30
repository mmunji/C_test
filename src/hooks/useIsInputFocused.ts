import { usePathname } from "next/navigation";
import { RefObject, useEffect, useState } from "react";

export default function useIsInputFocused(
  inputRef: RefObject<HTMLInputElement>,
) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleFocus = () => setIsInputFocused(true);
    const handleBlur = () => {
      setTimeout(() => setIsInputFocused(false), 100);
    };

    const inputElement = inputRef.current;

    if (inputElement) {
      inputElement.addEventListener("focus", handleFocus);
      inputElement.addEventListener("blur", handleBlur);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("focus", handleFocus);
        inputElement.removeEventListener("blur", handleBlur);
      }
    };
  }, [inputRef]);

  useEffect(() => {
    inputRef.current?.blur();
    setIsInputFocused(false);
  }, [inputRef, pathname]);

  return { isInputFocused, setIsInputFocused };
}
