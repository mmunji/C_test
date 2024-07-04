import { ABUSE } from "@/constants/abuseList";

export default function filterAbuse(value: string) {
  if (ABUSE.ABUSE_LIST.some((abuse) => value.includes(abuse))) {
    alert(ABUSE.ABUSE_FILTER_TEXT);
    return true;
  } else return false;
}
