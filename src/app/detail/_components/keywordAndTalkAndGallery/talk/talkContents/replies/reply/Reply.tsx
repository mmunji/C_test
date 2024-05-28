import React from "react";

import ReplyBody from "./ReplyBody";
import ReplyFooter from "./ReplyFooter";
import ReplyHeader from "./ReplyHeader";

export default function Reply() {
  return (
    <section className="mt-5 Tablet:mt-6">
      <ReplyHeader />
      <ReplyBody />
      <ReplyFooter />
    </section>
  );
}
