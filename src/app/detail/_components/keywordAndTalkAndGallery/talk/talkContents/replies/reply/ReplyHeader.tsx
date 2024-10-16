import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

import Button from "@/components/buttons/Button";
import Dropdown from "@/components/dropdown/dropdown";
import formatDate from "@/utils/formatDate";

import { MoreHorizontal } from "../../../../../../../../../public/icons";

interface ReplyHeaderProps {
  reply: ReviewList;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setTalkId: Dispatch<SetStateAction<number | null>>;
}

export default function ReplyHeader({
  reply,
  setOpen,
  setTalkId,
}: ReplyHeaderProps) {
  return (
    <div className="flex h-10 items-center justify-between">
      <section className="flex items-center gap-2">
        {/* <div className="h-7 w-7 rounded-full bg-White Tablet:mr-2 Tablet:h-[30px] Tablet:w-[30px]" /> */}
        <Image
          width={100}
          height={100}
          alt={reply?.nickName}
          id="replyimg"
          src={`data:image/jpeg;base64,${reply?.profileImage}`}
          className="mt-1 h-7 w-7 rounded-full Tablet:mr-2 Tablet:h-[30px] Tablet:w-[30px]"
        />

        <p className="text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
          {reply?.nickName}
        </p>
        <p className="text-Gray Text-xs-Regular Tablet:Text-s-Medium">
          {formatDate(reply?.createdAt)}
        </p>
      </section>
      <Dropdown type="text">
        <Dropdown.Trigger>
          <Button variant="text" className="my-auto h-fit">
            <Image src={MoreHorizontal} alt="메뉴" />
          </Button>
        </Dropdown.Trigger>
        <Dropdown.List>
          <Dropdown.Item
            onClick={() => {
              setTalkId(reply?.id);
              setOpen(true);
            }}
          >
            신고
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </div>
  );
}
