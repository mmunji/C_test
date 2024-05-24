import Image from "next/image";

import { PrimaryStart } from "@/../public/icons";
export default function KeyWordPosts() {
  return (
    <div className="Text-s-Mediuim flex  flex-col gap-2 rounded-xl bg-D1_Gray px-6 py-5">
      <div className="flex justify-between">
        <h1>닉네임</h1>
        <div className="flex gap-1">
          <Image src={PrimaryStart} alt="주황별" />
          0.0
        </div>
      </div>
      <div>
        키워드2줄일 경우입니다.2줄일 경우입니다.2줄일 경우입니다.2줄일
        경우입니다.2줄일 경우입니다.2
      </div>
      <span className="text-L_Gray">영화제목 · 범죄도시4</span>
    </div>
  );
}
