import ActivityHeader from "@/app/my/activity/Header";
import HistoryLog from "@/app/my/activity/HistoryLog";
import ReviewList from "@/app/my/activity/ReviewList";
import { myAPIs } from "@/services/my/myAPIs";
import { cn } from "@/utils/cn";

interface ActivityProps {
  isMobile?: boolean;
}

export default async function Activity({ isMobile = false }: ActivityProps) {
  const [reviews, log] = await Promise.all([
    myAPIs.getReview(),
    myAPIs.getLog(),
  ]);
  return (
    <section
      className={cn(
        isMobile ? "flex Tablet:hidden" : "hidden Tablet:flex",
        `flex-col gap-3 px-5 Tablet:gap-4 Tablet:px-0`,
      )}
    >
      <h2 className="hidden Text-m-Bold Tablet:block Tablet:Text-l-Bold">
        내 활동
      </h2>
      <ActivityHeader logLength={log.length} reviewLength={reviews.length} />
      <ReviewList reviews={reviews} />
      <HistoryLog log={log} />
    </section>
  );
}
