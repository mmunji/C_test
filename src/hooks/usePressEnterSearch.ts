import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

import ROUTES from "@/constants/routes";
import { searchAPIs } from "@/services/search/searchAPIs";

export default function usePressEnterSearch(
  setInputFocused: Dispatch<SetStateAction<boolean>>,
  searchValue: string,
  setClickSearchIcon?: Dispatch<SetStateAction<boolean>>,
) {
  const router = useRouter();

  const handleKeyPress = async (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputValue: string,
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      router.push(`${ROUTES.SEARCH.getById(inputValue)}`);
      setInputFocused(false);
      if (setClickSearchIcon) setClickSearchIcon(false);
      await searchAPIs.saveSearchMovies(searchValue);
    }
  };

  return { handleKeyPress };
}
