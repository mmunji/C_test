import Image from "next/image";

import { StarFillSm } from "@/../public/icons";
interface KeyWordInfoProps {
  movieName: string;
  star: number;
  content: string;
  keyword?: string;
  id: number;
  nickname: string;
  createdAt: string;
  profile?: string;
}

export default function KeyWordPosts({
  movieName,
  star,
  content,
  id,
  nickname,
  keyword,
  createdAt,
  profile,
}: KeyWordInfoProps) {
  return (
    <div className="Text-s-Mediuim flex h-full w-full flex-col gap-2 rounded-xl bg-D1_Gray px-4 py-4 Tablet:px-7 Tablet:py-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div
            className="h-[24px] w-[24px] rounded-[60px] "
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0) 100%), url(data:image/jpeg;base64,${profile}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <h1 className="text-Silver Text-s-Medium">{nickname}</h1>
        </div>
        <div className="flex text-Silver Text-s-Bold ">
          <Image src={StarFillSm} alt="주황별" />
          {star.toFixed(1)}
        </div>
      </div>
      <div className="line-clamp-2 text-Gray_Orange Text-s-Regular  Laptop:Text-m-Regular">
        {content}
      </div>
      <span className="line-clamp-1 text-L_Gray Text-s-Regular  Laptop:Text-m-Regular">
        {movieName} · {createdAt}
      </span>
    </div>
  );
}
