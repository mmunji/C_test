"use client";
import "ag-grid-community/styles/ag-grid.css"; // AG-Grid 기본 스타일
import "ag-grid-community/styles/ag-theme-alpine.css"; // AG-Grid 테마

import { ColDef, RowNode } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import dayjs from "dayjs";
import { useState } from "react";

import Modal from "@/components/modal/modal";

import FeedBackModal from "./Modal/FeedbackModal";
import ReportModal from "./Modal/ReportModal";
interface RowData {
  id: number;
  user_email: string;
  user_nickName?: string;
  content?: string;
  createdAt?: string | Date;
  nickname?: string;
  status?: boolean;
  review_content?: string;
}

interface TableListProps {
  rowData: RowData[];
  type: string;
}

export default function TableList({ rowData, type }: TableListProps) {
  const [ReportColumnDefs] = useState<ColDef[]>([
    {
      headerName: "ID",
      field: "id",
      width: 60,
      sort: "asc",
    },
    { headerName: "일시", field: "createdAt", width: 200 },
    { headerName: "닉네임", field: "user_nickName", width: 200 },
    { headerName: "카테고리", field: "category", width: 200 },
    { headerName: "신고한 리뷰", field: "content", width: 200 },
    { headerName: "신고 내용", field: "review_content", flex: 1 },
  ]);
  const [columnDefs] = useState<ColDef[]>([
    { headerName: "ID", field: "id", width: 60, sort: "asc" },
    { headerName: "이메일", field: "user_email", width: 150 },
    { headerName: "닉네임", field: "user_nickName", width: 200 },
    { headerName: "내용", field: "content", flex: 1 },
  ]);

  const [filteredData, setFilteredData] = useState<RowData[]>(rowData);
  const [searchText, setSearchText] = useState("");
  const [isListModal, setisListModal] = useState(false);
  const [isReportModal, setisReportModal] = useState(false);
  const [ModalContent, setModalContent] = useState<{
    user_email: string;
    user_nickName: string;
    content: string;
  } | null>(null);
  const [ReportContent, setReportContent] = useState<{
    id: number;
    user_nickName: string;
    user_email: string;
    category: string;
    content: string;
    review_content: string;
    createdAt: string;
  } | null>(null);
  // 검색 기능 구현

  // const [ReportContent, setReportContent] = useState("");
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);

    // 검색어를 기준으로 데이터 필터링
    const filtered = rowData
      .map((item) => ({
        ...item,
        createdAt: item.createdAt
          ? dayjs(item.createdAt).format("YYYY-MM-DD HH:mm:ss")
          : item.createdAt, // createdAt
      }))
      .filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(value.toLowerCase()),
        ),
      );
    setFilteredData(filtered);
  };
  const setFeedBackIsModal = (params: any) => {
    setModalContent(params.data);
    setisListModal((prev) => !prev);
  };
  const setReportBackIsModal = (params: any) => {
    setReportContent(params.data);
    setisReportModal((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen w-full flex-col gap-5 p-6">
      <div className="flex items-center justify-between p-10">
        <h1 className="mb-6 text-center  text-4xl font-extrabold text-gray-800 ">
          {type == "report" ? "신고" : "피드백"}
        </h1>
        <div className="mb-4 flex items-center justify-center gap-4">
          <span className="">조회할 데이터 : </span>
          <input
            type="text"
            value={searchText}
            onChange={onSearchChange}
            placeholder="검색어 입력"
            className="rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="ag-theme-alpine w-full" style={{ height: "400px" }}>
        <AgGridReact
          rowData={filteredData}
          columnDefs={type == "report" ? ReportColumnDefs : columnDefs}
          onCellClicked={
            type == "report" ? setReportBackIsModal : setFeedBackIsModal
          }
        />
      </div>
      {isReportModal && ReportContent ? (
        <ReportModal
          setIsModal={setReportBackIsModal}
          ReportContent={ReportContent}
          setisReporttModal={setisReportModal}
        />
      ) : null}

      {isListModal && ModalContent ? (
        <FeedBackModal
          setIsModal={setFeedBackIsModal}
          ModalContent={ModalContent}
          setisListModal={setisListModal}
        />
      ) : null}
    </div>
  );
}
