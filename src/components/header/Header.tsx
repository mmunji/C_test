import Image from "next/image";
import React from "react";

import HeaderRightSection from "./headerRightSection/HeaderRightSection";

export default function Header() {
  return (
    <header className="h-20 bg-BG">
      <div className="Tablet:mx-[52px] mx-6 flex h-full flex-shrink-0 items-center justify-between">
        <Image src="" alt="" className="h-10 w-[150px] bg-[#d9d9d9]" />
        <HeaderRightSection />
      </div>
    </header>
  );
}
