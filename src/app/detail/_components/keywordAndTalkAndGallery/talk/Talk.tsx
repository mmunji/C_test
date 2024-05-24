import { useState } from "react";

import NoTalk from "./NoTalk";
import Rating from "./rating/Rating";
import TalkHeader from "./TalkHeader";

export default function Talk() {
  const [noTalk, setNotalk] = useState(true);

  return (
    <section>
      <Rating />
      <div className="my-8 h-3 w-[100vw] translate-x-[-20px] bg-Black Tablet:translate-x-[-24px] Laptop:hidden" />

      <TalkHeader />
      {noTalk && <NoTalk />}
    </section>
  );
}
