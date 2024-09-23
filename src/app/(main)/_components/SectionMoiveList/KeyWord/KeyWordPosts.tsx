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
}

export default function KeyWordPosts({
  movieName,
  star,
  content,
  id,
  nickname,
  keyword,
  createdAt,
}: KeyWordInfoProps) {
  return (
    <div className="Text-s-Mediuim flex h-full w-full flex-col gap-2 rounded-xl bg-D1_Gray px-6 py-5">
      <div className="flex justify-between">
        <h1 className="text-Silver Text-s-Medium">{nickname}</h1>
        <div className="flex text-Silver Text-s-Bold ">
          <Image src={StarFillSm} alt="주황별" />
          {star}
        </div>
      </div>
      <div className="line-clamp-2 h-12 text-Gray_Orange Text-s-Regular  Laptop:Text-m-Regular">
        {content}
      </div>
      <span className="line-clamp-1 text-L_Gray Text-s-Regular  Laptop:Text-m-Regular">
        {movieName} · {createdAt}
      </span>
    </div>
  );
}
