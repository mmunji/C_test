import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";

import ROUTES from "@/constants/routes";
import useSearchMovies from "@/hooks/useSearchMovies";
import useLoggedInStore from "@/stores/useLoggedIn";

import HeaderAuthButtons from "./HeaderAuthButtons";
import HeaderAuthedUserSection from "./HeaderAuthedUserSection";
import HeaderSearchInputSection from "./HeaderSearchInputSection";
import MobileHeaderRightSection from "./mobileHeaderRightSection/MobileHeaderRightSection";

interface HeaderRightSectionProps {
  hasScrolledPast: boolean;
  clickSearchIcon: boolean;
  setClickSearchIcon: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderRightSection({
  hasScrolledPast,
  clickSearchIcon,
  setClickSearchIcon,
}: HeaderRightSectionProps) {
  const { loggedIn } = useLoggedInStore();
  const pathname = usePathname();
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useSearchMovies(inputValue);

  return (
    <section
      className={`${pathname === ROUTES.MAIN && "w-full"} flex h-10 items-center gap-4 Laptop:w-fit Laptop:gap-8`}
    >
      <HeaderSearchInputSection
        {...{
          hasScrolledPast,
          inputValue,
          setInputValue,
          inputFocused,
          setInputFocused,
        }}
      />

      <MobileHeaderRightSection
        {...{ clickSearchIcon, setClickSearchIcon, inputValue, setInputValue }}
      />

      {loggedIn ? (
        <HeaderAuthedUserSection hasScrolledPast={hasScrolledPast} />
      ) : (
        <HeaderAuthButtons hasScrolledPast={hasScrolledPast} />
      )}
    </section>
  );
}
