import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

import Button from "@/components/buttons/Button";

interface ReportCompleteModalProps {
  setOpenReportComplete: Dispatch<SetStateAction<boolean>>;
}

function ReportCompleteModal({
  setOpenReportComplete,
}: ReportCompleteModalProps) {
  return (
    <>
      <div className="fixed inset-0 z-20 h-screen w-screen bg-black/40 backdrop-blur-[3px]" />
      <div className="fixed inset-0 z-30 flex h-screen w-screen flex-col rounded-xl bg-BG px-5 pb-6 pt-3 Tablet:left-1/2 Tablet:top-1/2 Tablet:h-fit Tablet:w-[456px] Tablet:-translate-x-1/2 Tablet:-translate-y-1/2">
        <p className="text-White Text-l-Bold Tablet:hidden">댓글신고</p>

        <div className="mt-[87px] flex flex-col items-center gap-4 Tablet:mt-7 Tablet:flex-col-reverse Tablet:gap-7">
          <div className="h-[150px]">
            <Image
              unoptimized
              width={100}
              height={100}
              src="/images/ssikongi/PNG/Check.png"
              alt="신고 접수 완료"
              className="h-full w-full"
            />
          </div>

          <div className="text-center">
            <p className="text-Primary Text-m-Bold Tablet:Text-xl-Bold">
              신고가 접수되었어요.
            </p>
            <p className="mt-2 text-Silver Text-s-Medium Tablet:Text-m-Medium">
              빠른 시일내에 씨네톡이 꼼꼼히 검토해보겠습니다.
              <br />
              불편을 드려 죄송합니다.
            </p>
          </div>
        </div>

        <Button
          onClick={() => setOpenReportComplete(false)}
          variant={"orange"}
          size={"xl"}
          className="mt-auto w-full Tablet:mt-7"
        >
          완료
        </Button>
      </div>
    </>
  );
}

export default ReportCompleteModal;
