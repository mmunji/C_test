import { cva } from "class-variance-authority";

import {
  ButtonType,
  useDropdownContext,
} from "@/components/dropdown/DropdownContext";

interface DropdownItemProps {
  children: React.ReactNode;
  onClick: () => void;
  isFocused?: boolean;
}

export type Status = "active" | "inactive";

const styles = cva<{
  type: { [K in ButtonType]: string };
  isMobile: { [K in Status]: string };
  isFocused: { [K in Status]: string };
}>(
  "relative flex justify-center rounded-lg hover:bg-D2_Gray active:bg-D3_Gray",
  {
    variants: {
      type: {
        genre: "px-6 py-2",
        icon: "item-border p-3",
        text: "item-border px-3 py-2",
      },
      isMobile: {
        inactive: "Text-m-Regular",
        active: "Text-s-Regular",
      },
      isFocused: { active: "bg-D2_Gray", inactive: "" },
    },
    compoundVariants: [{ type: "genre", isMobile: "active", className: "p-2" }],
  },
);

export default function DropdownItem({
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
      className={styles({
        type,
        isMobile: isMobile ? "active" : "inactive",
        isFocused: isFocused ? "active" : "inactive",
      })}
    >
      {children}
    </button>
  );
}
