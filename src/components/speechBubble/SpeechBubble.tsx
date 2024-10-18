import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { PropsWithChildren, useEffect, useState } from "react";

import {
  CloseSm,
  SpeechBubbleBottom,
  SpeechBubbleLeft,
  SpeechBubbleTop,
} from "../../../public/icons";

type NudgeId = "Keyword" | "Rating" | "SimilarTastesMovie" | "WatchedMovie";

interface SpeechBubbleProps {
  dir: "top" | "bottom" | "left";
  id: NudgeId | null;
  exit?: boolean;
}

export default function SpeechBubble({
  children,
  dir,
  id,
  exit,
}: PropsWithChildren<SpeechBubbleProps>) {
  const [isVisible, setIsVisible] = useState(true);

  const arrowMap = {
    top: SpeechBubbleTop,
    bottom: SpeechBubbleBottom,
    left: SpeechBubbleLeft,
  };

  const arrowSrc = arrowMap[dir];

  const handleClose = () => {
    if (id) localStorage.setItem(`nudge-${id}`, "hidden");
    setIsVisible(false);
  };

  useEffect(() => {
    const target = localStorage.getItem(`nudge-${id}`);
    setIsVisible(!target || target !== "hidden");
  }, [id]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0,
            transition: { duration: 0.275 },
          }}
          className="relative z-[5] flex h-[34px] w-fit items-center justify-between rounded-lg bg-Shade_1 py-2 pl-3 pr-1"
        >
          <p className="text-sm font-Medium leading-[18px] text-Silver">
            {children}
          </p>
          <Image
            src={CloseSm}
            alt="닫기"
            className="h-6 w-6 cursor-pointer"
            onClick={handleClose}
          />

          <Image
            src={arrowSrc}
            alt="꼬리표"
            className={clsx(
              "absolute -z-10",
              dir === "bottom" &&
                "bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%]",
              dir === "top" &&
                "left-1/2 top-0 translate-x-[-50%] translate-y-[-50%]",
              dir === "left" &&
                "left-0 top-1/2 translate-x-[-50%] translate-y-[-50%]",
            )}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
