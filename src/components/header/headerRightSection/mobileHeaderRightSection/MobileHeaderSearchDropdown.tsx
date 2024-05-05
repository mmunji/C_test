import Image from "next/image";
import React from "react";

import { Fire } from "../../../../../public/icons";

interface MobilHeaderSearchDropdownProps {
  inputValue: string;
}

const arr = Array(10)
  .fill("검색어 텍스트")
  .map((text) => text);

export default function MobilHeaderSearchDropdown({
  inputValue,
}: MobilHeaderSearchDropdownProps) {
  return (
    <div className="fixed left-0 top-10 min-h-[calc(100vh-40px)] w-full bg-BG pb-3 pt-6 Tablet:top-[60px] Tablet:min-h-[calc(100vh-60px)]">
      {!inputValue && (
        <div className="mb-2 flex gap-1 px-6 py-1">
          <Image src={Fire} alt="불" className="mx-[5px] my-[3px]" />
          <p className="font-Medium text-Primary">인기 검색어</p>
        </div>
      )}
      <ul className="flex flex-col gap-2">
        {arr.map((el, i) => (
          <li
            key={i}
            className="cursor-pointer py-1 pl-[52px] pr-4 font-Regular text-Silver"
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
