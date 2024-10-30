"use client";
import { useState } from "react";

import ActivityHeader from "@/app/my/activity/Header";
import HistoryLog from "@/app/my/activity/HistoryLog";
import ReviewList from "@/app/my/activity/ReviewList";

interface ActivityContainerProps {
  reviews: PostreviewDTO[];
  log: Log[];
}

export default function ActivityContainer({
  reviews,
  log,
}: ActivityContainerProps) {
  const tabs = [`톡 ${reviews.length}`, `평가 로그 ${log.length}`];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeFilter, setActiveFilter] = useState<Filter>("desc");
  return (
    <>
      <ActivityHeader
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === tabs[0] ? (
        <ReviewList
          setActiveTab={setActiveTab}
          activeFilter={activeFilter}
          reviews={reviews}
        />
      ) : (
        <HistoryLog activeFilter={activeFilter} log={log} />
      )}
    </>
  );
}
