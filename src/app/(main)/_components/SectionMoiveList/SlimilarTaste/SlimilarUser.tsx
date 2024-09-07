import Image from "next/image";

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
}

export default function SlimilarUser({
  value,
  ClickIndex,
  name,
  evaluate,
  heart,
  Badge,
  onClick,
}: UserPostType) {
  return (
    <div
      className={`flex flex-col gap-5 rounded-xl  ${value != ClickIndex ? "bg-D1_Gray" : "bg-Black"} h-full  px-3 py-6 Text-m-Medium `}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <div className="h-[40px] w-[40px] rounded-[60px] border-2 " />
        <span>{name}</span>
      </div>
      <div className="px2 flex gap-4">
        <div className="flex items-center gap-1">
          <Image src={EditPencilLineFill} alt="펜슬" />
          평가한 영화 {evaluate ? evaluate : 0}
        </div>
        <div />
        <div className="flex items-center gap-1">
          <Image src={ThumbsUpFillSm} alt="펜슬" />
          받은 좋아요 {heart ? heart : 0}
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
