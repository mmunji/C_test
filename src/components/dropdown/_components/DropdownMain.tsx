import React from "react";

import DropdownContext from "@/components/dropdown/DropdownContext";
import useDropdown from "@/components/dropdown/useDropdown";
import useOutsideClick from "@/hooks/useOutsideClick";

interface DropdownMainProps {
  children: React.ReactNode;
  type?: "genre" | "icon" | "text";
}

export default function DropdownMain({
  children,
  type = "text",
}: DropdownMainProps) {
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
        height,
      }}
    >
      <div ref={ref} className="relative">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}
