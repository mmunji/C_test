import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

import ROUTES from "@/constants/routes";

import { Search, WhiteSearch } from "../../../../public/icons";
import HeaderSearchDropdown from "./HeaderSearchDropdown";

interface HeaderSearchInputProps {
  hasScrolledPast: boolean;
}

export default function HeaderSearchInput({
  hasScrolledPast,
}: HeaderSearchInputProps) {
  const pathname = usePathname();
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative w-[360px]">
      {pathname === ROUTES.DETAIL ? (
        hasScrolledPast ? (
          <input
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            placeholder="‘파묘’ 궁금하지 않으세요?"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            className={`flex h-10 w-full items-start border-D2_Gray bg-[#2e2c2b] pl-[64px] pr-[24px] font-Medium text-L_Gray outline-none placeholder:text-L_Gray hover:border focus:placeholder:opacity-0 ${inputFocused ? "rounded-t-[20px] bg-D2_Gray" : "rounded-[20px]"}`}
          />
        ) : (
          <input
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            placeholder="‘파묘’ 궁금하지 않으세요?"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            className={`flex h-10 w-full items-start bg-transparent pl-[64px] pr-[24px] font-Medium text-[rgba(255,255,255,0.6)] outline-none placeholder:text-[rgba(255,255,255,0.6)] hover:border-Silver focus:placeholder:opacity-0 ${inputFocused ? "rounded-t-[20px] bg-D2_Gray" : "rounded-[20px] border border-[rgba(255,255,255,0.6)]"}`}
          />
        )
      ) : (
        <input
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          placeholder="‘파묘’ 궁금하지 않으세요?"
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          className={`flex h-10 w-full items-start border-D2_Gray bg-[#2e2c2b] pl-[64px] pr-[24px] font-Medium text-L_Gray outline-none placeholder:text-L_Gray hover:border focus:placeholder:opacity-0 ${inputFocused ? "rounded-t-[20px] bg-D2_Gray" : "rounded-[20px]"}`}
        />
      )}
      <Image
        src={
          pathname === ROUTES.DETAIL
            ? hasScrolledPast
              ? Search
              : WhiteSearch
            : Search
        }
        alt=""
        className="absolute left-[24px] top-[50%] translate-y-[-50%]"
      />
      {inputFocused && <HeaderSearchDropdown inputValue={inputValue} />}
    </div>
  );
}
