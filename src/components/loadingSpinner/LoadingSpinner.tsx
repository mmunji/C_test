import clsx from "clsx";

interface LoadingSpinnerProps {
  size: "sm" | "md" | "lg";
  color: "primary" | "white";
}

export default function LoadingSpinner({ size, color }: LoadingSpinnerProps) {
  return (
    <div
      className={clsx(
        "animate-spin rounded-full border-4 border-t-BG",
        { "h-6 w-6": size === "sm" },
        { "h-9 w-9": size === "md" },
        { "h-12 w-12": size === "lg" },
        { "border-Primary": color === "primary" },
        { "border-White": color === "white" },
      )}
    />
  );
}
