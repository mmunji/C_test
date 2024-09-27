import { useCallback, useState } from "react";

export default function useModal() {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = useCallback(() => setIsChecked((prev) => !prev), []);

  return {
    isChecked,
    toggleCheckbox,
  };
}
