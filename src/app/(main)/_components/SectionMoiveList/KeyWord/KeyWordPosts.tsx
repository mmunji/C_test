import Image from "next/image";

import { StarFillSm } from "@/../public/icons";
interface KeyWordInfoProps {
  movieName: string;
  star: number;
  content: string;
  keyword?: string;
  id: number;
  nickname: string;
}

export default function KeyWordPosts({
  movieName,
  star,
  content,
  id,
  nickname,
  keyword,
}: KeyWordInfoProps) {
  return (
    <div className="Text-s-Mediuim flex w-full flex-col gap-2 rounded-xl bg-D1_Gray px-6 py-5">
      <div className="flex justify-between">
        <h1 className="Text-s-Regular">{nickname}</h1>
        <div className="/Text-sm-Bold flex gap-1">
          <Image src={StarFillSm} alt="주황별" />
          {star}
        </div>
      </div>
      <div className="line-clamp-2 Text-s-Regular Laptop:Text-m-Regular">
        {content}
      </div>
      <span className="line-clamp-1 text-L_Gray Text-s-Regular  Laptop:Text-m-Regular">
        {movieName}
      </span>
    </div>
  );
}
