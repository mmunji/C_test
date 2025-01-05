import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

import ROUTES from "@/constants/routes";
import { searchAPIs } from "@/services/search/searchAPIs";
import useSearchMovieTitlesStore from "@/stores/useSearchMovieTitlesStore";

import { EnvironmentFire } from "../../../../../public/icons";

interface MobilHeaderSearchDropdownProps {
  inputValue: string;
  inputFocused: boolean;
  setInputValue: Dispatch<SetStateAction<string>>;
  setClickSearchIcon: Dispatch<SetStateAction<boolean>>;
}

export default function MobilHeaderSearchDropdown({
  inputValue,
  setInputValue,
  inputFocused,
  setClickSearchIcon,
}: MobilHeaderSearchDropdownProps) {
  const { movieTitles, popularMovieTitles } = useSearchMovieTitlesStore();
  const movies = inputValue.length === 0 ? popularMovieTitles : movieTitles;

  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <strong key={i} className="font-bold">
          {part}
        </strong>
      ) : (
        part
      ),
    );
  };

  return (
    <div
      className={`fixed left-0 top-0 min-h-[100vh] w-full bg-BG ${inputValue ? "pt-16 Tablet:pt-[72px]" : "pt-[68px] Tablet:pt-20"}`}
    >
      {inputFocused && !inputValue && (
        <div className="mb-2 flex gap-1 px-6 py-1">
          <Image
            unoptimized
            src={EnvironmentFire}
            alt="불"
            className="mx-[5px] my-[3px]"
          />
          <p className="font-Medium text-Primary">인기 검색어</p>
        </div>
      )}

      {inputFocused && (
        <ul className="flex flex-col gap-2">
          {movies?.map((title, i) => (
            <Link
              key={i}
              href={`${ROUTES.SEARCH.getById(title)}`}
              onClick={() => {
                setClickSearchIcon(false);
                setInputValue(title);
                searchAPIs.saveSearchMovies(title);
              }}
              className={`max-w-[calc(100%-32px)] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap py-1 hover:underline ${inputValue ? "pl-8" : "pl-[52px]"} font-Regular text-Silver Tablet:max-w-[calc(100%-48px)]`}
            >
              {highlightText(title, inputValue)}
            </Link>
          ))}
          {inputValue && movieTitles.length === 0 && (
            <p
              className={`max-w-[calc(100%-32px)] py-1 pl-8 font-Regular text-Silver Tablet:max-w-[calc(100%-48px)]`}
            >
              연관 검색어가 없어요.
            </p>
          )}
        </ul>
      )}
    </div>
  );
}
