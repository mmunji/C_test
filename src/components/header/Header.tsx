"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import ROUTES from "@/constants/routes";
import useHeaderScrollThreshold from "@/hooks/useHeaderScrollThreshold";

import HeaderRightSection from "./headerRightSection/HeaderRightSection";

export default function Header() {
  const pathname = usePathname();
  const { hasScrolledPast } = useHeaderScrollThreshold();

  return (
    <header
      className={`sticky top-0 h-20 ${pathname === ROUTES.DETAIL ? (hasScrolledPast ? "bg-BG" : "bg-transparent") : "bg-BG"} ${pathname === ROUTES.MY && "border border-D2_Gray"}`}
    >
      <div className="Tablet:mx-[52px] mx-6 flex h-full flex-shrink-0 items-center justify-between">
        <Image src="" alt="로고" className="h-10 w-[150px] bg-[#d9d9d9]" />
        <HeaderRightSection hasScrolledPast={hasScrolledPast} />
      </div>
    </header>
  );
}
