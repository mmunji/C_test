import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

import Button from "@/components/buttons/Button";
import Dropdown from "@/components/dropdown/dropdown";
import SmallBadge from "@/components/smallBadge/SmallBadge";
import useMyInfoStore from "@/stores/useMyInfoStore";
import { cn } from "@/utils/cn";
import formatDate from "@/utils/formatDate";

import { MoreHorizontal } from "../../../../../../../../public/icons";
import TalkContentsRatingStar from "./TalkContentsRatingStar";

interface TalkContentsHeaderProps {
  talk: ReviewList;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function TalkContentsHeader({
  talk,
  setOpen,
}: TalkContentsHeaderProps) {
  const { myInfo } = useMyInfoStore();
  const isMyTalk = myInfo.nickname === talk.nickName;

  return (
    <div
      className={cn(
        "itmes-center relative flex h-[66px] justify-between Tablet:h-[54px]",
        talk.badgeList.length === 0 && "h-auto",
      )}
    >
      <section className="flex gap-2 Tablet:gap-4">
        <Image
          width={100}
          height={100}
          alt={talk.nickName}
          id="memberimage"
          src={`data:image/jpeg;base64,${talk.profileImage}`}
          className="mt-1 h-7 w-7 rounded-full Tablet:mt-[7px] Tablet:h-10 Tablet:w-10"
        />
        <section className="mb-auto flex flex-col gap-1 Tablet:h-full Tablet:items-center Tablet:gap-2">
          <section
            className={cn(
              "mr-auto Tablet:flex Tablet:items-center Tablet:gap-2",
              talk.badgeList.length === 0 && "my-auto",
            )}
          >
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
          {talk.badgeList.length !== 0 && (
            <>
              <section className="absolute bottom-0 left-9 flex h-[25px] gap-1 Tablet:left-[56px] Tablet:mt-0 Tablet:hidden">
                {talk.badgeList.map((el, i) => (
                  <SmallBadge key={i} content={el} size="xs" />
                ))}
              </section>
              <section className="absolute bottom-0 left-9 hidden h-[25px] gap-1 Tablet:left-[56px] Tablet:mt-0 Tablet:flex">
                {talk.badgeList.map((el, i) => (
                  <SmallBadge key={i} content={el} size="sm" />
                ))}
              </section>
            </>
          )}
        </section>
      </section>

      {!isMyTalk && (
        <Dropdown type="text">
          <Dropdown.Trigger>
            <Button variant="text" className="my-auto h-fit">
              <Image src={MoreHorizontal} alt="메뉴" />
            </Button>
          </Dropdown.Trigger>
          <Dropdown.List>
            <Dropdown.Item onClick={() => setOpen(true)}>신고</Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      )}
    </div>
  );
}
