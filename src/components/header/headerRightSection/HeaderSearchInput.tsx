import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import ROUTES from "@/constants/routes";

import { Fire, Search, WhiteSearch } from "../../../../public/icons";

interface HeaderSearchInputProps {
  hasScrolledPast: boolean;
}

export default function HeaderSearchInput({
  hasScrolledPast,
}: HeaderSearchInputProps) {
  const pathname = usePathname();
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className="relative w-[360px]">
      {pathname === ROUTES.DETAIL ? (
        hasScrolledPast ? (
          <input
            placeholder="‘파묘’ 궁금하지 않으세요?"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            className={`flex h-10 w-full items-start rounded-[20px] border-D2_Gray bg-[#2e2c2b] pl-[64px] pr-[24px] font-Medium text-L_Gray outline-none placeholder:text-L_Gray placeholder:transition-all placeholder:duration-200 hover:border focus:placeholder:opacity-0 ${inputFocused && "bg-D2_Gray"} transition-all duration-200`}
          />
        ) : (
          <input
            placeholder="‘파묘’ 궁금하지 않으세요?"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            className={`flex h-10 w-full items-start rounded-[20px] bg-transparent pl-[64px] pr-[24px] font-Medium text-[rgba(255,255,255,0.6)] outline-none placeholder:text-[rgba(255,255,255,0.6)] placeholder:transition-opacity placeholder:duration-200 hover:border-Silver focus:placeholder:opacity-0 ${inputFocused ? "bg-D2_Gray" : "border border-[rgba(255,255,255,0.6)]"} transition-all duration-200`}
          />
        )
      ) : (
        <input
          placeholder="‘파묘’ 궁금하지 않으세요?"
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          className={`flex h-10 w-full items-start rounded-[20px] border-D2_Gray bg-[#2e2c2b] pl-[64px] pr-[24px] font-Medium text-L_Gray outline-none placeholder:text-L_Gray placeholder:transition-all placeholder:duration-200 hover:border focus:placeholder:opacity-0 ${inputFocused && "bg-D2_Gray"} transition-all duration-200`}
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
    </div>
  );
}
