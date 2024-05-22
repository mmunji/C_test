import Image from "next/image";

import { PencilLine, UpPoint } from "../../../../../../public/icons";
export default function SlimilarUser() {
  return (
    <div className="flex flex-col gap-[20px] rounded-xl border-2 px-[12px]  py-[24px]">
      <div className="flex gap-2">
        <div>프로필</div>
        <span>닉네임</span>
      </div>
      <div className="px2 flex gap-4">
        <div className="flex items-center gap-1">
          <Image src={PencilLine} alt="펜슬" />
          평가한 영화 OOO
        </div>
        <div />
        <div className="flex items-center gap-1">
          <Image src={UpPoint} alt="펜슬" />
          받은 좋아요 OOO
        </div>
      </div>
      <div className="flex gap-1 ">
        <div className="border-2 px-2">⭐유명한 탐정</div>
        <div className="border-2 px-2">⭐유명한 탐정</div>
        <div className="border-2 px-2">⭐유명한 탐정</div>
      </div>
    </div>
  );
}
