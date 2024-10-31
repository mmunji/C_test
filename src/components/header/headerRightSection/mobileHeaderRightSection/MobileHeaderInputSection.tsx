import Image from "next/image";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";

import usePressEnterSearch from "@/hooks/usePressEnterSearch";

import { Search } from "../../../../../public/icons";

interface MobileHeaderInputSectionProps {
  clickSearchIcon: boolean;
  setClickSearchIcon: Dispatch<SetStateAction<boolean>>;
  inputFocused: boolean;
  setInputFocused: Dispatch<SetStateAction<boolean>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  randomMovie: string;
}

export default function MobileHeaderInputSection({
  setClickSearchIcon,
  inputFocused,
  setInputFocused,
  inputValue,
  setInputValue,
  clickSearchIcon,
  randomMovie,
}: MobileHeaderInputSectionProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleKeyPress } = usePressEnterSearch(
    setInputFocused,
    inputValue,
    inputRef,
    setClickSearchIcon,
  );

  useEffect(() => {
    if (clickSearchIcon) inputRef.current?.focus();
  }, [clickSearchIcon]);

  return (
    <>
      <div className="relative z-10 w-full">
        <input
          ref={inputRef}
          type="search"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          placeholder={
            randomMovie === ""
              ? "어떤 영화가 궁금하신가요?"
              : `'${randomMovie}' 궁금하지 않으세요?`
          }
          onFocus={() => setInputFocused(true)}
          onBlur={() => {
            setTimeout(() => {
              setInputFocused(false);
            }, 150);
          }}
          onKeyDown={(e) => {
            handleKeyPress(e, inputValue);
          }}
          className={`h-10 w-full ${inputFocused && "placeholder:opacity-0"} border-1 rounded-[20px] border-[1px] border-transparent bg-D1_Gray pl-12 font-Medium text-Silver outline-none placeholder:text-L_Gray hover:border-D2_Gray `}
        />

        <Image
          src={Search}
          alt="검색"
          className="absolute left-4 top-[50%] translate-y-[-50%]"
        />
      </div>
      <p
        onClick={() => setClickSearchIcon(false)}
        className="z-10 flex-shrink-0 cursor-pointer p-2 text-sm font-Medium text-Gray_Orange Tablet:text-regular"
      >
        취소
      </p>
    </>
  );
}
