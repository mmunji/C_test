import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

import ROUTES from "@/constants/routes";

export default function usePressEnterSearch(
  setInputFocused: Dispatch<SetStateAction<boolean>>,
  setClickSearchIcon?: Dispatch<SetStateAction<boolean>>,
) {
  const router = useRouter();
  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputValue: string,
  ): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      router.push(`${ROUTES.SEARCH.getById(inputValue)}`);
      setInputFocused(false);

      if (setClickSearchIcon) setClickSearchIcon(false);
    }
  };

  return { handleKeyPress };
}
