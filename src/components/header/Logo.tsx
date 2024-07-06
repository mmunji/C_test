import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import ROUTES from "@/constants/routes";

import { FullLogo } from "../../../public/images";

function Logo() {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={`${(pathname.includes(ROUTES.MY.default) || pathname.includes(ROUTES.DETAIL)) && "hidden Tablet:block"} absolute left-[50%] h-5 w-[120px] translate-x-[-50%] Tablet:relative Tablet:left-0 Tablet:h-6 Tablet:w-[144px] Tablet:translate-x-0 Laptop:h-8 Laptop:w-[192px]`}
    >
      <Image src={FullLogo} alt="로고" />
    </Link>
  );
}

export default Logo;
