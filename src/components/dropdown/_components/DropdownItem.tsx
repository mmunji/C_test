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
  isFocused: { [K in Status]: string };
}>(
  "relative flex justify-center rounded-lg hover:bg-D2_Gray active:bg-D3_Gray Text-s-Regular Tablet:Text-m-Regular",
  {
    variants: {
      type: {
        genre: "Tablet:px-6 Tablet:py-2 p-2",
        icon: "item-border p-3",
        text: "item-border px-3 py-2",
      },
      isFocused: { active: "bg-D2_Gray", inactive: "" },
    },
  },
);

export default function DropdownItem({
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
      className={styles({
        type,
        isFocused: isFocused ? "active" : "inactive",
      })}
    >
      {children}
    </button>
  );
}
