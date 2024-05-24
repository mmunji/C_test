"use client";

import { useState } from "react";

import { keywords } from "../../../fakeData";
import KeywordForm from "./keywordForm";
import KeywordSpeechBubble from "./KeywordSpeechBubble";
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
            <p className="" key={i}>
              {keyword}
            </p>
          ))}
        </div>
      )}
      <div className="hidden Laptop:block">
        <KeywordSpeechBubble />
      </div>

      <KeywordForm />
      <NewKeyword />
    </section>
  );
}
