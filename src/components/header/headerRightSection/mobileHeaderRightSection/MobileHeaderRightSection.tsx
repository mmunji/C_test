import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";

import ROUTES from "@/constants/routes";
import useDebounce from "@/hooks/useDebounce";

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
  const [debouncedValue, setDebouncedValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleDebounceChange = useDebounce<React.ChangeEvent<HTMLInputElement>>(
    (e) => setDebouncedValue(e.target.value),
    300,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleDebounceChange(e);
  };

  return (
    <section
      className={`${pathname === ROUTES.MAIN && "ml-auto"} flex w-fit items-center Laptop:hidden ${clickSearchIcon && "absolute left-0 flex h-full w-full gap-2 bg-BG pl-5 pr-4 Tablet:p-0"}`}
    >
      {clickSearchIcon ? (
        <MobileHeaderInputSection
          {...{
            inputFocused,
            inputValue,
            setInputValue: handleChange,
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
          inputValue={debouncedValue}
          inputFocused={inputFocused}
          setClickSearchIcon={setClickSearchIcon}
        />
      )}
    </section>
  );
}

export default MobileHeaderRightSection;
