import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";

import ROUTES from "@/constants/routes";

import { SearchWhiter, User } from "../../../../../public/icons";
import MobileHeaderInputSection from "./MobileHeaderInputSection";
import MobileHeaderSearchDropdown from "./MobileHeaderSearchDropdown";

interface MobileHeaderRightSectionProps {
  clickSearchIcon: boolean;
  setClickSearchIcon: Dispatch<SetStateAction<boolean>>;
}

function MobileHeaderRightSection({
  clickSearchIcon,
  setClickSearchIcon,
}: MobileHeaderRightSectionProps) {
  const pathname = usePathname();
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <section
      className={`${pathname === ROUTES.MAIN && "ml-auto"} flex w-fit items-center Laptop:hidden ${clickSearchIcon && "absolute left-0 flex h-full w-full gap-2 bg-BG pl-5 pr-4 Tablet:p-0"}`}
    >
      {clickSearchIcon ? (
        <MobileHeaderInputSection
          {...{
            inputFocused,
            inputValue,
            setInputValue,
            setInputFocused,
            setClickSearchIcon,
            clickSearchIcon,
          }}
        />
      ) : (
        <section className="flex Tablet:gap-4">
          <Image
            src={SearchWhiter}
            alt="검색"
            onClick={() => setClickSearchIcon(true)}
            className="m-2 cursor-pointer"
          />
          <Image
            src={User}
            alt="유저"
            className="m-2 cursor-pointer Laptop:hidden"
          />
        </section>
      )}
      {clickSearchIcon && (
        <MobileHeaderSearchDropdown
          inputValue={inputValue}
          inputFocused={inputFocused}
        />
      )}
    </section>
  );
}

export default MobileHeaderRightSection;
