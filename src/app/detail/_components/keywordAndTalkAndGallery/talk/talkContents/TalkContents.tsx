import { useLayoutEffect, useState } from "react";

import Replies from "./replies/Replies";
import TalkContentsBody from "./TalkContentsBody";
import TalkContentsFooter from "./TalkContentsFooter";
import TalkContentsHeader from "./talkContentsHeader/TalkContentsHeader";

interface TalkContentsProps {
  talk: ReviewList;
}

export default function TalkContents({ talk }: TalkContentsProps) {
  const spoiler = talk.spoiler;
  const [showSpoiler, setShowSpoiler] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  useLayoutEffect(() => {
    if (!spoiler) setShowSpoiler(true);
  }, [spoiler]);

  return (
    <div className="border-b-[1px] border-D1_Gray py-5 first:mt-4 last:border-b-0 Tablet:mt-5 Tablet:py-6 Laptop:border-D2_Gray">
      <TalkContentsHeader talk={talk} />
      <TalkContentsBody
        {...{ talk, showSpoiler, setShowSpoiler, showReplies }}
      />
      <TalkContentsFooter
        {...{ talk, showSpoiler, showReplies, setShowReplies }}
      />
      {showReplies && <Replies />}
    </div>
  );
}
