import { useRouter } from "next/navigation";
import { Dispatch, RefObject, SetStateAction } from "react";

import ROUTES from "@/constants/routes";
import { searchAPIs } from "@/services/search/searchAPIs";

export default function usePressEnterSearch(
  setInputFocused: Dispatch<SetStateAction<boolean>>,
  searchValue: string,
  inputRef: RefObject<HTMLInputElement | null>,
  setClickSearchIcon?: Dispatch<SetStateAction<boolean>>,
) {
  const router = useRouter();

  const handleKeyPress = async (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputValue: string,
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (e.nativeEvent.isComposing || !inputValue.trim()) return;
      inputRef.current?.blur();
      router.push(`${ROUTES.SEARCH.getById(inputValue)}`);
      setInputFocused(false);
      if (setClickSearchIcon) setClickSearchIcon(false);
      await searchAPIs.saveSearchMovies(searchValue);
    }
  };

  return { handleKeyPress };
}
