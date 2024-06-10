"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import arrangeCenterHighKeyword from "@/app/detail/utils/arrangeCenterHighKeyword";

import SpeechBubble from "../../../../../components/speechBubble/SpeechBubble";
import KeywordForm from "./keywordForm";
import NewKeyword from "./NewKeyword";
import Nokeyword from "./Nokeyword";

interface KeywordProps {
  keywordsData: Keyword[];
  noKeyword: boolean;
  movieId: number;
}

export default function Keyword({
  keywordsData,
  noKeyword,
  movieId,
}: KeywordProps) {
  const sortedData = keywordsData.sort((a, b) => b.count - a.count);
  const top26s = sortedData.slice(0, 26);
  const top10s = sortedData.slice(0, 10);

  const top1 = top10s[0];
  const top2 = top10s[1];
  const top3 = top10s[2];
  const top4 = top10s[3];
  const top5 = top10s[4];
  const top6 = top10s[5];
  const top7 = top10s[6];
  const top8 = top10s[7];
  const top9 = top10s[8];
  const top10 = top10s[9];

  const [shuffledTop26s, setShuffledTop26s] = useState(top26s);

  const reversedKeywords = [...(keywordsData || [])].reverse();
  const latestKeywords = reversedKeywords.slice(0, 5);

  const getRandomTextSize = () =>
    Math.random() < 0.5 ? "text-[12px]" : "text-[14px]";

  useEffect(() => {
    setShuffledTop26s(arrangeCenterHighKeyword([...top26s]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywordsData]);
  console.log(shuffledTop26s);

  return (
    <section className="flex flex-col items-center Laptop:relative Laptop:rounded-xl Laptop:bg-D1_Gray Laptop:p-10 Desktop:p-[60px]">
      {noKeyword ? (
        <Nokeyword />
      ) : (
        <div className="mb-7 flex flex-wrap justify-center gap-2 py-6 Tablet:mb-8 Tablet:max-w-[554px] Laptop:max-w-fit Laptop:py-0 Desktop:mb-5">
          {shuffledTop26s?.map((keyword, i) => (
            <p
              className={clsx(
                `flex items-center ${keyword !== top1 && keyword !== top2 && keyword !== top3 && keyword !== top4 && keyword !== top5 && keyword !== top6 && keyword !== top7 && keyword !== top8 && keyword !== top8 && keyword !== top9 && keyword !== top10 && getRandomTextSize()} text-Gray_Orange`,
                keyword === top1 && "text-Primary Text-xxxl-Bold",
                keyword === top2 &&
                  "text-[32px] font-extrabold leading-[140%] text-Tint_2",
                keyword === top3 &&
                  "text-[30px] font-extrabold leading-[140%] text-Tint_2",
                keyword === top4 &&
                  "text-[28px] font-extrabold leading-[140%] text-Tint_3",
                keyword === top5 &&
                  "text-[26px] font-extrabold leading-[140%] text-Tint_3",
                keyword === top6 &&
                  "text-[24px] font-extrabold leading-[140%] text-Tint_3",
                keyword === top7 &&
                  "text-[22px] font-extrabold leading-[140%] text-Tint_4",
                keyword === top8 &&
                  "text-[20px] font-extrabold leading-[140%] text-Tint_4",
                keyword === top9 &&
                  "text-[20px] font-extrabold leading-[140%] text-Tint_4",
                keyword === top10 &&
                  "text-[20px] font-extrabold leading-[140%] text-Tint_4",
              )}
              key={i}
            >
              {keyword?.keyword}
            </p>
          ))}
        </div>
      )}
      <div className="hidden w-[305px] Laptop:absolute Laptop:left-1/2 Laptop:top-0 Laptop:block Laptop:translate-x-[-50%] Laptop:translate-y-[-50%]">
        <SpeechBubble dir="bottom">
          떠오르는 단어를 작성하거나, 키워드를 눌러보세요!
        </SpeechBubble>
      </div>

      <KeywordForm movieId={movieId} />
      {!noKeyword && <NewKeyword latestKeywords={latestKeywords} />}
    </section>
  );
}
