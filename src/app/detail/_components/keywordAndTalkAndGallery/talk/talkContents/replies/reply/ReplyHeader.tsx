import Image from "next/image";
import React from "react";

import { MoreHorizontal } from "../../../../../../../../../public/icons";

export default function ReplyHeader() {
  return (
    <div className="flex h-10 items-center justify-between">
      <section className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-White Tablet:mr-2 Tablet:h-[30px] Tablet:w-[30px]" />
        <p className="text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          닉네임
        </p>
        <p className="text-Gray Text-xs-Regular Tablet:Text-s-Medium">방금전</p>
      </section>

      <Image src={MoreHorizontal} alt="" className="m-2" />
    </div>
  );
}
