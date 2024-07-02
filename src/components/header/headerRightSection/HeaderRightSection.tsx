import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import ROUTES from "@/constants/routes";
import useDevice from "@/hooks/useDevice";
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
  const { device } = useDevice();
  const smDevice = device === "mobile" || device === "tablet";
  const lgDevice = device === "laptop" || device === "desktop";

  useEffect(() => {
    setInputValue("");
  }, [smDevice, lgDevice]);

  const { movieTitles } = useSearchMovies(inputValue);

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
          movieTitles,
        }}
      />

      <MobileHeaderRightSection
        clickSearchIcon={clickSearchIcon}
        setClickSearchIcon={setClickSearchIcon}
      />

      {loggedIn ? (
        <HeaderAuthedUserSection hasScrolledPast={hasScrolledPast} />
      ) : (
        <HeaderAuthButtons hasScrolledPast={hasScrolledPast} />
      )}
    </section>
  );
}
