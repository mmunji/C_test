import { cn } from "@/utils/cn";

export function TextSkeleton({ className }: { className: string }) {
  return (
    <div className={cn("animate-pulse rounded-lg bg-D2_Gray", className)}></div>
  );
}
