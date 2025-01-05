import Image from "next/image";
import React from "react";

import { cn } from "@/utils/cn";

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
      className={cn(
        "flex items-center justify-center gap-1 rounded-lg px-3 py-2",
        size === "xs" && "px-2 py-[2px]",
        size === "sm" && "px-2 py-1",
      )}
      style={{ backgroundColor: backgroundColor }}
    >
      <p className={cn("relative h-3 w-3", size === "md" && "h-4 w-4")}>
        <Image unoptimized fill alt={`${content} 뱃지 이미지`} src={emoji} />
      </p>
      <p
        className={cn(
          `text-Silver Text-m-Medium ${withoutContent && "hidden Tablet:block"}`,
          size === "xs" && "Text-xs-Regular",
          size === "sm" && "Text-s-Medium",
        )}
      >
        {content}
      </p>
    </div>
  );
}
