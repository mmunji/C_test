import Image from "next/image";
import React from "react";

import { Menu } from "../../../../../../../../public/icons";
import DetailBadge from "../../../../common/DetailBadge";
import TalkContentsRatingStar from "./TalkContentsRatingStar";

export default function TalkContentsHeader() {
  return (
    <div className="flex justify-between">
      <section className="flex gap-2 Tablet:gap-4">
        <div className="mt-1 h-7 w-7 rounded-full bg-White Tablet:mt-[7px] Tablet:h-10 Tablet:w-10" />
        <section className="mb-auto flex flex-col gap-1 Tablet:items-center Tablet:gap-2">
          <section className="Tablet:flex Tablet:gap-2">
            <div className="mb-1 flex">
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

          <section className="mr-auto flex h-[25px] gap-1 Tablet:mt-0">
            <DetailBadge content="사랑꾼" />
            <DetailBadge content="액션가면" />
            <DetailBadge content="모험가" />
          </section>
        </section>
      </section>

      <Image src={Menu} alt="메뉴" className="m-2 mb-auto" />
    </div>
  );
}
