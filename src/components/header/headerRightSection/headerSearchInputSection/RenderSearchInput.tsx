import { usePathname } from "next/navigation";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

import ROUTES from "@/constants/routes";

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
            className={`flex h-10 w-full items-start border-D2_Gray pl-[64px] pr-[24px] font-Medium text-L_Gray outline-none placeholder:text-L_Gray hover:border focus:placeholder:opacity-0 ${inputFocused ? "rounded-t-[20px] bg-D2_Gray text-Silver" : "rounded-[20px] bg-[#2e2c2b]"}`}
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
            className={`flex h-10 w-full items-start pl-[64px] pr-[24px] font-Medium text-[rgba(255,255,255,0.6)] outline-none placeholder:text-[rgba(255,255,255,0.6)] hover:border-Silver focus:placeholder:opacity-0 ${inputFocused ? "rounded-t-[20px] bg-D2_Gray text-Silver" : "rounded-[20px] border border-[rgba(255,255,255,0.6)] bg-transparent"}`}
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
          className={`flex h-10 w-full items-start border-D2_Gray pl-[64px] pr-[24px] font-Medium text-L_Gray outline-none placeholder:text-L_Gray hover:border focus:placeholder:opacity-0 ${inputFocused ? "rounded-t-[20px] bg-D2_Gray text-Silver" : "rounded-[20px] bg-[#2e2c2b]"}`}
        />
      )}
    </>
  );
}

export default RenderSearchInput;
