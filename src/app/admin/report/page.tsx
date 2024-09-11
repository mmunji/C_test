"use client";
import { useEffect, useState } from "react";

import { adminAPIs } from "@/services/admin/adminAPIs";

import TableList from "../_components/TableList";
export default function Report() {
  const [ReportList, setReportList] = useState();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await adminAPIs.ReportsList();
        setReportList(response);
      } catch (error) {
        console.error("영화를 가져오는 중 오류 발생:", error);
      }
    };

    fetchMovie();
  }, []);
  return (
    <div className="">
      {ReportList && <TableList rowData={ReportList} type={"report"} />}
    </div>
  );
}
