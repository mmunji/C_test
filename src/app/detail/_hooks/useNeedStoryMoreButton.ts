import { useEffect, useRef, useState } from "react";

import useDevice from "@/hooks/useDevice";

export default function useNeedStoryMoreButton() {
  const { device } = useDevice();
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [showMoreButton, setShowMoreButton] = useState(false);

  const maxHeight = device === "mobile" || device === "tablet" ? 63 : 196;

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      const newHeight = entry.target.scrollHeight;

      if (contentHeight !== newHeight) {
        setContentHeight(newHeight);
      }
    });

    resizeObserver.observe(contentElement);

    return () => {
      resizeObserver.unobserve(contentElement);
    };
  }, [contentHeight]);

  useEffect(() => {
    const isShowMoreButtonNeeded = (contentHeight: number) => {
      return contentHeight > maxHeight;
    };

    setShowMoreButton(isShowMoreButtonNeeded(contentHeight));
  }, [contentHeight, device, maxHeight]);

  return { contentRef, showMoreButton, maxHeight };
}
