import { useState } from "react";

import NoTalk from "./NoTalk";
import Rating from "./rating/Rating";
import TalkContents from "./talkContents/TalkContents";
import TalkHeader from "./TalkHeader";

export default function Talk() {
  const [noTalk, setNotalk] = useState(false);

  return (
    <section>
      <Rating />
      <div className="my-8 h-3 w-[100vw] translate-x-[-20px] bg-Black Tablet:translate-x-[-24px] Laptop:hidden" />

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
  );
}
