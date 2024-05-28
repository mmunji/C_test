import { useEffect, useRef, useState } from "react";

import useDevice from "@/hooks/useDevice";

export default function useNeedMoreButton(
  type: "talk" | "reply",
  showSpoiler?: boolean,
) {
  const { device } = useDevice();
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [showMoreButton, setShowMoreButton] = useState(false);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      const newHeight = entry.target.scrollHeight;
      if (type === "talk" && showSpoiler) {
        if (contentHeight !== newHeight) {
          setContentHeight(newHeight);
        }
      } else {
        if (contentHeight !== newHeight) {
          setContentHeight(newHeight);
        }
      }
    });

    resizeObserver.observe(contentElement);

    return () => {
      resizeObserver.unobserve(contentElement);
    };
  }, [contentHeight, type, showSpoiler]);

  useEffect(() => {
    const isShowMoreButtonNeeded = (contentHeight: number) => {
      const maxHeight = device === "mobile" ? 63 : 72;
      return contentHeight > maxHeight;
    };

    setShowMoreButton(isShowMoreButtonNeeded(contentHeight));
  }, [contentHeight, device]);

  return { contentRef, showMoreButton };
}
