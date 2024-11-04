import { cva } from "class-variance-authority";

import {
  ButtonType,
  useDropdownContext,
} from "@/components/dropdown/DropdownContext";
import { cn } from "@/utils/cn";

interface DropdownListProps {
  children: React.ReactNode;
  className?: string;
}

const styles = cva<{
  type: { [K in ButtonType]: string };
}>(
  "absolute w-max z-50 whitespace-nowrap rounded-xl border border-D2_Gray bg-D1_Gray shadow-[0_4px_10px_0_rgba(0,0,0,0.3)]",
  {
    variants: {
      type: {
        genre:
          "grid grid-cols-2 p-2 gap-x-2 gap-y-1 Tablet:gap-x-5 Tablet:gap-y-3",
        icon: "",
        text: "",
      },
    },
    compoundVariants: [
      {
        type: ["text", "icon"],
        className: "flex flex-col gap-[9px]",
      },
      {
        type: ["text", "icon"],
        className: "p-1 Tablet:p-2",
      },
    ],
  },
);

export default function DropdownList({
  children,
  className,
}: DropdownListProps) {
  const { isOpen, type, height } = useDropdownContext();
  if (!isOpen) return null;
  return (
    <div
      style={{ top: `${className ? "inherit" : height}px` }}
      className={cn(styles({ type }), className || "left-1/2 -translate-x-1/2")}
    >
      {children}
    </div>
  );
}
