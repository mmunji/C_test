"use client";
import clsx from "clsx";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import Placeholder from "@/app/my/_components/Placeholder";
import ROUTES from "@/constants/routes";

import { StarFillMd } from "../../../../public/icons";

interface HistoryLogProps {
  log: Log[];
}

export default function HistoryLog({ log }: HistoryLogProps) {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab");

  const groupedReviews = useMemo(
    () =>
      log.reduce((acc: { [key: string]: Log[] }, review: Log) => {
        const day = dayjs(review.createdAt).format("YYYY.MM");
        if (!acc[day]) acc[day] = [];
        acc[day].push(review);
        return acc;
      }, {}),
    [log],
  );

  if (currentTab !== "평가로그") return null;
  if (!log.length) return <Placeholder type="log" />;
  return (
    <div className="">
      {Object.entries(groupedReviews).map(([yearMonth, review]) => (
        <div
          key={yearMonth}
          className="relative flex flex-col gap-5 Tablet:gap-6"
        >
          <div className="absolute left-[30px] top-8 -z-10 h-[calc(100%-12px)] w-px bg-D2_Gray Tablet:left-[47px]"></div>
          <div>
            <p className="text-Silver Text-l-Bold">{yearMonth}</p>
          </div>
          <div className="flex flex-col gap-5 Tablet:gap-6">
            {review.map((movie, i) => {
              let date: number | boolean = dayjs(movie.createdAt).date();
              if (i) date = dayjs(review[i - 1].createdAt).date() === date;
              return (
                <div key={movie.id} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 Tablet:gap-5">
                    <div className="flex items-center gap-2 Tablet:gap-6">
                      <span className="w-[19px] text-Gray_Orange Text-m-Bold">
                        {date}
                      </span>
                      <span
                        className={`inline-block h-[7px] w-[7px] rounded-full Tablet:h-[9px] Tablet:w-[9px] ${movie.category === "review" ? "bg-Primary" : "bg-Secondary"}`}
                      ></span>
                    </div>
                    <span className="text-L_Gray Text-s-Regular Tablet:Text-m-Regular">
                      {movie.movienm}
                    </span>
                  </div>
                  <div className="ml-12 flex items-center gap-5 Tablet:ml-[74px]">
                    <Link
                      href={`${ROUTES.DETAIL}/${movie.movieId}`}
                      className="relative h-[90px] w-[60px] Tablet:h-[150px] Tablet:w-[100px]"
                    >
                      <Image
                        fill
                        className="rounded-lg object-cover"
                        alt={movie.movienm}
                        src={`${movie?.poster_path ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}` : "/images/ssikongi/PNG/NoImage.png"}`}
                      />
                    </Link>
                    {movie.category === "keyword" ? (
                      <span className="text-Gray_Orange Text-m-Bold">
                        {movie.content}
                      </span>
                    ) : (
                      <div className="flex items-center gap-1">
                        <Image alt={"star"} src={StarFillMd} />
                        <span className="text-Gray_Orange Text-m-Bold">
                          {Number.isInteger(movie.star)
                            ? `${movie.star}.0`
                            : movie.star}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
