"use client";
import Image from "next/image";
import { useState } from "react";

import SmallBadge from "@/components/smallBadge/SmallBadge";

import {
  EditPencilLineFill,
  ThumbsUpFillSm,
} from "../../../../../../public/icons";

interface UserPostType {
  value: number;
  ClickIndex: number;
  onClick: () => void;
  name: string;
  evaluate: number;
  heart: number;
  Badge: BadgeDTO[];
  profile: string;
}

export default function SlimilarUser({
  value,
  ClickIndex,
  name,
  evaluate,
  heart,
  Badge,
  onClick,
  profile,
}: UserPostType) {
  const [ItemHover, setItemHover] = useState(false);
  return (
    <div
      className={`flex flex-col gap-5 rounded-xl  ${value != ClickIndex ? (ItemHover ? "bg-D2_Gray" : "bg-Black") : "bg-D1_Gray"} h-full  px-3 py-6 text-Silver Text-m-Medium`}
      onClick={onClick}
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
    >
      <div className="flex items-center gap-2 px-2">
        <div
          className="h-[40px] w-[40px] rounded-[60px] "
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0) 100%), url(data:image/jpeg;base64,${profile})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <span>{name}</span>
      </div>
      <div className="flex gap-4 px-2">
        <div className="flex items-center gap-1">
          <Image src={EditPencilLineFill} alt="펜슬" />
          평가한 영화 {heart ? heart : 0}
        </div>
        <div className="border-[1px] border-D3_Gray" />
        <div className="flex items-center gap-1">
          <Image src={ThumbsUpFillSm} alt="펜슬" />
          받은 좋아요 {evaluate ? evaluate : 0}
        </div>
      </div>
      <div className="flex gap-1  ">
        {Array(3)
          .fill(0)
          .map((_, index) => {
            if (!Badge[index]?.badge_name) {
              return "";
            }
            return (
              <SmallBadge
                key={index}
                content={Badge[index]?.badge_name}
                size="md"
              />
            );
          })}
      </div>
    </div>
  );
}
