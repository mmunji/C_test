import { usePathname } from "next/navigation";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

import ROUTES from "@/constants/routes";

import CommonSearchInput from "./CommonSearchInput";

interface RenderSearchInputProps {
  hasScrolledPast: boolean;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  setInputFocused: Dispatch<SetStateAction<boolean>>;
  inputFocused: boolean;
}

function RenderSearchInput({
  hasScrolledPast,
  inputValue,
  setInputFocused,
  setInputValue,
  inputFocused,
}: RenderSearchInputProps) {
  const pathname = usePathname();

  return (
    <>
      {pathname.includes(ROUTES.DETAIL) ? (
        hasScrolledPast ? (
          <CommonSearchInput
            {...{
              inputValue,
              setInputValue,
              inputFocused,
              setInputFocused,
            }}
          />
        ) : (
          <input
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            placeholder="‘파묘’ 궁금하지 않으세요?"
            onFocus={() => setInputFocused(true)}
            onBlur={() => {
              setTimeout(() => {
                setInputFocused(false);
              }, 100);
            }}
            className={`flex h-10 w-full items-start py-2 pl-[64px] pr-[24px] font-Medium text-[rgba(255,255,255,0.6)] outline-none placeholder:text-[rgba(255,255,255,0.6)] hover:border-Silver focus:placeholder:opacity-0 ${inputFocused ? "rounded-t-[20px] bg-D2_Gray text-Silver" : "rounded-[20px] border border-[rgba(255,255,255,0.6)] bg-transparent"}`}
          />
        )
      ) : (
        <CommonSearchInput
          {...{
            type: "lg",
            inputValue,
            setInputValue,
            inputFocused,
            setInputFocused,
          }}
        />
      )}
    </>
  );
}

export default RenderSearchInput;
