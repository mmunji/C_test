import Image from "next/image";

import SearchTitle from "@/app/search/[id]/_components/SearchTitle";

import { StarFillSm } from "../../../../../public/icons";
export default function SearchTalkList() {
  return (
    <div className="mt-1 flex flex-col gap-3 px-5">
      <SearchTitle category="톡" length={155} />
      <div className="flex flex-col gap-3">
        {Array(4)
          .fill("asd")
          .map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-xl bg-D1_Gray p-4"
            >
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Image
                    alt="profile_image"
                    width={24}
                    height={24}
                    src={"/images/detail/default_profile2.png"}
                  />
                  <span className="text-Silver Text-s-Medium">닉네임</span>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="profile_image"
                    width={16}
                    height={16}
                    src={StarFillSm}
                  />
                  <span className="Text-xs-Regular">0.0</span>
                </div>
              </div>
              <div className="line-clamp-3 text-Gray_Orange Text-s-Regular">
                내용은 3줄까지 보여집니다. 그 이상은 더보기로 볼 수 있습니다.
                검색어 텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트내용은
                3줄까지 보여집니다. 그 이상은 더보기로 볼 수 있습니다. 검색어
                텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트내용은 3줄까지
                보여집니다. 그 이상은 더보기로 볼 수 있습니다. 검색어
                텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트내용은 3줄까지
                보여집니다. 그 이상은 더보기로 볼 수 있습니다. 검색어
                텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
              </div>
              <div className="text-L_Gray Text-s-Regular">영화제목 · 2024</div>
            </div>
          ))}
      </div>
    </div>
  );
}
