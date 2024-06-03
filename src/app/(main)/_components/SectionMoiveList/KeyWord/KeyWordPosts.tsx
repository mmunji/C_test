import Image from "next/image";

import { StarFillSm } from "@/../public/icons";
export default function KeyWordPosts() {
  return (
    <div className="Text-s-Mediuim flex  flex-col gap-2 rounded-xl bg-D1_Gray px-6 py-5">
      <div className="flex justify-between">
        <h1 className="Text-s-Regular">닉네임</h1>
        <div className="/Text-sm-Bold flex gap-1">
          <Image src={StarFillSm} alt="주황별" />
          0.0
        </div>
      </div>
      <div className="Text-s-Regular Laptop:Text-m-Regular">
        키워드2줄일 경우입니다.2줄일 경우입니다.2줄일 경우입니다.2줄일
        경우입니다.2줄일 경우입니다.2
      </div>
      <span className="text-L_Gray Text-s-Regular Laptop:Text-m-Regular">
        영화제목 · 범죄도시4
      </span>
    </div>
  );
}
