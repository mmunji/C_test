import clsx from "clsx";

import { WithChildren } from "@/components/modal/_components/ModalMain";
import { useModalContext } from "@/components/modal/ModalContext";

export function ModalTitleWrapper({ children }: WithChildren) {
  const { isAlertModal } = useModalContext();
  return (
    <>
      <div
        className={clsx(
          isAlertModal ? "w-full gap-1 Tablet:w-[360px] Tablet:gap-3" : "gap-2",
          `flex flex-col items-center`,
        )}
      >
        {children}
      </div>
    </>
  );
}

export function ModalTitle({ children }: WithChildren) {
  const { hasDescription } = useModalContext();
  return (
    <div
      className={clsx(
        !hasDescription && "my-3",
        "text-Primary Text-m-Bold Tablet:Text-xl-Bold",
      )}
    >
      {children}
    </div>
  );
}

export function ModalDescription({ children }: WithChildren) {
  return (
    <div className="text-center Text-s-Medium Tablet:Text-m-Medium">
      {children}
    </div>
  );
}
