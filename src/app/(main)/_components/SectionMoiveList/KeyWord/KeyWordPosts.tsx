"use client";
import Image from "next/image";
import Link from "next/link";

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
  isVisible?: boolean;
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
  isVisible,
}: KeyWordInfoProps) {
  const highlightedText = (text: string, query: string | null) => {
    if (!query) return text;
    if (text.includes(query)) {
      const parts = text.split(new RegExp(`(${query})`, "gi"));
      return parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span className="Text-s-Bold Laptop:Text-m-Bold" key={index}>
            {part}
          </span>
        ) : (
          part
        ),
      );
    }

    return text;
  };

  return (
    <Link href={`/detail/${id}`}>
      <div
        className={`${isVisible ? "scale-100 opacity-100" : "scale-10 opacity-0"}  transition-transfor Text-s-Mediuim flex  flex-col gap-2 rounded-xl bg-D1_Gray px-4 py-4 duration-700 ease-in-out Tablet:px-7 Tablet:py-6 `}
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image
              height={24}
              width={24}
              className="h-6 w-6 rounded-[60px] object-cover"
              src={`data:image/jpeg;base64,${profile}
          `}
              alt="영화 포스터"
            />
            <h1 className="line-clamp-1 text-Silver Text-s-Medium">
              {nickname}
            </h1>
          </div>
          <div className="flex items-center  text-Silver Text-s-Bold ">
            <Image src={StarFillSm} alt="주황별" />
            <span>{star.toFixed(1)}</span>
          </div>
        </div>
        <div className=" h-[42px] text-Gray_Orange Text-s-Regular  Tablet:h-[48px] Laptop:Text-m-Regular">
          <span className="line-clamp-2">
            {highlightedText(content, keyword!)}
          </span>
        </div>
        <span className="line-clamp-1 text-L_Gray Text-s-Regular  Laptop:Text-m-Regular">
          {movieName} · {createdAt}
        </span>
      </div>
    </Link>
  );
}
