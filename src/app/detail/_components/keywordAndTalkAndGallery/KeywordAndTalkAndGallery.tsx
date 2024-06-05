"use client";

import useDevice from "@/hooks/useDevice";

import { useCategoryTabStore } from "../../_stores/useCategoryTabStore";
import CategoryTab from "./CategoryTab";
import Gallery from "./gallery/Gallery";
import Keyword from "./keyword/Keyword";
import Talk from "./talk/Talk";

export default function KeywordAndTalkAndGallery() {
  const tabs = ["키워드", "톡", "정보"];
  const { activeCategoryTab, setActiveCategoryTab } = useCategoryTabStore();
  const { device } = useDevice();

  const id = device === "mobile" || device === "tablet" ? "my-talk" : undefined;

  return (
    <section className="Laptop:hidden">
      <CategoryTab {...{ tabs, activeCategoryTab, setActiveCategoryTab }} />
      <section id={id}>
        {activeCategoryTab === tabs[0] && <Keyword />}
        {activeCategoryTab === tabs[1] && <Talk />}
        {activeCategoryTab === tabs[2] && <Gallery />}
      </section>
    </section>
  );
}
