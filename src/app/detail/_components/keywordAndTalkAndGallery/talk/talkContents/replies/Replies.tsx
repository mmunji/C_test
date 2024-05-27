import React from "react";

import Reply from "./reply/Reply";
import ReplyForm from "./ReplyForm";

export default function Replies() {
  return (
    <div className="ml-9 mt-2 Tablet:ml-14 Laptop:ml-[52px]">
      <ReplyForm />
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <Reply key={i} />
        ))}
    </div>
  );
}
