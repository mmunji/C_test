"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ROUTES from "@/constants/routes";
import useHeaderScrollThreshold from "@/hooks/useHeaderScrollThreshold";

import { ChevronLeftMd } from "../../../public/icons";
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
      className={`sticky top-0 z-10 h-[64px] Laptop:h-20 ${pathname === ROUTES.DETAIL ? (hasScrolledPast ? "bg-BG" : "bg-transparent") : "bg-BG"} ${pathname === ROUTES.MY && "border-b border-D2_Gray"} `}
    >
      <div className="relative mx-1 flex h-full items-center justify-between Tablet:mx-6 Laptop:mx-[52px]">
        {pathname !== ROUTES.MAIN && !clickSearchIcon && (
          <Image
            src={ChevronLeftMd}
            alt="뒤로 가기"
            onClick={() => router.back()}
            className="m-2 cursor-pointer Tablet:hidden"
          />
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
        >
          <path
            d="M9.75254 12.8127C8.99274 14.1945 7.00726 14.1945 6.24746 12.8127L0.969325 3.21365C0.23642 1.88075 1.20075 0.250001 2.72186 0.250001L13.2781 0.25C14.7992 0.25 15.7636 1.88075 15.0307 3.21365L9.75254 12.8127Z"
            fill="#E86318"
          />
        </svg>

        <Logo />

        <HeaderRightSection
          {...{ hasScrolledPast, clickSearchIcon, setClickSearchIcon }}
        />
      </div>
    </header>
  );
}
