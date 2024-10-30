import { cva } from "class-variance-authority";
import Link from "next/link";

import {
  ButtonType,
  useDropdownContext,
} from "@/components/dropdown/DropdownContext";
import { cn } from "@/utils/cn";

interface DropdownItemProps {
  children: React.ReactNode;
  onClick: () => void;
  isFocused?: boolean;
  href?: string;
  className?: string;
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
  href,
  className,
}: DropdownItemProps) {
  const { type, toggleDropdown } = useDropdownContext();
  const handleClick = () => {
    onClick();
    toggleDropdown();
  };

  return href ? (
    <Link
      onClick={toggleDropdown}
      href={href}
      className={cn(
        styles({
          type,
          isFocused: isFocused ? "active" : "inactive",
        }),
        className,
      )}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={handleClick}
      type="button"
      className={cn(
        styles({
          type,
          isFocused: isFocused ? "active" : "inactive",
        }),
        className,
      )}
    >
      {children}
    </button>
  );
}
