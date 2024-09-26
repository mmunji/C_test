import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import React, { ReactElement, useEffect } from "react";

import Modal from "@/components/modal/modal";
import ModalContext from "@/components/modal/ModalContext";
import Portal from "@/components/modal/portal";
import useModal from "@/components/modal/useModal";
import useOutsideClick from "@/hooks/useOutsideClick";

export interface WithChildren {
  children: React.ReactNode;
}
interface ModalMainProps extends WithChildren {
  isAlertModal: boolean;
  onClose: () => void;
  isOpen: boolean;
}

export default function ModalMain({
  children,
  onClose,
  isAlertModal,
  isOpen,
}: ModalMainProps) {
  const {
    isChecked,
    toggleChceked,
    detailedReason,
    selectedIndex,
    onDetailedReasonChange,
    onSelectedIndexChange,
    isDropdownOpen,
    setIsDropdownOpen,
  } = useModal(isOpen);

  const { buttons, checkbox, content, hasComponents } = React.Children.toArray(
    children,
  ).reduce<{
    buttons: ReactElement[];
    checkbox: ReactElement[];
    content: ReactElement[];
    hasComponents: {
      login: boolean;
      report: boolean;
      description: boolean;
    };
  }>(
    (acc, cur) => {
      if (React.isValidElement(cur)) {
        switch (cur.type) {
          case Modal.Button:
          case Modal.CancelButton:
            acc.buttons.push(cur);
            break;
          case Modal.Checkbox:
            acc.checkbox.push(cur);
            break;
          case Modal.Report:
            acc.hasComponents.report = true;
            acc.content.push(cur);
            break;
          case Modal.Login:
            acc.hasComponents.login = true;
            acc.content.push(cur);
            break;
          case Modal.Description:
            acc.hasComponents.description = true;
            acc.content.push(cur);
            break;
          default:
            acc.content.push(cur);
        }
      }
      return acc;
    },
    {
      buttons: [],
      checkbox: [],
      content: [],
      hasComponents: { login: false, report: false, description: false },
    },
  );
  const ref = useOutsideClick(() => {
    if (isOpen) onClose();
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        default:
          break;
      }
    };
    if (!isDropdownOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [onClose, isDropdownOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalContext.Provider
          value={{
            isAlertModal,
            onClose,
            isChecked,
            toggleChceked,
            hasCheckbox: !!checkbox.length,
            hasReport: hasComponents.report,
            hasDescription: hasComponents.description,
            detailedReason,
            selectedIndex,
            onDetailedReasonChange,
            onSelectedIndexChange,
            isDropdownOpen,
            setIsDropdownOpen,
          }}
        >
          <Portal selector="portal">
            <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[4px]">
              <div
                ref={ref}
                className={clsx(
                  hasComponents.login && "px-10 py-16",
                  isAlertModal
                    ? "gap-9 px-12 pb-10 pt-11"
                    : [!hasComponents.login && "gap-7 px-12 py-10"],
                  `fixed bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center rounded-xl bg-D1_Gray Tablet:static `,
                )}
              >
                {content}
                {buttons.length > 0 &&
                  (checkbox.length > 0 ? (
                    <div className="flex w-[372px] flex-col items-center justify-center gap-5">
                      <div className="flex items-center gap-2">{checkbox}</div>
                      <div className="flex w-full gap-3">{buttons}</div>
                    </div>
                  ) : (
                    <div className="flex w-[372px] gap-3">{buttons}</div>
                  ))}
              </div>
            </div>
          </Portal>
        </ModalContext.Provider>
      )}
    </AnimatePresence>
  );
}
