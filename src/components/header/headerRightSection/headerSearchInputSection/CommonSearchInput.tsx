import React, { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";

import usePressEnterSearch from "@/hooks/usePressEnterSearch";

interface CommonSearchInputProps {
  type?: "sm" | "lg";
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  isInputFocused: boolean;
  setIsInputFocused: Dispatch<SetStateAction<boolean>>;
  inputRef: RefObject<HTMLInputElement | null>;
}

export default function CommonSearchInput({
  inputValue,
  setInputValue,
  isInputFocused,
  setIsInputFocused,
  inputRef,
}: CommonSearchInputProps) {
  const { handleKeyPress } = usePressEnterSearch(
    setIsInputFocused,
    inputValue,
    inputRef,
  );

  return (
    <input
      type="search"
      ref={inputRef as RefObject<HTMLInputElement>}
      value={inputValue}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
      placeholder="‘파묘’ 궁금하지 않으세요?"
      onFocus={() => setIsInputFocused(true)}
      onBlur={() => {
        setTimeout(() => {
          setIsInputFocused(false);
        }, 100);
      }}
      onKeyDown={(e) => {
        handleKeyPress(e, inputValue);
      }}
      className={`flex h-10 w-full items-start border border-transparent py-2 pl-[64px] pr-[24px] font-Medium text-L_Gray outline-none placeholder:text-L_Gray hover:border hover:border-D2_Gray focus:placeholder:opacity-0 ${isInputFocused ? "rounded-t-[20px] bg-D2_Gray text-Silver" : "rounded-[20px] bg-[#2e2c2b]"}`}
    />
  );
}
