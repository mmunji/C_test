import clsx from "clsx";
import React from "react";

import DropdownContext, {
  useDropdownContext,
} from "@/components/dropdown/DropdownContext";
import useDropdown from "@/components/dropdown/useDropdown";
import useDevice from "@/hooks/useDevice";
import useOutsideClick from "@/hooks/useOutsideClick";

interface DropdownTriggerProps {
  children: React.ReactNode;
}

interface DropdownItemProps {
  children: React.ReactNode;
  onClick: () => void;
  isFocused?: boolean;
}

interface DropdownListProps {
  children: React.ReactNode;
  className?: string;
}

interface DropdownMainProps {
  children: React.ReactNode;
  type?: "genre" | "icon" | "text";
}

function DropdownTrigger({ children }: DropdownTriggerProps) {
  const { toggleDropdown } = useDropdownContext();

  return (
    <div className="hover:cursor-pointer" onClick={toggleDropdown}>
      {children}
    </div>
  );
}

function DropdownItem({
  children,
  onClick,
  isFocused = false,
}: DropdownItemProps) {
  const { type, toggleDropdown, isMobile } = useDropdownContext();
  const handleClick = () => {
    onClick();
    toggleDropdown();
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className={clsx(
        isFocused && "bg-D2_Gray",
        isMobile ? "Text-s-Regular" : "Text-m-Regular",
        type === "genre"
          ? [isMobile ? "px-6 py-2" : "p-2"]
          : [type === "icon" ? "item-border p-3" : "item-border px-3 py-2"],
        `relative flex justify-center rounded-lg hover:bg-D2_Gray active:bg-D3_Gray`,
      )}
    >
      {children}
    </button>
  );
}

function DropdownList({ children, className }: DropdownListProps) {
  const { isOpen, type, isMobile, height } = useDropdownContext();
  if (!isOpen) return null;
  const position = `right-1/2 top-[${height}px] translate-x-1/2 Tablet:right-0 Tablet:-translate-x-0`;
  return (
    <div
      className={clsx(
        type === "genre"
          ? [
              "grid grid-cols-2 p-2",
              isMobile
                ? "min-w-[158px] gap-x-2 gap-y-1"
                : "min-w-[198px] gap-x-5 gap-y-3",
            ]
          : ["flex flex-col gap-[9px]", isMobile ? "p-1" : "p-2"],
        `
  absolute z-50 whitespace-nowrap rounded-xl border border-D2_Gray bg-D1_Gray shadow-[0_4px_10px_0_rgba(0,0,0,0.3)]`,
        className ?? position,
      )}
    >
      {children}
    </div>
  );
}

function DropdownMain({ children, type = "text" }: DropdownMainProps) {
  const { isMobile } = useDevice();
  const { toggleDropdown, isOpen } = useDropdown();
  const ref = useOutsideClick(() => {
    if (isOpen) toggleDropdown();
  });
  const height = (ref.current?.children[0].clientHeight ?? 0) + 4;
  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggleDropdown,
        type,
        isMobile,
        height,
      }}
    >
      <div ref={ref} className="relative">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

const Dropdown = Object.assign(DropdownMain, {
  Trigger: DropdownTrigger,
  List: DropdownList,
  Item: DropdownItem,
});

export default Dropdown;
