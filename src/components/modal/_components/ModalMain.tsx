import React, { ReactElement, useEffect } from "react";

import Modal from "@/components/modal/modal";
import ModalContext from "@/components/modal/ModalContext";
import Portal from "@/components/modal/portal";
import useModal from "@/components/modal/useModal";
import useOutsideClick from "@/hooks/useOutsideClick";
import { cn } from "@/utils/cn";

interface ModalMainProps {
  isAlertModal: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function ModalMain({
  children,
  onClose,
  isAlertModal,
  title,
}: ModalMainProps) {
  const { isChecked, toggleCheckbox } = useModal();
  const ref = useOutsideClick(() => {
    onClose();
  });

  const { buttons, checkbox, content, hasComponents } = React.Children.toArray(
    children,
  ).reduce<{
    buttons: ReactElement[];
    checkbox: ReactElement[];
    content: ReactElement[];
    hasComponents: {
      login: boolean;
      checkbox: boolean;
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
            acc.hasComponents.checkbox = true;
            acc.checkbox.push(cur);
            break;

          case Modal.Login:
            acc.hasComponents.login = true;
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
      hasComponents: { login: false, checkbox: false },
    },
  );

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
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalContext.Provider
      value={{
        onClose,
        isChecked,
        toggleCheckbox,
        hasCheckbox: hasComponents.checkbox,
      }}
    >
      <Portal selector="portal">
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[4px]">
          <div
            ref={ref}
            className={cn(
              `fixed bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center gap-7 bg-BG px-5 Tablet:static Tablet:gap-7 Tablet:rounded-xl Tablet:bg-D1_Gray Tablet:px-12 Tablet:py-10`,
              hasComponents.login && "Tablet:px-10 Tablet:py-16",
              isAlertModal &&
                "static gap-4 rounded-xl bg-D1_Gray p-6 pb-5 Tablet:gap-9 Tablet:px-12 Tablet:pb-10 Tablet:pt-11",
            )}
          >
            <div
              className={cn(
                { "sr-only": hasComponents.login || isAlertModal },
                "mb-auto mt-12 w-full text-left text-Silver Text-l-Bold Tablet:hidden",
              )}
            >
              {title}
            </div>
            {content}
            {buttons.length > 0 &&
              (checkbox.length > 0 ? (
                <div
                  className={cn(
                    "mb-7 mt-auto flex w-full flex-col items-center justify-center gap-5 Tablet:mb-0",
                    isAlertModal && "mb-0",
                  )}
                >
                  <div className="flex items-center gap-2">{checkbox}</div>
                  <div className="flex w-full gap-2 Tablet:gap-3">
                    {buttons}
                  </div>
                </div>
              ) : (
                <div
                  className={cn(
                    "mb-7 mt-auto flex w-full gap-2 Tablet:mb-0 Tablet:gap-3",
                    isAlertModal && "mb-0",
                  )}
                >
                  {buttons}
                </div>
              ))}
          </div>
        </div>
      </Portal>
    </ModalContext.Provider>
  );
}
