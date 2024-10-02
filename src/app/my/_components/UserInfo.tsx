import Image from "next/image";

import ImageUploadForm from "@/app/my/_components/UploadForm";
import SmallBadge from "@/components/smallBadge/SmallBadge";
import { myAPIs } from "@/services/my/myAPIs";

import { AddPlus, CircleWarning } from "../../../../public/icons";
import { DefaultUserProfile } from "../../../../public/images";

export default async function UserInfo() {
  const { getActivityCount, getUser, getBadges, getReportStatus } = myAPIs;
  const [user, activityCount, badges, reportStatus] = await Promise.all([
    getUser(),
    getActivityCount(),
    getBadges(),
    getReportStatus(),
  ]);
  const activeBadges = badges.filter((badge) => badge.use);
  return (
    <section className="mb-9 flex w-full flex-col items-center gap-7 px-5 Tablet:mb-0 Tablet:gap-8 Tablet:px-0 Laptop:gap-10">
      {reportStatus?.date && (
        <div className="flex items-start gap-3 rounded-xl bg-Black px-4 py-3 Tablet:px-5 Tablet:py-4">
          <Image alt="경고 아이콘" src={CircleWarning} />
          <div className="flex flex-col gap-2 Laptop:gap-1">
            <div className="text-Gray_Orange Text-s-Regular Laptop:Text-m-Regular">
              다른 회원으로부터 접수된 신고로 인해 회원님의 서비스 이용(리뷰 및
              답글)이 <span className="text-Error">임시 제한</span>되었습니다.
              (기간 : {reportStatus.startDate} ~ {reportStatus.endDate} 총{" "}
              {reportStatus.date}일)
            </div>
            <div className="text-Gray Text-xs-Regular Laptop:Text-s-Regular">
              <p>신고 대상 : {reportStatus.review_content}</p>
              <p>사유 : {reportStatus.category}</p>
              <p>자세한 내용은 씨네톡 카카오톡 채널로 문의 바랍니다.</p>
            </div>
          </div>
        </div>
      )}
      <div className="flex w-full flex-col items-center gap-7 Tablet:gap-[52px]">
        <div className="flex flex-col items-center gap-4 px-6 Tablet:gap-3 Tablet:px-0 Laptop:gap-4">
          <div className="flex justify-center">
            <div className="relative">
              <div className="relative h-16 w-16 overflow-hidden rounded-full Tablet:h-[100px] Tablet:w-[100px]">
                <Image
                  alt="유저_프로필"
                  src={
                    user.profile
                      ? `data:image/png;base64,${user.profile}`
                      : DefaultUserProfile
                  }
                  fill
                  className="h-full w-full overflow-hidden object-cover"
                />
              </div>
              <ImageUploadForm />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 Tablet:gap-3 Laptop:gap-4">
            <p className="Text-m-Bold Tablet:Text-xxl-Bold">
              <strong className="text-Primary">{user?.nickname}</strong>님,
              안녕하세요!
            </p>
            <div className="flex items-center gap-1 Tablet:gap-4">
              {activeBadges.length ? (
                activeBadges.map((badge) => (
                  <div key={badge.genre_id}>
                    <div className="hidden Tablet:block">
                      <SmallBadge content={badge.badge_name} size="md" />
                    </div>
                    <div className="block Tablet:hidden">
                      <SmallBadge content={badge.badge_name} size="sm" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex cursor-default items-center gap-1 rounded-lg border-Gray px-2 py-1 text-Gray outline-dashed outline-1 Tablet:px-3 Tablet:py-2">
                  <Image
                    src={AddPlus}
                    alt="뱃지 추가 아이콘"
                    width={16}
                    height={16}
                  />
                  <span className="Text-s-Medium Tablet:Text-m-Medium">
                    뱃지 추가 하기
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-6 rounded-xl bg-D1_Gray p-3 Tablet:justify-between Tablet:gap-[41px] Tablet:px-[88px] Tablet:py-3 Laptop:px-[100px]">
          <div className="relative flex w-[54px] flex-col items-center gap-0 py-0 Tablet:w-auto Tablet:gap-1 Tablet:px-3 Tablet:py-2">
            <span className="Text-m-Bold Tablet:Text-l-Bold">
              {activityCount.rateCount}
            </span>
            <span className="text-L_Gray Text-xs-Regular Tablet:text-Silver Tablet:Text-m-Bold">
              받은 좋아요
            </span>
          </div>
          <div className="w-[1px] bg-D2_Gray"></div>
          <div className="relative flex w-[54px] flex-col items-center gap-0 py-0 Tablet:w-auto Tablet:gap-1 Tablet:px-3 Tablet:py-2">
            <span className="Text-m-Bold Tablet:Text-l-Bold">
              {activityCount.reviewCount}
            </span>
            <span className="text-L_Gray Text-xs-Regular Tablet:text-Silver Tablet:Text-m-Bold">
              평가한 영화
            </span>
          </div>
          <div className="w-[1px] bg-D2_Gray"></div>
          <div className="relative flex w-[54px] flex-col items-center gap-0 py-0 Tablet:w-auto Tablet:gap-1 Tablet:px-3 Tablet:py-2">
            <span className="Text-m-Bold Tablet:Text-l-Bold">
              {activityCount.bookmarkCount}
            </span>
            <span className="text-L_Gray Text-xs-Regular Tablet:text-Silver Tablet:Text-m-Bold">
              찜한 영화
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
