import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import { GalleryTab, KeywordTab, TalkTab } from "../../../../public/icons";

interface CategoryTabProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function CategoryTab({
  tabs,
  activeTab,
  setActiveTab,
}: CategoryTabProps) {
  return (
    <div className="my-7 flex justify-center gap-3 Laptop:hidden">
      {tabs.map((tab, i) => {
        let imgSrc;
        switch (activeTab) {
          case tabs[0]:
            imgSrc = KeywordTab;
            break;

          case tabs[1]:
            imgSrc = TalkTab;
            break;

          case tabs[2]:
            imgSrc = GalleryTab;
            break;

          default:
            break;
        }
        return (
          <button
            key={i}
            className={`flex items-center gap-1 rounded-[38px] px-4 py-2 Text-m-Bold ${activeTab === tab && "bg-D1_Gray"}`}
            onClick={() => setActiveTab(tab)}
          >
            {activeTab === tab && <Image src={imgSrc} alt="" />}
            {tab}
          </button>
        );
      })}
    </div>
  );
}
