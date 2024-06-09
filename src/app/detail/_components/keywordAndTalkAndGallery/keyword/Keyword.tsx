"use client";

import { useState } from "react";

import SpeechBubble from "../../../../../components/speechBubble/SpeechBubble";
import { keywords } from "../../../fakeData";
import KeywordForm from "./keywordForm";
import NewKeyword from "./NewKeyword";
import Nokeyword from "./Nokeyword";

export default function Keyword() {
  const [noKeyword, setNokeyword] = useState(false);

  return (
    <section className="flex flex-col items-center Laptop:relative Laptop:rounded-xl Laptop:bg-D1_Gray Laptop:p-10 Desktop:p-[60px]">
      {noKeyword ? (
        <Nokeyword />
      ) : (
        <div className="mb-7 flex flex-wrap justify-center gap-2 py-6 Tablet:mb-8 Tablet:max-w-[554px] Laptop:max-w-fit Laptop:py-0 Desktop:mb-5">
          {keywords.map((keyword, i) => (
            <p className="text-Gray_Orange" key={i}>
              {keyword}
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
      <NewKeyword />
    </section>
  );
}
