import clsx from "clsx";

interface LoadingSpinnerProps {
  size: "xs" | "sm" | "md" | "lg" | "2xl" | "3xl";
  color: "primary" | "white";
}

export function FullLoadingSpinner() {
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/40 backdrop-blur-[3px]">
      <div className="fixed left-1/2 top-1/2 z-[51] -translate-x-1/2 -translate-y-1/2">
        <LoadingSpinner size="3xl" color="primary" />
      </div>
    </div>
  );
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
        { "h-16 w-16 border-4": size === "2xl" },
        { "h-20 w-20 border-4": size === "3xl" },
        { "border-Primary": color === "primary" },
        { "border-White": color === "white" },
      )}
    />
  );
}
