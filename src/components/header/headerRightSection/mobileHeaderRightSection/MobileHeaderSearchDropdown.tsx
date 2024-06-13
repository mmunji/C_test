import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

import { API_URL } from "@/constants/api_url";
import ROUTES from "@/constants/routes";

import { EnvironmentFire } from "../../../../../public/icons";

const findMovieTitle = async (title: string) => {
  const res = await fetch(`${API_URL}/find/findMovie?query=${title}`);
  const data: SearchResultDTO[] = await res.json();
  return data;
};

const useFindMovieTitleQuery = (title: string) => {
  return useQuery({
    queryKey: ["findMovieTitle", title],
    queryFn: () => findMovieTitle(title),
  });
};

interface MobilHeaderSearchDropdownProps {
  inputValue: string;
  inputFocused: boolean;
  setClickSearchIcon: Dispatch<SetStateAction<boolean>>;
}

export default function MobilHeaderSearchDropdown({
  inputValue,
  inputFocused,
  setClickSearchIcon,
}: MobilHeaderSearchDropdownProps) {
  const { data } = useFindMovieTitleQuery(inputValue);
  return (
    <div
      className={`fixed left-0 top-0 min-h-[100vh] w-full bg-BG ${inputValue ? "pt-16 Tablet:pt-[72px]" : "pt-[68px] Tablet:pt-20"}`}
    >
      {data?.length ? (
        <ul className="flex flex-col gap-2">
          {data?.map((movie) => (
            <li onClick={() => setClickSearchIcon(false)} key={movie.title}>
              <Link
                className={`flex w-full max-w-[calc(100%-32px)] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap py-1 hover:underline ${inputValue ? "pl-8" : "pl-[52px]"} font-Regular text-Silver Tablet:max-w-[calc(100%-48px)]`}
                href={ROUTES.SEARCH.getById(movie.title)}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
