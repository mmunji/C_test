"use client";

import { useState } from "react";

import CategoryTab from "./CategoryTab";
import Gallery from "./gallery/Gallery";
import Keyword from "./keyword/Keyword";
import Talk from "./talk/Talk";

export default function KeywordAndTalkAndGallery() {
  const tabs = ["키워드", "톡", "정보"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="Laptop:hidden">
      <CategoryTab {...{ tabs, activeTab, setActiveTab }} />
      {activeTab === tabs[0] && <Keyword />}
      {activeTab === tabs[1] && <Talk />}
      {activeTab === tabs[2] && <Gallery />}
    </section>
  );
}
