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

interface SpeechBubbleProps {
  dir: "top" | "bottom" | "left";
  exit?: boolean;
}

export default function SpeechBubble({
  children,
  dir,
  exit,
}: PropsWithChildren<SpeechBubbleProps>) {
  const [clickExit, setClickExiit] = useState(false);

  const arrowMap = {
    top: SpeechBubbleTop,
    bottom: SpeechBubbleBottom,
    left: SpeechBubbleLeft,
  };

  const arrowSrc = arrowMap[dir];

  useEffect(() => {
    if (exit) setClickExiit(true);
  }, [exit]);

  return (
    <AnimatePresence>
      {!clickExit && (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.275 } }}
          className="relative z-[5] flex h-[34px] w-fit items-center justify-between rounded-lg bg-Shade_1 py-2 pl-3 pr-1"
        >
          <p className="text-sm font-Medium leading-[18px] text-Silver">
            {children}
          </p>
          <Image
            src={CloseSm}
            alt="닫기"
            className="h-6 w-6 cursor-pointer"
            onClick={() => setClickExiit(true)}
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
