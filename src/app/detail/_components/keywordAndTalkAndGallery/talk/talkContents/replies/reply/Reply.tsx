import React from "react";

import ReplyBody from "./ReplyBody";
import ReplyFooter from "./ReplyFooter";
import ReplyHeader from "./ReplyHeader";

interface ReplyProps {
  reply: ReviewList;
  movieId: number;
  parentReviewId: number;
}

export default function Reply({ reply, movieId, parentReviewId }: ReplyProps) {
  return (
    <section className="mt-5 Tablet:mt-6">
      <ReplyHeader reply={reply} />
      <ReplyBody reply={reply} />
      <ReplyFooter
        reply={reply}
        movieId={movieId}
        parentReviewId={parentReviewId}
      />
    </section>
  );
}
