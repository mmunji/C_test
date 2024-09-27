import React from "react";

import ReplyBody from "./ReplyBody";
import ReplyFooter from "./ReplyFooter";
import ReplyHeader from "./ReplyHeader";

interface ReplyProps {
  reply: ReviewList;
}

export default function Reply({ reply }: ReplyProps) {
  return (
    <section className="mt-5 Tablet:mt-6">
      <ReplyHeader reply={reply} />
      <ReplyBody reply={reply} />
      <ReplyFooter />
    </section>
  );
}
