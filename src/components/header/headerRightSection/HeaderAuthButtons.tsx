import { usePathname } from "next/navigation";
import React from "react";

import ROUTES from "@/constants/routes";

interface HeaderAuthButtonsProps {
  hasScrolledPast: boolean;
}

function HeaderAuthButtons({ hasScrolledPast }: HeaderAuthButtonsProps) {
  const pathname = usePathname();
  return (
    <section className="hidden gap-4 Tablet:flex Laptop:gap-8">
      <button
        className={`h-10 flex-shrink-0 p-2 text-regular font-Medium ${pathname === ROUTES.DETAIL ? (hasScrolledPast ? "text-White" : "text-[rgba(255,255,255,0.6)]") : "text-White"}`}
      >
        로그인
      </button>

      <button className="flex-shrink-0 rounded-[8px] bg-Primary px-4 text-regular font-Medium text-White">
        회원가입
      </button>
    </section>
  );
}

export default HeaderAuthButtons;
