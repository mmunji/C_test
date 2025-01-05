import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { Dispatch, RefObject, SetStateAction } from "react";

import ROUTES from "@/constants/routes";

import { SearchWhite } from "../../../../public/icons";
import { SearchWhiter } from "../../../../public/icons";
import { Search } from "../../../../public/icons";
import HeaderSearchDropdown from "./headerSearchInputSection/HeaderSearchDropdown";
import RenderSearchInput from "./headerSearchInputSection/RenderSearchInput";

interface HeaderSearchInputProps {
  hasScrolledPast: boolean;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  isInputFocused: boolean;
  setIsInputFocused: Dispatch<SetStateAction<boolean>>;
  inputRef: RefObject<HTMLInputElement | null>;
  randomMovie: string;
}

export default function HeaderSearchInputSection({
  hasScrolledPast,
  inputValue,
  setInputValue,
  isInputFocused,
  setIsInputFocused,
  inputRef,
  randomMovie,
}: HeaderSearchInputProps) {
  const pathname = usePathname();

  return (
    <div className="relative w-fit Laptop:w-[360px]">
      <div className="hidden Laptop:block">
        <RenderSearchInput
          {...{
            hasScrolledPast,
            isInputFocused,
            inputValue,
            setIsInputFocused,
            setInputValue,
            inputRef,
            randomMovie,
          }}
        />

        <Image
          unoptimized
          src={
            !isInputFocused
              ? pathname.includes(ROUTES.DETAIL)
                ? hasScrolledPast
                  ? Search
                  : SearchWhite
                : Search
              : SearchWhiter
          }
          alt="검색"
          className="absolute left-[24px] top-[50%] translate-y-[-50%]"
        />
      </div>

      {isInputFocused && (
        <HeaderSearchDropdown {...{ inputValue, setInputValue }} />
      )}
    </div>
  );
}
