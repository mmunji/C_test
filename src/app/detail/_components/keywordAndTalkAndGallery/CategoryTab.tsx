import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import {
  chartBar,
  ChatLineSm,
  MoreGridSmall,
} from "../../../../../public/icons";

interface CategoryTabProps {
  tabs: string[];
  activeCategoryTab: string;
  setActiveCategoryTab: (category: string) => void;
}

export default function CategoryTab({
  tabs,
  activeCategoryTab,
  setActiveCategoryTab,
}: CategoryTabProps) {
  return (
    <div className="my-7 flex justify-center gap-3 Laptop:hidden">
      {tabs.map((tab, i) => {
        let imgSrc;
        switch (activeCategoryTab) {
          case tabs[0]:
            imgSrc = chartBar;
            break;

          case tabs[1]:
            imgSrc = ChatLineSm;
            break;

          case tabs[2]:
            imgSrc = MoreGridSmall;
            break;

          default:
            break;
        }
        return (
          <button
            key={i}
            className={`flex items-center gap-1 rounded-[38px] px-4 py-2 Text-m-Bold ${activeCategoryTab === tab && "bg-D1_Gray"}`}
            onClick={() => setActiveCategoryTab(tab)}
          >
            {activeCategoryTab === tab && <Image src={imgSrc} alt="" />}
            {tab}
          </button>
        );
      })}
    </div>
  );
}
