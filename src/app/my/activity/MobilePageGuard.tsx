"use client";
import { useRouter } from "next/navigation";

import ROUTES from "@/constants/routes";
import useDevice from "@/hooks/useDevice";

export default function ActivityMobilePageGuard() {
  const router = useRouter();
  const { device } = useDevice();
  if (device && device !== "mobile") {
    router.push(ROUTES.MY.default);
  }
  return null;
}
