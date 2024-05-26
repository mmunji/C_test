import { ButtonHTMLAttributes, MouseEvent } from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick: (e: MouseEvent) => void;
}

export default function Buttons({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>;
}
