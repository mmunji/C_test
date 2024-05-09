import React from "react";

import DropdownContext, {
  useDropdownContext,
} from "@/components/dropdown/dropdownContext";
import useDropdown from "@/components/dropdown/useDropdown";
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
  const { type, toggleDropdown } = useDropdownContext();
  const handleClick = () => {
    onClick();
    toggleDropdown();
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className={`relative ${type === "genre" ? "px-6 py-2" : type === "icon" ? "item-border p-3" : "item-border px-3 py-2"} ${isFocused ? "bg-D2_Gray" : ""} flex justify-center rounded-lg hover:bg-D2_Gray active:bg-D3_Gray`}
    >
      {children}
    </button>
  );
}

function DropdownList({ children, className }: DropdownListProps) {
  const { isOpen, type } = useDropdownContext();

  if (!isOpen) return null;
  return (
    <div
      className={`
  ${type === "genre" ? "grid min-w-[198px] grid-cols-2 gap-x-5 gap-y-3" : "flex flex-col gap-2"}
  absolute whitespace-nowrap rounded-xl border border-D2_Gray bg-D1_Gray p-2 shadow-[0_4px_10px_0_rgba(0,0,0,0.3)] ${className || ""}`}
    >
      {children}
    </div>
  );
}

function DropdownMain({ children, type = "text" }: DropdownMainProps) {
  const { toggleDropdown, isOpen } = useDropdown();
  const ref = useOutsideClick(() => {
    if (isOpen) toggleDropdown();
  });

  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown, type }}>
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
