import Image from "next/image";
import React from "react";

import formatDate from "@/utils/formatDate";

import { MoreHorizontal } from "../../../../../../../../../public/icons";

interface ReplyHeaderProps {
  reply: ReviewList;
}

export default function ReplyHeader({ reply }: ReplyHeaderProps) {
  return (
    <div className="flex h-10 items-center justify-between">
      <section className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-White Tablet:mr-2 Tablet:h-[30px] Tablet:w-[30px]" />
        <p className="text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          {reply.nickName}
        </p>
        <p className="text-Gray Text-xs-Regular Tablet:Text-s-Medium">
          {formatDate(reply.createdAt)}
        </p>
      </section>

      <Image src={MoreHorizontal} alt="" className="m-2" />
    </div>
  );
}
