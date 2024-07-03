import { RefObject, useEffect, useState } from "react";

export default function useIsInputFocused(
  inputRef: RefObject<HTMLInputElement>,
) {
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const handleFocus = () => setIsInputFocused(true);
    const handleBlur = () => setIsInputFocused(false);

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

  return { isInputFocused, setIsInputFocused };
}
