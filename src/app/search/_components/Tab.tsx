"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import useQueryString from "@/app/search/_hooks/useQueryString";
import useDevice from "@/hooks/useDevice";

export default function Tab({ children }: { children: React.ReactNode }) {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [tabWidths, setTabWidths] = useState<number[]>([]);
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab");
  const tabButtons = React.Children.toArray(children);
  const { device } = useDevice();

  useEffect(() => {
    if (tabsRef.current) {
      const widths = Array.from(tabsRef.current.children).map(
        (child) => (child as HTMLButtonElement).offsetWidth,
      );
      setTabWidths(widths);
    }
  }, [device]);

  const getActiveTabIndex = () => {
    if (!activeTab) return 0;
    return tabButtons.findIndex(
      (child) =>
        (child as React.ReactElement).props.children
          .toString()
          .split(" ")[0] === activeTab,
    );
  };

  const activeTabIndex = getActiveTabIndex();

  const translateX = tabWidths
    .slice(0, activeTabIndex)
    .reduce((acc, width) => acc + width, 0);

  return (
    <div
      ref={tabsRef}
      className="relative h-fit max-h-[40px] w-fit select-none text-md"
    >
      {children}
      <div
        style={{
          transform: `translateX(${translateX + tabWidths[activeTabIndex] / 2 - 10}px)`,
        }}
        className="absolute -bottom-[4px] h-0.5 w-5 bg-Primary transition-all duration-300 ease-out"
      />
    </div>
  );
}

export function TabButton({
  children,
  isDefault = false,
}: {
  children: React.ReactNode;
  isDefault?: boolean;
}) {
  const { query, tab } = useQueryString();
  const tabName = children?.toString().split(" ")[0];
  const isActiveTab = !tab ? isDefault : tab === tabName;
  return (
    <Link
      scroll={false}
      className={`px-3 pb-2 pt-1 Text-m-Bold Laptop:Text-l-Bold ${isActiveTab ? "text-Silver" : "text-Gray"}`}
      href={{ query: { tab: tabName, ...(query && { query }) } }}
    >
      {children}
    </Link>
  );
}
