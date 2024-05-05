import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";

import ROUTES from "@/constants/routes";

import { Search, WhiterSearch, WhiteSearch } from "../../../../public/icons";
import HeaderSearchDropdown from "./headerSearchInputSection/HeaderSearchDropdown";
import RenderSearchInput from "./headerSearchInputSection/RenderSearchInput";

interface HeaderSearchInputProps {
  hasScrolledPast: boolean;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  inputFocused: boolean;
  setInputFocused: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderSearchInputSection({
  hasScrolledPast,
  inputValue,
  setInputValue,
  inputFocused,
  setInputFocused,
}: HeaderSearchInputProps) {
  const pathname = usePathname();

  return (
    <div className="relative w-fit Laptop:w-[360px]">
      <div className="hidden Laptop:block">
        <RenderSearchInput
          {...{
            hasScrolledPast,
            inputFocused,
            inputValue,
            setInputFocused,
            setInputValue,
          }}
        />

        <Image
          src={
            !inputFocused
              ? pathname === ROUTES.DETAIL
                ? hasScrolledPast
                  ? Search
                  : WhiteSearch
                : Search
              : WhiterSearch
          }
          alt="검색"
          className="absolute left-[24px] top-[50%] translate-y-[-50%]"
        />
      </div>

      {inputFocused && <HeaderSearchDropdown inputValue={inputValue} />}
    </div>
  );
}
