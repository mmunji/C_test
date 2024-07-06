import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function formatDate(createdAt: string) {
  const now = dayjs();
  const date = dayjs(createdAt);

  const diffMinutes = now.diff(date, "minute");
  const diffHours = now.diff(date, "hour");
  const diffDays = now.diff(date, "day");
  const diffWeeks = now.diff(date, "week");
  const diffMonths = now.diff(date, "month");

  if (diffMinutes < 1) {
    return "방금전";
  } else if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else if (diffDays < 7) {
    return `${diffDays}일 전`;
  } else if (diffWeeks < 4) {
    return `${diffWeeks}주 전`;
  } else if (diffMonths < 12) {
    return `${diffMonths}달 전`;
  } else {
    return date.format("YYYY.MM.DD");
  }
}
