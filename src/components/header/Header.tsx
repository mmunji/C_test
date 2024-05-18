"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ROUTES from "@/constants/routes";
import useHeaderScrollThreshold from "@/hooks/useHeaderScrollThreshold";

import { BackArrow } from "../../../public/icons";
import HeaderRightSection from "./headerRightSection/HeaderRightSection";
import Logo from "./Logo";

export default function Header() {
  const [clickSearchIcon, setClickSearchIcon] = useState(false);
  const pathname = usePathname();
  const { hasScrolledPast } = useHeaderScrollThreshold();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setClickSearchIcon(false);
    };
    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`sticky top-0 h-[64px] Laptop:h-20 ${pathname === ROUTES.DETAIL ? (hasScrolledPast ? "bg-BG" : "bg-transparent") : "bg-BG"} ${pathname === ROUTES.MY && "border-b border-D2_Gray"} `}
    >
      <div className="relative mx-1 flex h-full items-center justify-between Tablet:mx-6 Laptop:mx-[52px]">
        {pathname !== ROUTES.MAIN && !clickSearchIcon && (
          <Image
            src={BackArrow}
            alt="뒤로 가기"
            onClick={() => router.back()}
            className="cursor-pointer Tablet:hidden"
          />
        )}

        <Logo />

        <HeaderRightSection
          {...{ hasScrolledPast, clickSearchIcon, setClickSearchIcon }}
        />
      </div>
    </header>
  );
}
