import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

import ROUTES from "@/constants/routes";

import { EnvironmentFire } from "../../../../../public/icons";

interface HeaderSearchDropdownProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  movieTitles: string[] | undefined;
}

export default function HeaderSearchDropdown({
  inputValue,
  movieTitles,
  setInputValue,
}: HeaderSearchDropdownProps) {
  return (
    <ul className="absolute top-10 w-full rounded-b-[20px] bg-D2_Gray pb-3">
      {!inputValue && (
        <div className="flex gap-1 py-1 pl-8 pr-5">
          <Image src={EnvironmentFire} alt="불" className="mx-[5px] my-[3px]" />
          <p className="font-Medium text-Primary">인기 검색어</p>
        </div>
      )}
      <div className="flex flex-col">
        {movieTitles?.map((title, i) => (
          <Link
            key={i}
            href={`${ROUTES.SEARCH.getById(title)}`}
            onClick={() => setInputValue(title)}
            className="w-full max-w-[calc(100%-32px)] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap py-1 pl-[60px] font-Regular text-Silver hover:underline"
          >
            {title}
          </Link>
        ))}
      </div>
    </ul>
  );
}
