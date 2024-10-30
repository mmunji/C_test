import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

import ROUTES from "@/constants/routes";
import useGetPopularSearchList from "@/hooks/useGetPopularSearchList";
import { searchAPIs } from "@/services/search/searchAPIs";
import useSearchMovieTitlesStore from "@/stores/useSearchMovieTitlesStore";

import { EnvironmentFire } from "../../../../../public/icons";

interface HeaderSearchDropdownProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

export default function HeaderSearchDropdown({
  inputValue,
  setInputValue,
}: HeaderSearchDropdownProps) {
  const router = useRouter();
  const { movieTitles } = useSearchMovieTitlesStore();
  useGetPopularSearchList(inputValue);

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
    <ul className="absolute top-10 w-full rounded-b-[20px] bg-D2_Gray pb-2">
      {!inputValue && (
        <div className="flex gap-1 py-1 pl-9 pr-5">
          <Image src={EnvironmentFire} alt="불" className="mx-[5px] my-[3px]" />
          <p className="font-Medium text-Primary">인기 검색어</p>
        </div>
      )}
      <div className="flex flex-col">
        {movieTitles?.map((title, i) => (
          <div
            key={i}
            // href={`${ROUTES.SEARCH.getById(title)}`}
            onClick={() => {
              setInputValue(title);
              searchAPIs.saveSearchMovies(title);
              router.push(ROUTES.SEARCH.getById(title));
            }}
            className="w-full max-w-[calc(100%-32px)] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap py-1 pl-[64px] font-Regular text-Silver hover:underline"
          >
            {highlightText(title, inputValue)}
          </div>
        ))}
        {inputValue && movieTitles.length === 0 && (
          <p className="w-full max-w-[calc(100%-32px)] py-1 pl-[64px] font-Regular text-Silver">
            연관 검색어가 없어요.
          </p>
        )}
      </div>
    </ul>
  );
}
