import clsx from "clsx";

export default function SearchResponsiveContainer({
  children,
  dataLength,
}: {
  children: React.ReactNode;
  dataLength?: number;
}) {
  return (
    <div
      className={clsx("flex flex-col gap-3", {
        "Tablet:gap-2 Laptop:gap-5": dataLength,
        "Tablet:gap-5": !dataLength,
      })}
    >
      {children}
    </div>
  );
}
