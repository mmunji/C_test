import Image from "next/image";

import { myAPIs } from "@/services/my/myAPIs";

import { CircleWarning } from "../../../../../public/icons";

export default async function PenaltyInfo() {
  const reportStatus = await myAPIs.getPenaltyInfo();

  const truncateText = (text: string | undefined | null, maxLength: number) => {
    if (!text) return null;
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  if (!reportStatus?.date) return null;
  return (
    <div className="flex w-full items-start gap-3 rounded-xl bg-Black px-4 py-3 Tablet:px-5 Tablet:py-4">
      <Image alt="경고 아이콘" src={CircleWarning} />
      <div className="flex w-full flex-col gap-2 Laptop:gap-1">
        <div className="text-Gray_Orange Text-s-Regular Laptop:Text-m-Regular">
          다른 회원으로부터 접수된 신고로 인해 회원님의 서비스 이용(리뷰 및
          답글)이 <span className="text-Error">임시 제한</span>되었습니다. (기간
          : {reportStatus.startDate} ~ {reportStatus.endDate} 총{" "}
          {reportStatus.date}일)
        </div>
        <div className="text-Gray Text-xs-Regular Laptop:Text-s-Regular">
          <p>
            신고 대상 : {truncateText(reportStatus.movienm, 5)} - ‘
            {truncateText(reportStatus.review_content, 30)}’
          </p>
          <p>사유 : {reportStatus.category}</p>
          <p>자세한 내용은 씨네톡 카카오톡 채널로 문의 바랍니다.</p>
        </div>
      </div>
    </div>
  );
}
