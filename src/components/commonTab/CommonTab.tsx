import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import useDevice from "@/hooks/useDevice";

interface CastAndCrewTab {
  tabs: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function CommonTab({
  tabs,
  activeTab,
  setActiveTab,
}: PropsWithChildren<CastAndCrewTab>) {
  const [widths, setWidths] = useState<(number | undefined)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { device } = useDevice();

  useEffect(() => {
    const newWidths = buttonRefs.current.map((button) => button?.scrollWidth);
    setWidths(newWidths);
  }, [tabs, device]);

  return (
    <section className="relative max-h-[40px] w-fit text-md">
      {tabs.map((tab, i) => {
        return (
          <button
            ref={(el) => {
              buttonRefs.current[i] = el;
            }}
            key={i}
            className={`px-3 pb-2 pt-1 Text-m-Bold Laptop:Text-l-Bold ${activeTab === tab ? "text-Silver" : "text-Gray"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        );
      })}

      <div
        style={
          activeTab === tabs[0]
            ? {
                transform: `translateX(${(widths[0] as number) / 2 - 10}px)`,
              }
            : activeTab === tabs[1]
              ? {
                  transform: `translateX(${(widths[1] as number) / 2 + (widths[0] as number) - 10}px)`,
                }
              : {
                  transform: `translateX(${(widths[2] as number) / 2 + (widths[0] as number) + (widths[1] as number) - 10}px)`,
                }
        }
        className="absolute bottom-[3px] h-0.5 w-5 bg-Primary transition-all duration-300 ease-out"
      />
    </section>
  );
}
