"use client";
import { useEffect, useState } from "react";

import { adminAPIs } from "@/services/admin/adminAPIs";

import TableList from "../_components/TableList";

export default function Feedback() {
  const [FeedbackData, setFeedbackData] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await adminAPIs.FeedbackList();
        setFeedbackData(response);
      } catch (error) {
        console.error("영화를 가져오는 중 오류 발생:", error);
      }
    };

    fetchMovie();
  }, []);
  return (
    <div className="">
      {FeedbackData && <TableList rowData={FeedbackData} type={"Feedback"} />}
    </div>
  );
}
