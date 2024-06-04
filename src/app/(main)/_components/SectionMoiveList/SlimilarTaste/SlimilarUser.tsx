import Image from "next/image";

import {
  EditPencilLineFill,
  ThumbsUpFillSm,
} from "../../../../../../public/icons";

interface UserPostType {
  value: number;
  ClickIndex: number;
  onClick: () => void;
}

export default function SlimilarUser({
  value,
  ClickIndex,
  onClick,
}: UserPostType) {
  return (
    <div
      className={`flex w-[368px] flex-col gap-5 rounded-xl  ${value != ClickIndex ? "bg-D1_Gray" : "bg-Black"}  px-3 py-6 Text-m-Medium `}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <div className="h-[40px] w-[40px] rounded-[60px] border-2 " />
        <span>닉네임</span>
      </div>
      <div className="px2 flex gap-4">
        <div className="flex items-center gap-1">
          <Image src={EditPencilLineFill} alt="펜슬" />
          평가한 영화 OOO
        </div>
        <div />
        <div className="flex items-center gap-1">
          <Image src={ThumbsUpFillSm} alt="펜슬" />
          받은 좋아요 OOO
        </div>
      </div>
      <div className="flex gap-1  ">
        <div className="flex w-fit items-center justify-center gap-1 rounded-lg bg-black bg-opacity-20 px-2 py-1 Tablet:px-3 Tablet:py-2">
          <div className="h-4 w-4 Emoji-s Tablet:Emoji-m">👊</div>
          <span className="Text-s-Medium Tablet:Text-m-Medium">웃음사냥꾼</span>
        </div>
        <div className="flex w-fit items-center justify-center gap-1 rounded-lg bg-black bg-opacity-20 px-2 py-1 Tablet:px-3 Tablet:py-2">
          <span className="h-4 w-4 Emoji-s Tablet:Emoji-m">👊</span>
          <span className="Text-s-Medium Tablet:Text-m-Medium">웃음사냥꾼</span>
        </div>
        <div className="flex w-fit items-center justify-center gap-1 rounded-lg bg-black bg-opacity-20 px-2 py-1 Tablet:px-3 Tablet:py-2">
          <span className="h-4 w-4 Emoji-s Tablet:Emoji-m">👊</span>
          <span className="Text-s-Medium Tablet:Text-m-Medium">웃음사냥꾼</span>
        </div>
      </div>
    </div>
  );
}
