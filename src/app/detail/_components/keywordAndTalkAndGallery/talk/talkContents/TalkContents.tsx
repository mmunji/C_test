import { Dispatch, SetStateAction, useLayoutEffect, useState } from "react";

import { cn } from "@/utils/cn";

import Replies from "./replies/Replies";
import TalkContentsBody from "./TalkContentsBody";
import TalkContentsFooter from "./TalkContentsFooter";
import TalkContentsHeader from "./talkContentsHeader/TalkContentsHeader";

interface TalkContentsProps {
  index: number;
  length: number;
  talk: ReviewList;
  movieId: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setTalkId: Dispatch<SetStateAction<number | null>>;
}

export default function TalkContents({
  index,
  length,
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
    <div
      className={cn(
        "border-b-[1px] border-D1_Gray py-3 Tablet:py-5 Laptop:border-D2_Gray",
        index === length - 1 && "border-b-0",
      )}
    >
      <TalkContentsHeader
        talk={talk}
        setOpen={setOpen}
        setTalkId={setTalkId}
        movieId={movieId}
      />
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
          setShowReplies={setShowReplies}
        />
      )}
    </div>
  );
}
