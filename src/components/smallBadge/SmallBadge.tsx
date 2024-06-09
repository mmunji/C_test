import clsx from "clsx";
import React from "react";

import getEmoji from "../../utils/getEmoji";
import hexToRGBA from "../../utils/hexToRGBA";

interface SmallBadgeProps {
  content: Badge;
  withoutContent?: boolean;
  size: "xs" | "sm" | "md";
}

export default function SmallBadge({
  content,
  withoutContent,
  size,
}: SmallBadgeProps) {
  const backgroundColor = hexToRGBA("#000000", 0.2);
  const emoji = getEmoji(content);

  return (
    <div
      className={clsx(
        "flex items-center justify-center gap-1 rounded-lg",
        size === "xs" && "h-[21px]",
        size === "sm" && "h-[29px]",
        size === "md" && "h-10",
        size === "md" ? "px-3" : "px-2",
      )}
      style={{ backgroundColor: backgroundColor }}
    >
      <p
        className={clsx(
          size === "xs" && "text-[14px]",
          size === "md" && "text-[16px]",
        )}
      >
        {emoji}
      </p>
      <p
        className={clsx(
          `text-Silver ${withoutContent && "hidden Tablet:block"}`,
          size === "xs" && "Text-xs-Regular",
          size === "sm" && "Text-s-Medium",
        )}
      >
        {content}
      </p>
    </div>
  );
}
