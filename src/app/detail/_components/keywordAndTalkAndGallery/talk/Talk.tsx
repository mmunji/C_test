"use client";

import { useState } from "react";

import DividingLine from "../../common/DividingLine";
import NoTalk from "./NoTalk";
import Rating from "./rating/Rating";
import TalkContents from "./talkContents/TalkContents";
import TalkHeader from "./TalkHeader";

export default function Talk() {
  const [noTalk, setNotalk] = useState(false);

  return (
    <section>
      <Rating />
      <DividingLine />

      <section className="Laptop:rounded-xl Laptop:bg-D1_Gray Laptop:p-8">
        <TalkHeader />
        {noTalk ? (
          <NoTalk />
        ) : (
          <>
            {Array(10)
              .fill(null)
              .map((_, i) => (
                <TalkContents key={i} />
              ))}
          </>
        )}
      </section>
    </section>
  );
}
