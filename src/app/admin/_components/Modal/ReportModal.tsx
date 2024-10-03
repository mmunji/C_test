"use client";
import dayjs from "dayjs";

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
  const PostReport = () => {
    adminAPIs.AdamageReport(ReportContent.id, ReportContent.category, "3");
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
          <div></div>
        </Modal.Description>
        <Modal.Description>{ReportContent.review_content}</Modal.Description>
      </Modal.TitleWrapper>
      <Modal.Button onClick={PostReport}>신고하기</Modal.Button>
      <Modal.Button onClick={() => setisReporttModal(false)}>닫기</Modal.Button>
    </Modal>
  );
}
