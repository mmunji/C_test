import { Suspense } from "react";

import { ActivitySkeleton } from "@/app/my/_components/skeletons/My";
import Activity from "@/app/my/activity/Activity";
import ActivityMobilePageGuard from "@/app/my/activity/MobilePageGuard";

export default function Page() {
  return (
    <>
      <ActivityMobilePageGuard />
      <Suspense fallback={<ActivitySkeleton isMobile />}>
        <Activity isMobile />
      </Suspense>
    </>
  );
}
