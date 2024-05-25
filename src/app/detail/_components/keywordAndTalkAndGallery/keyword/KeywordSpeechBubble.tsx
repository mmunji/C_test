import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import { CloseSm, SpeechBubbleBottom } from "../../../../../../public/icons";

export default function KeywordSpeechBubble() {
  const [clickExit, setClickExiit] = useState(false);

  return (
    <AnimatePresence>
      {!clickExit && (
        <motion.div
          initial={{ x: "-50%", y: "-100%" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="absolute left-1/2 top-[-13px] z-[5] flex h-[34px] w-[305px] translate-x-[-50%] translate-y-[-100%] items-center justify-between rounded-lg bg-Shade_1 py-2 pl-3 pr-1 Laptop:top-[13px]"
        >
          <p className="text-sm font-Medium leading-[18px] text-Silver">
            떠오르는 단어를 작성하거나, 키워드를 눌러보세요!
          </p>
          <Image
            src={CloseSm}
            alt="닫기"
            className="h-6 w-6 cursor-pointer"
            onClick={() => setClickExiit(true)}
          />

          <Image
            src={SpeechBubbleBottom}
            alt="꼬리표"
            className="absolute bottom-0 left-1/2 -z-10 translate-x-[-50%] translate-y-[50%]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
