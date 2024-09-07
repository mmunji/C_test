import Image from "next/image";
import React from "react";

import Button from "@/components/buttons/Button";
import SmallBadge from "@/components/smallBadge/SmallBadge";
import useMyInfoStore from "@/stores/useMyInfoStore";
import formatDate from "@/utils/formatDate";

import { MoreHorizontal } from "../../../../../../../../public/icons";
import TalkContentsRatingStar from "./TalkContentsRatingStar";

interface TalkContentsHeaderProps {
  talk: ReviewList;
}

export default function TalkContentsHeader({ talk }: TalkContentsHeaderProps) {
  const { myInfo } = useMyInfoStore();
  const isMyTalk = myInfo.nickname === talk.nickName;

  return (
    <div className="itmes-center relative flex h-[66px] justify-between Tablet:h-[54px]">
      <section className="flex gap-2 Tablet:gap-4">
        <div className="mt-1 h-7 w-7 rounded-full bg-White Tablet:mt-[7px] Tablet:h-10 Tablet:w-10" />
        <section className="mb-auto flex flex-col gap-1 Tablet:items-center Tablet:gap-2">
          <section className="mr-auto Tablet:flex Tablet:items-center Tablet:gap-2">
            <div className="mb-1 flex Tablet:mb-0">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <TalkContentsRatingStar
                    key={i}
                    rating={talk.star}
                    index={i}
                  />
                ))}
            </div>
            <section className="flex gap-2">
              <p className="text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
                {talk.nickName}
              </p>
              <p className="text-Gray Text-xs-Regular Tablet:Text-s-Medium">
                {formatDate(talk.createdAt)}
              </p>
            </section>
          </section>

          <section className="absolute bottom-0 left-9 flex h-[25px] gap-1 Tablet:left-[56px] Tablet:mt-0 Tablet:hidden">
            <SmallBadge content="강심장" size="xs" />
            <SmallBadge content="고고학자" size="xs" />
            <SmallBadge content="파이브덕" size="xs" />
          </section>
          <section className="absolute bottom-0 left-9 hidden h-[25px] gap-1 Tablet:left-[56px] Tablet:mt-0 Tablet:flex">
            <SmallBadge content="강심장" size="sm" />
            <SmallBadge content="고고학자" size="sm" />
            <SmallBadge content="파이브덕" size="sm" />
          </section>
        </section>
      </section>

      {!isMyTalk && (
        <Button variant="icon" className="my-auto h-fit">
          <Image src={MoreHorizontal} alt="메뉴" />
        </Button>
      )}
    </div>
  );
}
