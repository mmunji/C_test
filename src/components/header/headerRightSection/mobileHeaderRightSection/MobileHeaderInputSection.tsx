import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

import { Search, WhiterSearch } from "../../../../../public/icons";

interface MobileHeaderInputSectionProps {
  setClickSearchIcon: Dispatch<SetStateAction<boolean>>;
}

export default function MobileHeaderInputSection({
  setClickSearchIcon,
}: MobileHeaderInputSectionProps) {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="‘파묘’ 궁금하지 않으세요?"
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          className={`h-10 w-full ${inputFocused && "placeholder:opacity-0"} rounded-[20px] bg-D1_Gray pl-12 font-Medium text-Silver outline-none placeholder:text-L_Gray hover:border hover:border-D2_Gray `}
        />

        <Image
          src={Search}
          alt="검색"
          className="absolute left-4 top-[50%] translate-y-[-50%]"
        />
      </div>
      <p
        onClick={() => setClickSearchIcon(false)}
        className="flex-shrink-0 cursor-pointer p-2 text-sm font-Medium text-Gray_Orange Tablet:text-regular"
      >
        취소
      </p>
    </>
  );
}
