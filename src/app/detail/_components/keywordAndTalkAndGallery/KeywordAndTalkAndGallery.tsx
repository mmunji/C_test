"use client";

import { useState } from "react";

import CategoryTab from "../CategoryTab";
import Keyword from "./keyword/Keyword";

export default function KeywordAndTalkAndGallery() {
  const tabs = ["키워드", "톡", "정보"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <section>
      <CategoryTab {...{ tabs, activeTab, setActiveTab }} />
      {activeTab === tabs[0] && <Keyword />}
    </section>
  );
}
