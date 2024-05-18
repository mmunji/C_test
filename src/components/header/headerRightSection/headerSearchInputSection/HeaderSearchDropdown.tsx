import Image from "next/image";
import React from "react";

import { Fire } from "../../../../../public/icons";

interface HeaderSearchDropdownProps {
  inputValue: string;
}

const arr = Array(10)
  .fill("검색어 텍스트")
  .map((text) => text);

export default function HeaderSearchDropdown({
  inputValue,
}: HeaderSearchDropdownProps) {
  return (
    <ul className="absolute top-10 w-full rounded-b-[20px] bg-D2_Gray pb-3">
      {!inputValue && (
        <div className="flex gap-1 py-1 pl-8 pr-5">
          <Image src={Fire} alt="불" className="mx-[5px] my-[3px]" />
          <p className="font-Medium text-Primary">인기 검색어</p>
        </div>
      )}
      {arr.map((el, i) => (
        <li
          key={i}
          className="max-w-[calc(100%-32px)] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap py-1 pl-[60px] font-Regular text-Silver"
        >
          {el}
        </li>
      ))}
    </ul>
  );
}
