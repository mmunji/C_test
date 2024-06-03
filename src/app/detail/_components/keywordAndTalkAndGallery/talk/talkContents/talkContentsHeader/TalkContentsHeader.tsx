import Image from "next/image";
import React from "react";

import SmallBadge from "@/components/smallBadge/SmallBadge";

import { MoreHorizontal } from "../../../../../../../../public/icons";
import TalkContentsRatingStar from "./TalkContentsRatingStar";

export default function TalkContentsHeader() {
  return (
    <div className="relative flex h-[66px] justify-between Tablet:h-[54px]">
      <section className="flex gap-2 Tablet:gap-4">
        <div className="mt-1 h-7 w-7 rounded-full bg-White Tablet:mt-[7px] Tablet:h-10 Tablet:w-10" />
        <section className="mb-auto flex flex-col gap-1 Tablet:items-center Tablet:gap-2">
          <section className="mr-auto Tablet:flex Tablet:items-center Tablet:gap-2">
            <div className="mb-1 flex Tablet:mb-0">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <TalkContentsRatingStar key={i} rating={2.5} index={i} />
                ))}
            </div>
            <section className="flex gap-2">
              <p className="text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
                닉네임
              </p>
              <p className="text-Gray Text-xs-Regular Tablet:Text-s-Medium">
                방금전 (수정)
              </p>
            </section>
          </section>

          <section className="absolute bottom-0 left-9 flex h-[25px] gap-1 Tablet:left-[56px] Tablet:mt-0">
            <SmallBadge content="호그와트생" />
            <SmallBadge content="호그와트생" />
            <SmallBadge content="호그와트생" />
          </section>
        </section>
      </section>

      <Image src={MoreHorizontal} alt="메뉴" className="m-2 mb-auto" />
    </div>
  );
}
