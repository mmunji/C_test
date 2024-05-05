import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

import ROUTES from "@/constants/routes";

import { User, WhiterSearch } from "../../../../public/icons";
import MobileHeaderInputSection from "./mobileHeaderRightSection/MobileHeaderInputSection";

interface MobileHeaderRightSectionProps {
  clickSearchIcon: boolean;
  setClickSearchIcon: Dispatch<SetStateAction<boolean>>;
}

function MobileHeaderRightSection({
  clickSearchIcon,
  setClickSearchIcon,
}: MobileHeaderRightSectionProps) {
  const pathname = usePathname();
  return (
    <section
      className={`${pathname === ROUTES.MAIN && "ml-auto"} flex w-fit items-center Laptop:hidden ${clickSearchIcon && "absolute left-0 flex h-full w-full gap-2 bg-BG pl-5 pr-4 Tablet:p-0"}`}
    >
      {clickSearchIcon ? (
        <MobileHeaderInputSection setClickSearchIcon={setClickSearchIcon} />
      ) : (
        <>
          <Image
            src={WhiterSearch}
            alt="검색"
            onClick={() => setClickSearchIcon(true)}
            className="m-2 cursor-pointer"
          />
          <Image
            src={User}
            alt="유저"
            className="m-2 cursor-pointer Tablet:hidden"
          />
        </>
      )}
    </section>
  );
}

export default MobileHeaderRightSection;
