"use client";
import dayjs from "dayjs";
import { useState } from "react";

import Modal from "@/components/modal/modal";
import { adminAPIs } from "@/services/admin/adminAPIs";
interface ReportProps {
  setIsModal: (value: boolean) => void;
  setisReporttModal: (value: boolean) => void;
  ReportContent: {
    id: number;
    user_nickName: string;
    user_email: string;
    review_content: string;
    createdAt: string;
    category: string;
    content: string;
  };
}

export default function ReportModal({
  setIsModal,
  ReportContent,
  setisReporttModal,
}: ReportProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [reportTime, setreportTime] = useState("신고기간");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const reportday = ["1", "3", "5", "10"];
  const PostReport = async () => {
    await adminAPIs.AdamageReport(
      ReportContent.id,
      ReportContent.category,
      reportTime == "신고기간" ? "" : reportTime,
    );
    setisReporttModal(false);
  };

  return (
    <Modal isAlertModal onClose={() => setIsModal}>
      <Modal.TitleWrapper>
        <Modal.Title>댓글 신고</Modal.Title>
        <Modal.Description>
          일시 : {dayjs(ReportContent.createdAt).format("YYYY-MM-DD HH:mm")}
        </Modal.Description>
        <Modal.Description>
          닉네임 : {ReportContent.user_nickName}
        </Modal.Description>
        <Modal.Description>
          카테고리 : {ReportContent.category}
        </Modal.Description>

        <Modal.Description>
          신고한 리뷰 : {ReportContent.content}
        </Modal.Description>
        <Modal.Description>
          <div className="flex flex-col  gap-1">
            <button
              onClick={toggleDropdown}
              className=" w-full justify-center rounded-md border  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {reportTime}
            </button>
            <div className="flex gap-3">
              {isOpen
                ? reportday.map((day, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => setreportTime(day)}
                        className="rounded-md border-2 px-2"
                      >
                        {day}
                      </button>
                    );
                  })
                : " "}
            </div>
          </div>
        </Modal.Description>
        <Modal.Description>{ReportContent.review_content}</Modal.Description>
      </Modal.TitleWrapper>
      <Modal.Button onClick={PostReport}>신고하기</Modal.Button>
      <Modal.Button onClick={() => setisReporttModal(false)}>닫기</Modal.Button>
    </Modal>
  );
}
