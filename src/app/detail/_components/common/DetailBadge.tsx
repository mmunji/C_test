import React from "react";

import hexToRGBA from "../../../../utils/hexToRGBA";

interface DetailBadgeProps {
  content: Badge;
}

export default function DetailBadge({ content }: DetailBadgeProps) {
  const backgroundColor = hexToRGBA("#000000", 0.2);

  return (
    <p
      className="flex h-full items-center justify-center rounded-lg px-2 text-Silver Text-xs-Regular Tablet:Text-s-Medium"
      style={{ backgroundColor: backgroundColor }}
    >
      {content}
    </p>
  );
}
