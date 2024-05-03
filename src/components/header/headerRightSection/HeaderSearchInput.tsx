import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

import ROUTES from "@/constants/routes";

import { Search, WhiteSearch } from "../../../../public/icons";

interface HeaderSearchInputProps {
  hasScrolledPast: boolean;
}

export default function HeaderSearchInput({
  hasScrolledPast,
}: HeaderSearchInputProps) {
  const pathname = usePathname();
  return (
    <div className="relative w-[360px]">
      {pathname === ROUTES.DETAIL ? (
        hasScrolledPast ? (
          <input
            placeholder="‘파묘’ 궁금하지 않으세요?"
            className="flex h-10 w-full items-start rounded-[20px] bg-[#2e2c2b] pl-[64px] pr-[24px] font-Medium text-L_Gray outline-none placeholder:text-L_Gray"
          />
        ) : (
          <input
            placeholder="‘파묘’ 궁금하지 않으세요?"
            className="flex h-10 w-full items-start rounded-[20px] border border-[[rgba(255,255,255,0.70)]] bg-transparent pl-[64px] pr-[24px] font-Medium text-[rgba(255,255,255,0.70)] outline-none placeholder:text-[rgba(255,255,255,0.70)]"
          />
        )
      ) : (
        <input
          placeholder="‘파묘’ 궁금하지 않으세요?"
          className="flex h-10 w-full items-start rounded-[20px] bg-[#2e2c2b] pl-[64px] pr-[24px] font-Medium text-L_Gray outline-none placeholder:text-L_Gray"
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
