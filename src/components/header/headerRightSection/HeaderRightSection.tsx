import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

import ROUTES from "@/constants/routes";
import useLoggedInStore from "@/stores/useLoggedIn";

import { User, WhiterSearch } from "../../../../public/icons";
import HeaderAuthButtons from "./HeaderAuthButtons";
import HeaderAuthedUserSection from "./HeaderAuthedUserSection";
import HeaderSearchInputSection from "./HeaderSearchInputSection";

interface HeaderRightSectionProps {
  hasScrolledPast: boolean;
}

export default function HeaderRightSection({
  hasScrolledPast,
}: HeaderRightSectionProps) {
  const { loggedIn, setLoggedIn } = useLoggedInStore();
  const pathname = usePathname();

  return (
    <section
      className={`${pathname === ROUTES.MAIN && "w-full"} flex h-10  items-center gap-4 Laptop:w-fit Laptop:gap-8`}
    >
      <HeaderSearchInputSection hasScrolledPast={hasScrolledPast} />

      <section
        className={`${pathname === ROUTES.MAIN && "ml-auto"} flex w-fit Laptop:hidden`}
      >
        <Image src={WhiterSearch} alt="검색" className="m-2 cursor-pointer" />
        <Image
          src={User}
          alt="유저"
          className="m-2 cursor-pointer Tablet:hidden"
        />
      </section>

      {loggedIn ? (
        <HeaderAuthedUserSection hasScrolledPast={hasScrolledPast} />
      ) : (
        <HeaderAuthButtons hasScrolledPast={hasScrolledPast} />
      )}
    </section>
  );
}
