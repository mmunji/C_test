import Image from "next/image";
import { Suspense } from "react";

import {
  MyInfoActivityCountsSkeleton,
  MyInfoBadgeSkeleton,
} from "@/app/my/_components/skeletons/My";
import ImageUploadForm from "@/app/my/_components/UploadForm";
import ActivityCounts from "@/app/my/_components/userInfo/ActivityCounts";
import Badges from "@/app/my/_components/userInfo/Badges";
import PenaltyInfo from "@/app/my/_components/userInfo/PenaltyInfo";
import { myAPIs } from "@/services/my/myAPIs";

import { DefaultUserProfile } from "../../../../../public/images";

export default async function UserInfo() {
  const user = await myAPIs.getUser();
  return (
    <section className="mb-9 flex w-full flex-col items-center gap-7 px-5 Tablet:mb-0 Tablet:gap-8 Tablet:px-0 Laptop:gap-10">
      <Suspense fallback={null}>
        <PenaltyInfo />
      </Suspense>
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
            <Suspense fallback={<MyInfoBadgeSkeleton />}>
              <Badges />
            </Suspense>
          </div>
        </div>
        <Suspense fallback={<MyInfoActivityCountsSkeleton />}>
          <ActivityCounts />
        </Suspense>
      </div>
    </section>
  );
}
