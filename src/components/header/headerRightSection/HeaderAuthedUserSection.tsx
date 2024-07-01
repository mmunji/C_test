import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

import ROUTES from "@/constants/routes";

import { CaretDownMd } from "../../../../public/icons";

interface HeaderAuthedUserSectionProps {
  hasScrolledPast: boolean;
}

function HeaderAuthedUserSection({
  hasScrolledPast,
}: HeaderAuthedUserSectionProps) {
  const pathname = usePathname();
  return (
    <section className="hidden items-center Laptop:flex">
      <div className="mr-3 h-[30px] w-[30px] rounded-full bg-[#d9d9d9]" />

      <p
        className={`mr-2 text-regular font-Medium ${pathname.includes(ROUTES.DETAIL) ? (hasScrolledPast ? "text-Silver" : "text-[rgba(255,255,255,0.6)]") : "text-Silver"}`}
      >
        닉네임
      </p>
      <Image src={CaretDownMd} alt="더보기" className="cursor-pointer" />
    </section>
  );
}

export default HeaderAuthedUserSection;
