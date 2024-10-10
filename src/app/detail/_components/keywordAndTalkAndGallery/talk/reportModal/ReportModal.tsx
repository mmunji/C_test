import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

import Button from "@/components/buttons/Button";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import { useReportTalk } from "@/services/talk/talkMutations";
import { cn } from "@/utils/cn";

import { CaretDownMd } from "../../../../../../../public/icons";
import ReportModalDropdown from "./ReportModalDropdown";

const REPORT_TYPE = [
  "신고 유형을 선택해주세요.",
  "도배, 홍보 및 광고 행위",
  "거짓 정보 유포",
  "욕설, 비난, 정치 및 사회적 갈등 조장",
  "성적인 발언",
  "기타",
];

interface ReportModalProps {
  type: "talk" | "keyword";
  setOpen: Dispatch<SetStateAction<boolean>>;
  talkId?: number | null;
  setOpenReportComplete: Dispatch<SetStateAction<boolean>>;
}

export default function ReportModal({
  type,
  setOpen,
  talkId,
  setOpenReportComplete,
}: ReportModalProps) {
  const [reportType, setReportType] = useState(REPORT_TYPE[0]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [content, setContent] = useState("");
  const { mutate: reportTalk, isPending } = useReportTalk(
    setOpen,
    setOpenReportComplete,
  );
  const placeHolder =
    type === "talk"
      ? reportType === REPORT_TYPE[0]
        ? "신고 유형을 먼저 선택해주세요."
        : "자세한 사유를 작성해주세요."
      : "자세한 사유를 작성해주세요.";

  const disabled =
    type === "talk"
      ? reportType === REPORT_TYPE[0] ||
        (reportType === REPORT_TYPE[REPORT_TYPE.length - 1] &&
          content === "") ||
        isPending
      : content === "";

  return (
    <>
      <div className="fixed inset-0 z-20 h-screen w-screen bg-black/40 backdrop-blur-[3px]" />
      <div className="fixed inset-0 z-30 flex h-screen w-screen flex-col bg-BG px-[20px] pb-7 pt-3 Tablet:left-1/2 Tablet:top-1/2 Tablet:h-fit Tablet:w-[468px] Tablet:-translate-x-1/2 Tablet:-translate-y-1/2 Tablet:rounded-xl Tablet:px-12 Tablet:py-10">
        <p className="text-White Text-l-Bold Tablet:text-center Tablet:text-Primary Tablet:Text-xl-Bold">
          {type === "talk" ? "댓글" : "키워드"} 신고
        </p>

        <p className="mt-8 text-center text-White Text-m-Medium Tablet:mt-2">
          {type === "talk"
            ? "해당 댓글에 불쾌감을 느끼셨나요?"
            : "키워드에 불쾌감을 느끼셨나요?"}
          <br />
          {type === "talk"
            ? "신고하는 이유를 선택해 주세요."
            : "신고하는 키워드와 이유를 작성해주세요."}
        </p>

        {type === "talk" && (
          <>
            <div className="mt-12 Tablet:mt-7">
              <p className="Text-s-Medium">신고 유형</p>

              <div
                onClick={() => setOpenDropdown(!openDropdown)}
                className={cn(
                  "relative mt-2 flex cursor-pointer items-center justify-between rounded-xl border-[1px] border-Gray px-5 py-2",
                  openDropdown && "border-Primary",
                )}
              >
                <p
                  className={cn(
                    "Text-s-Medium",
                    reportType === REPORT_TYPE[0] && "text-Gray",
                  )}
                >
                  {reportType}
                </p>

                <Image width={24} height={24} src={CaretDownMd} alt="더보기" />
                {openDropdown && (
                  <ReportModalDropdown
                    REPORT_TYPE={REPORT_TYPE}
                    setReportType={setReportType}
                    setOpenDropdown={setOpenDropdown}
                  />
                )}
              </div>
            </div>
          </>
        )}

        <div className="mt-6">
          <p className="text-Gray Text-m-Medium">자세한 사유</p>
          <div className="mt-2 h-[88px] w-full rounded-xl bg-D2_Gray p-3 text-[14px] input-scrollbar Tablet:h-[100px] Tablet:text-[16px]">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={placeHolder}
              className="h-full w-full resize-none bg-transparent pr-3 leading-[22px] placeholder:text-Gray focus:outline-none Tablet:leading-[26px]"
            />
          </div>
        </div>

        <div className="mt-auto flex w-full gap-3 Tablet:mt-7">
          <Button
            onClick={() => setOpen(false)}
            variant={"line"}
            className="w-full rounded-xl px-5 py-3"
          >
            취소
          </Button>
          <Button
            onClick={() =>
              reportTalk({
                talkId: talkId,
                category: reportType,
                content: content,
              })
            }
            disabled={disabled}
            variant={"orange"}
            className="w-full rounded-xl px-5 py-3"
          >
            {isPending ? (
              <LoadingSpinner size={"sm"} color={"primary"} />
            ) : (
              "제출하기"
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
