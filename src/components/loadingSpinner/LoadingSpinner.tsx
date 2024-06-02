import clsx from "clsx";

interface LoadingSpinnerProps {
  size: "xs" | "sm" | "md" | "lg";
  color: "primary" | "white";
}

export default function LoadingSpinner({ size, color }: LoadingSpinnerProps) {
  return (
    <div
      className={clsx(
        "animate-spin rounded-full border-2 border-t-transparent",
        { "h-4 w-4 border-2": size === "xs" },
        { "h-6 w-6 border-4": size === "sm" },
        { "h-9 w-9 border-4": size === "md" },
        { "h-12 w-12 border-4": size === "lg" },
        { "border-Primary": color === "primary" },
        { "border-White": color === "white" },
      )}
    />
  );
}
