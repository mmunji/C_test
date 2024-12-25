import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import Badge from "@/app/my/_components/badge/Badge";
import {
  ActivitySkeleton,
  BadgeSkeleton,
} from "@/app/my/_components/skeletons/My";
import UserInfo from "@/app/my/_components/userInfo/UserInfo";
import Activity from "@/app/my/activity/Activity";
import ROUTES from "@/constants/routes";

import { Archive, Bookmark, User } from "../../../public/icons";

export const metadata: Metadata = {
  title: "씨네톡 - 마이페이지",
};

export default function My() {
  return (
    <div className="flex w-full flex-col Tablet:gap-20">
      <UserInfo />
      <div className="h-3 rounded-[3px] bg-Black Tablet:hidden" />
      <div className="flex flex-col Tablet:gap-20 Laptop:gap-[46px]">
        <Suspense fallback={<BadgeSkeleton />}>
          <Badge />
        </Suspense>
        <Suspense fallback={<ActivitySkeleton />}>
          <Activity />
        </Suspense>
      </div>
      <div className="border-b border-t border-D2_Gray Tablet:hidden">
        <div>
          <Link
            href={ROUTES.MY.activity()}
            className="flex w-full items-center gap-2 px-5 py-4"
          >
            <Image
              unoptimized
              src={Archive}
              width={24}
              height={24}
              alt="내 활동"
            />
            <span className="Text-m-Medium">내 활동</span>
          </Link>
        </div>
        <div className="border-t border-D2_Gray">
          <Link
            href={ROUTES.MY.bookmark()}
            className="flex w-full items-center gap-2 px-5 py-4"
          >
            <Image
              unoptimized
              src={Bookmark}
              width={24}
              height={24}
              alt="찜한 영화"
            />
            <span className="Text-m-Medium">찜한 영화</span>
          </Link>
        </div>
        <div className="border-t border-D2_Gray">
          <Link
            href={ROUTES.MY.account()}
            className="flex w-full items-center gap-2 px-5 py-4"
          >
            <Image
              unoptimized
              src={User}
              width={24}
              height={24}
              alt="개인 정보"
            />
            <span className="Text-m-Medium">개인 정보</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
