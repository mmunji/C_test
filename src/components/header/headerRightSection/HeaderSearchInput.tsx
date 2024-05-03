import Image from "next/image";
import React from "react";

import { Search } from "../../../../public/icons";

export default function HeaderSearchInput() {
  return (
    <div className="relative w-[360px]">
      <input
        placeholder="‘파묘’ 궁금하지 않으세요?"
        className="flex h-10 w-full items-start rounded-[20px] bg-[#2e2c2b] pl-[64px] pr-[24px] font-Medium text-L_Gray outline-none placeholder:text-L_Gray"
      />
      <Image
        src={Search}
        alt=""
        className="absolute left-[24px] top-[50%] translate-y-[-50%]"
      />
    </div>
  );
}
