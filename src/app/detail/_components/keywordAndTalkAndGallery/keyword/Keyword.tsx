"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import arrangeCenterHighKeyword from "@/app/detail/utils/arrangeCenterHighKeyword";
import { useGetMyKeyword } from "@/services/keyword/keywordQueries";

import SpeechBubble from "../../../../../components/speechBubble/SpeechBubble";
import KeywordForm from "./keywordForm";
import MyKeyword from "./myKeyword/MyKeyword";
import NewKeyword from "./NewKeyword";
import Nokeyword from "./Nokeyword";

interface KeywordProps {
  keywordsData: Keyword[];
  noKeyword: boolean;
  movieId: number;
  title: string;
  latestKeywords: Keyword[];
}

export default function Keyword({
  keywordsData,
  noKeyword,
  movieId,
  title,
  latestKeywords,
}: KeywordProps) {
  const top10s = keywordsData.slice(0, 10);
  const [shuffledTop26s, setShuffledTop26s] = useState(keywordsData);
  const { data: myKeyword } = useGetMyKeyword(movieId);
  const [isClickedEdit, setIsClickedEdit] = useState(false);

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

  const getRandomTextSize = () =>
    Math.random() < 0.5 ? "text-[14px]" : "text-[16px]";

  useEffect(() => {
    setShuffledTop26s(arrangeCenterHighKeyword([...keywordsData]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywordsData]);

  console.log(myKeyword);

  return (
    <section className="flex flex-col items-center Laptop:relative Laptop:rounded-xl Laptop:bg-D1_Gray Laptop:p-10 Desktop:p-[60px]">
      {noKeyword ? (
        <Nokeyword />
      ) : (
        <div className="mb-7 flex flex-wrap justify-center py-6 Tablet:mb-8 Tablet:max-w-[554px] Laptop:max-w-fit Laptop:py-0 Desktop:mb-5">
          {shuffledTop26s?.map((keyword, i) => (
            <p
              className={clsx(
                `mr-2 flex h-12 items-center leading-[140%] last:mr-0 ${keyword !== top1 && keyword !== top2 && keyword !== top3 && keyword !== top4 && keyword !== top5 && keyword !== top6 && keyword !== top7 && keyword !== top8 && keyword !== top8 && keyword !== top9 && keyword !== top10 && getRandomTextSize()} text-Gray_Orange`,
                keyword === top1 &&
                  "h-12 leading-[140%] text-Primary Text-xxxl-Bold",
                keyword === top2 &&
                  "h-12 text-[32px] font-extrabold leading-[140%] text-Tint_2",
                keyword === top3 &&
                  "h-12 text-[30px] font-extrabold leading-[140%] text-Tint_2",
                keyword === top4 &&
                  "h-12 text-[28px] font-extrabold leading-[140%] text-Tint_3",
                keyword === top5 &&
                  "h-12 text-[26px] font-extrabold leading-[140%] text-Tint_3",
                keyword === top6 &&
                  "h-12 text-[24px] font-extrabold leading-[140%] text-Tint_3",
                keyword === top7 &&
                  "h-12 text-[22px] font-extrabold leading-[140%] text-Tint_4",
                keyword === top8 &&
                  "h-12 text-[20px] font-extrabold leading-[140%] text-Tint_4",
                keyword === top9 &&
                  "h-12 text-[20px] font-extrabold leading-[140%] text-Tint_4",
                keyword === top10 &&
                  "h-12 text-[20px] font-extrabold leading-[140%] text-Tint_4",
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

      {!myKeyword?.res.ok && !isClickedEdit ? (
        <KeywordForm movieId={movieId} title={title} />
      ) : (
        !isClickedEdit && (
          <MyKeyword
            myKeyword={myKeyword?.data}
            isClickedEdit={isClickedEdit}
            setIsClickedEdit={setIsClickedEdit}
          />
        )
      )}

      {isClickedEdit && (
        <KeywordForm
          movieId={movieId}
          title={title}
          initialValue={myKeyword?.data.keyword}
          myKeywordId={myKeyword?.data.keywordId}
          isClickedEdit={isClickedEdit}
          setIsClickedEdit={setIsClickedEdit}
        />
      )}
      {!noKeyword && <NewKeyword latestKeywords={latestKeywords} />}
    </section>
  );
}
