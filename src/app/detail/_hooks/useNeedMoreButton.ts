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
    const handleResizeContentHeight = () => {
      if (type === "talk") {
        if (showSpoiler && contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
      } else {
        if (contentRef.current) {
          setContentHeight(contentRef.current?.scrollHeight);
        }
      }
    };

    handleResizeContentHeight();
    addEventListener("resize", handleResizeContentHeight);

    return () => removeEventListener("resize", handleResizeContentHeight);
  }, [contentRef, showSpoiler, type]);

  useEffect(() => {
    const isShowMoreButtonNeeded = (contentHeight: number) => {
      const maxHeight = device === "mobile" ? 63 : 72;
      return contentHeight > maxHeight;
    };

    setShowMoreButton(isShowMoreButtonNeeded(contentHeight));
  }, [contentHeight, device]);

  return { contentRef, showMoreButton };
}
