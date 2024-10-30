import { usePathname } from "next/navigation";
import React, { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";

import ROUTES from "@/constants/routes";
import usePressEnterSearch from "@/hooks/usePressEnterSearch";

import CommonSearchInput from "./CommonSearchInput";

interface RenderSearchInputProps {
  hasScrolledPast: boolean;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  setIsInputFocused: Dispatch<SetStateAction<boolean>>;
  isInputFocused: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
}

function RenderSearchInput({
  hasScrolledPast,
  inputValue,
  setIsInputFocused,
  setInputValue,
  isInputFocused,
  inputRef,
}: RenderSearchInputProps) {
  const pathname = usePathname();
  const { handleKeyPress } = usePressEnterSearch(
    setIsInputFocused,
    inputValue,
    inputRef,
  );

  return (
    <>
      {pathname.includes(ROUTES.DETAIL) ? (
        hasScrolledPast ? (
          <CommonSearchInput
            {...{
              inputValue,
              setInputValue,
              isInputFocused,
              setIsInputFocused,
              inputRef,
            }}
          />
        ) : (
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
            className={`flex h-10 w-full items-start border-[1px] pl-[64px] pr-[24px] font-Medium text-[rgba(255,255,255,0.6)] outline-none placeholder:text-[rgba(255,255,255,0.6)] focus:placeholder:opacity-0 ${isInputFocused ? "rounded-t-[20px] border-transparent bg-D2_Gray text-Silver hover:border hover:border-transparent" : "rounded-[20px] border-[1px] border-[rgba(255,255,255,0.6)] bg-transparent hover:border-Silver"}`}
          />
        )
      ) : (
        <CommonSearchInput
          {...{
            type: "lg",
            inputValue,
            setInputValue,
            isInputFocused,
            setIsInputFocused,
            inputRef,
          }}
        />
      )}
    </>
  );
}

export default RenderSearchInput;
