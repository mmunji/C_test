"use client";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children: React.ReactNode;
  href?: string;
}

const ButtonVariants = cva(`flex justify-center`, {
  variants: {
    variant: {
      icon: "p-2 rounded-lg hover:bg-Opacity_W10 active:bg-Opacity_W15",
      grey: "bg-D2_Gray text-Gray hover:bg-D3_Gray hover:text-Gray_Orange active:bg-Gray active:text-Silver disabled:bg-D2_Gray disabled:text-Gray",
      orange:
        "text-Silver bg-Primary hover:bg-Shade_1 active:bg-Shade_3 disabled:bg-D2_Gray disabled:text-Gray",
      line: "bg-BG text-Gray_Orange border border-Gray hover:border-Silver hover:text-Silver active:bg-D1_Gray",
      text: "p-2 ",
      textIconR: "p-2 pr-1",
      textIconL: "p-2 pl-1",
    },
    size: {
      full: "py-3 px-5 rounded-xl",
      xl: "py-3 px-5 w-[360px] rounded-xl",
      lg: "py-3 px-5 w-[180px] rounded-xl",
      md: "py-2 px-4 rounded-lg w-fit",
      sm: "py-2 px-3 rounded-lg w-fit",
      xs: "py-1 px-2 rounded-lg w-fit",
    },
    focus: {
      "1": "",
      "2": "",
    },
  },
  compoundVariants: [
    {
      variant: ["text", "textIconL", "textIconR"],
      className:
        "rounded-lg Text-m-Medium hover:bg-Opacity_W10 hover:text-Silver active:bg-Opacity_W15 disabled:text-Gray",
    },
    {
      variant: ["text", "textIconL", "textIconR"],
      focus: "1",
      className: "text-Primary",
    },
    {
      variant: "text",
      focus: "2",
      className: "bg-Primary text-Silver",
    },
    {
      variant: ["textIconL", "textIconR"],
      className: "flex items-center gap-1",
    },
    {
      variant: "grey",
      focus: "1",
      className: "bg-Primary text-Silver",
    },
    {
      variant: "line",
      focus: "1",
      className: "bg-D2_Gray text-Silver",
    },
    {
      variant: "line",
      size: "md",
      className: "py-3 px-5 w-[112px]",
    },
    {
      variant: "line",
      size: "sm",
      className: "py-2 px-4 w-fit",
    },
  ],
});

export default function Button({
  children,
  type = "button",
  variant,
  size,
  focus,
  className,
  href,
  ...rest
}: ButtonProps) {
  return href ? (
    <Link
      className={clsx(ButtonVariants({ size, variant, focus, className }))}
      href={href}
    >
      {children}
    </Link>
  ) : (
    <button
      {...rest}
      type={type}
      className={ButtonVariants({ size, variant, focus, className })}
    >
      {children}
    </button>
  );
}
