import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface CommonSearchInputProps {
  type?: "sm" | "lg";
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  inputFocused: boolean;
  setInputFocused: Dispatch<SetStateAction<boolean>>;
}

export default function CommonSearchInput({
  inputValue,
  setInputValue,
  inputFocused,
  setInputFocused,
}: CommonSearchInputProps) {
  return (
    <input
      value={inputValue}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
      placeholder="‘파묘’ 궁금하지 않으세요?"
      onFocus={() => setInputFocused(true)}
      onBlur={() => setInputFocused(false)}
      className={`flex h-10 w-full items-start border border-transparent pl-[64px] pr-[24px] font-Medium text-L_Gray outline-none placeholder:text-L_Gray hover:border hover:border-D2_Gray focus:placeholder:opacity-0 ${inputFocused ? "rounded-t-[20px] bg-D2_Gray text-Silver" : "rounded-[20px] bg-[#2e2c2b]"}`}
    />
  );
}
