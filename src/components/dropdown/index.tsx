import React from "react";

interface DropdownItemProps {
  children: React.ReactNode;
  onClick: () => void;
  isGenre?: boolean;
  isFocused?: boolean;
  hasIcon?: boolean;
}
interface DropdownMainProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isGenre?: boolean;
  className?: string;
}

function DropdownItem({
  children,
  onClick,
  isGenre = false,
  isFocused = false,
  hasIcon = false,
}: DropdownItemProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`relative ${isGenre ? "px-6 py-2" : hasIcon ? "p-3" : "px-3 py-2"} ${isFocused ? "bg-D2_Gray" : ""} ${!isGenre ? "item-border" : ""} flex justify-center rounded-lg hover:bg-D2_Gray active:bg-D3_Gray`}
    >
      {children}
    </button>
  );
}

function DropdownMain({
  children,
  className,
  isOpen,
  onClose,
  isGenre = false,
}: DropdownMainProps) {
  if (!isOpen) return null;
  return (
    <div
      className={`
      ${isGenre ? "grid min-w-[198px] grid-cols-2 gap-x-5 gap-y-3" : "flex flex-col gap-2"}
      absolute whitespace-nowrap rounded-xl border border-D2_Gray bg-D1_Gray p-2 shadow-[0_4px_10px_0_rgba(0,0,0,0.3)] ${className || ""}`}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childElement = child as React.ReactElement;
          return React.cloneElement(childElement, {
            onClick: () => {
              child.props.onClick();
              onClose();
            },
          });
        }
        return child;
      })}
    </div>
  );
}

const Dropdown = Object.assign(DropdownMain, {
  Item: DropdownItem,
});

export default Dropdown;
