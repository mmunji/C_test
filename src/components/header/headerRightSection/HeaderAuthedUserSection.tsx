import Image from "next/image";
import React from "react";

import { HeaderUserArrow } from "../../../../public/icons";

function HeaderAuthedUserSection() {
  return (
    <section className="flex items-center">
      <div className="mr-3 h-[30px] w-[30px] rounded-full bg-[#d9d9d9]" />

      <p className="mr-2 text-regular font-Medium text-[rgba(255,255,255,0.70)]">
        닉네임
      </p>
      <Image src={HeaderUserArrow} alt="더보기" className="cursor-pointer" />
    </section>
  );
}

export default HeaderAuthedUserSection;
