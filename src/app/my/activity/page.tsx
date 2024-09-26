import Activity from "@/app/my/activity/Activity";
import ActivityMobilePageGuard from "@/app/my/activity/MobilePageGuard";

export default function Page() {
  return (
    <>
      <ActivityMobilePageGuard />
      <Activity isMobile />
    </>
  );
}
