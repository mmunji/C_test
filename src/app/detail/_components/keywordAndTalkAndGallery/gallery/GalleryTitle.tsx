import React from "react";

interface GalleryTitleProps {
  content: "제작진" | "출연";
}

export default function GalleryTitle({ content }: GalleryTitleProps) {
  return <p className="mb-3 text-White Text-m-Bold">{content}</p>;
}
