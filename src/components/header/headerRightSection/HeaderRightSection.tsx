import { useQuery } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import ROUTES from "@/constants/routes";
import useIsInputFocused from "@/hooks/useIsInputFocused";
import useSearchMovies from "@/hooks/useSearchMovies";
import { movieAPIs } from "@/services/movie/movieAPIs";

import HeaderSearchInputSection from "./HeaderSearchInputSection";
import MobileHeaderRightSection from "./mobileHeaderRightSection/MobileHeaderRightSection";

interface HeaderRightSectionProps {
  hasScrolledPast: boolean;
  clickSearchIcon: boolean;
  setClickSearchIcon: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function HeaderRightSection({
  hasScrolledPast,
  clickSearchIcon,
  children,
  setClickSearchIcon,
}: HeaderRightSectionProps) {
  const pathname = usePathname();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isInputFocused, setIsInputFocused } = useIsInputFocused(inputRef);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");

  const [randomMovie, setRandomMovie] = useState("");

  const { data: movieTopTen } = useQuery<any>({
    queryKey: ["movie-top-ten"],
    queryFn: () => movieAPIs.getMovieTopTen(0),
  });

  useEffect(() => {
    if (movieTopTen) {
      const randomIndex = Math.floor(Math.random() * movieTopTen.length);
      setRandomMovie(movieTopTen[randomIndex].movienm);
    }
  }, [movieTopTen]);

  useSearchMovies(inputValue);

  useEffect(() => {
    if (isInputFocused) {
      inputRef.current?.focus();
    }
  }, [isInputFocused, hasScrolledPast]);

  useEffect(() => {
    if (!pathname.includes(ROUTES.SEARCH.default)) {
      setInputValue("");
    } else {
      if (searchQuery) setInputValue(searchQuery);
    }
  }, [pathname, searchQuery]);

  return (
    <section
      className={`${pathname === ROUTES.MAIN && "w-full"} flex h-10 items-center gap-4 Laptop:w-fit Laptop:gap-8`}
    >
      <HeaderSearchInputSection
        {...{
          hasScrolledPast,
          inputValue,
          setInputValue,
          isInputFocused,
          setIsInputFocused,
          inputRef,
          randomMovie,
        }}
      />

      <MobileHeaderRightSection
        {...{
          clickSearchIcon,
          setClickSearchIcon,
          inputValue,
          setInputValue,
          randomMovie,
        }}
      />

      {children}
    </section>
  );
}
