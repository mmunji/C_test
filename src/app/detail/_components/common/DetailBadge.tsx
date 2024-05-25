import React from "react";

interface DetailBadgeProps {
  content: string;
}

export default function DetailBadge({ content }: DetailBadgeProps) {
  return (
    <p className="flex h-full items-center justify-center rounded-lg bg-black px-2 text-Silver Text-xs-Regular Tablet:Text-s-Medium">
      {content}
    </p>
  );
}
