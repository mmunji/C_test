import { Dispatch, SetStateAction, useLayoutEffect, useState } from "react";

import Replies from "./replies/Replies";
import TalkContentsBody from "./TalkContentsBody";
import TalkContentsFooter from "./TalkContentsFooter";
import TalkContentsHeader from "./talkContentsHeader/TalkContentsHeader";

interface TalkContentsProps {
  talk: ReviewList;
  movieId: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setTalkId: Dispatch<SetStateAction<number | null>>;
}

export default function TalkContents({
  talk,
  movieId,
  setOpen,
  setTalkId,
}: TalkContentsProps) {
  const spoiler = talk.spoiler;
  const [showSpoiler, setShowSpoiler] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  useLayoutEffect(() => {
    if (!spoiler) setShowSpoiler(true);
  }, [spoiler]);

  return (
    <div className="border-b-[1px] border-D1_Gray py-5 first:mt-4 last:border-b-0 Tablet:mt-5 Tablet:py-6 Laptop:border-D2_Gray">
      <TalkContentsHeader talk={talk} setOpen={setOpen} setTalkId={setTalkId} />
      <TalkContentsBody
        {...{ talk, showSpoiler, setShowSpoiler, showReplies }}
      />
      <TalkContentsFooter
        {...{ talk, showSpoiler, showReplies, setShowReplies, movieId }}
      />
      {showReplies && (
        <Replies
          movieId={movieId}
          parentReviewId={talk.id}
          setOpen={setOpen}
          setTalkId={setTalkId}
        />
      )}
    </div>
  );
}
