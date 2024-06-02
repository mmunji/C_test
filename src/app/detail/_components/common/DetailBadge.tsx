import React from "react";

import getEmoji from "../../../../utils/getEmoji";
import hexToRGBA from "../../../../utils/hexToRGBA";

interface DetailBadgeProps {
  content: Badge;
}

export default function DetailBadge({ content }: DetailBadgeProps) {
  const backgroundColor = hexToRGBA("#000000", 0.2);

  const emoji = getEmoji(content);

  return (
    <div
      className="flex h-[29px] items-center justify-center gap-1 rounded-lg px-2"
      style={{ backgroundColor: backgroundColor }}
    >
      <p>{emoji}</p>
      <p className="text-Silver Text-xs-Regular Tablet:Text-s-Medium">
        {content}
      </p>
    </div>
  );
}
