import clsx from "clsx";

import { WithChildren } from "@/components/modal/_components/ModalMain";
import { useModalContext } from "@/components/modal/ModalContext";

export function ModalTitleWrapper({ children }: WithChildren) {
  const { isAlertModal, isMobile } = useModalContext();
  return (
    <>
      <div
        className={clsx(
          isAlertModal
            ? [isMobile ? "w-full gap-1" : "w-[360px] gap-3"]
            : "gap-2",
          `flex flex-col items-center`,
        )}
      >
        {children}
      </div>
    </>
  );
}

export function ModalTitle({ children }: WithChildren) {
  const { isMobile, hasDescription } = useModalContext();
  return (
    <div
      className={clsx(
        `${isMobile ? "Text-m-Bold" : "Text-xl-Bold"} ${!hasDescription && "my-3"} text-Primary`,
      )}
    >
      {children}
    </div>
  );
}

export function ModalDescription({ children }: WithChildren) {
  const { isMobile } = useModalContext();

  return (
    <div
      className={clsx(
        isMobile ? "Text-s-Medium" : "Text-m-Medium",
        `text-center`,
      )}
    >
      {children}
    </div>
  );
}
