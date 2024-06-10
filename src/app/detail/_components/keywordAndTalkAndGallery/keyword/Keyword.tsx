"use client";

import SpeechBubble from "../../../../../components/speechBubble/SpeechBubble";
import KeywordForm from "./keywordForm";
import NewKeyword from "./NewKeyword";
import Nokeyword from "./Nokeyword";

interface KeywordProps {
  keywordsData: Keyword[];
  noKeyword: boolean;
}

export default function Keyword({ keywordsData, noKeyword }: KeywordProps) {
  const reversedKeywords = [...(keywordsData || [])].reverse();
  const keywords = reversedKeywords.slice(0, 26);
  const latestKeywords = reversedKeywords.slice(0, 5);
  console.log(keywords);

  return (
    <section className="flex flex-col items-center Laptop:relative Laptop:rounded-xl Laptop:bg-D1_Gray Laptop:p-10 Desktop:p-[60px]">
      {noKeyword ? (
        <Nokeyword />
      ) : (
        <div className="mb-7 flex flex-wrap justify-center gap-2 py-6 Tablet:mb-8 Tablet:max-w-[554px] Laptop:max-w-fit Laptop:py-0 Desktop:mb-5">
          {keywords?.map((keyword, i) => (
            <p className="text-Gray_Orange" key={i}>
              {keyword.keyword}
            </p>
          ))}
        </div>
      )}
      <div className="hidden w-[305px] Laptop:absolute Laptop:left-1/2 Laptop:top-0 Laptop:block Laptop:translate-x-[-50%] Laptop:translate-y-[-50%]">
        <SpeechBubble dir="bottom">
          떠오르는 단어를 작성하거나, 키워드를 눌러보세요!
        </SpeechBubble>
      </div>

      <KeywordForm />
      <NewKeyword latestKeywords={latestKeywords} />
    </section>
  );
}
