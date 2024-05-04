import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href="/"
      className="absolute left-[50%] h-8 w-20 translate-x-[-50%] bg-[#d9d9d9] Tablet:relative Tablet:left-0 Tablet:h-10 Tablet:w-[150px] Tablet:translate-x-0"
    >
      <Image src="" alt="로고" />
    </Link>
  );
}

export default Logo;
