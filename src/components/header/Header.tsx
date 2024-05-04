"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import ROUTES from "@/constants/routes";
import useHeaderScrollThreshold from "@/hooks/useHeaderScrollThreshold";

import { BackArrow } from "../../../public/icons";
import HeaderRightSection from "./headerRightSection/HeaderRightSection";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const { hasScrolledPast } = useHeaderScrollThreshold();

  return (
    <header
      className={`sticky top-0 h-10 Tablet:h-[60px] Laptop:h-20 ${pathname === ROUTES.DETAIL ? (hasScrolledPast ? "bg-BG" : "bg-BG Tablet:bg-transparent") : "bg-BG"} ${pathname === ROUTES.MY && "border border-D2_Gray"} `}
    >
      <div className="relative mx-1 flex h-full items-center justify-between Tablet:mx-6 Laptop:mx-[52px]">
        {pathname !== ROUTES.MAIN && (
          <Image
            src={BackArrow}
            alt="뒤로 가기"
            className="cursor-pointer Tablet:hidden"
          />
        )}

        <Logo />

        <HeaderRightSection hasScrolledPast={hasScrolledPast} />
      </div>
    </header>
  );
}
