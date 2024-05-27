"use client";
import { useRouter } from "next/navigation";

import Activity from "@/app/my/activity";
import ROUTES from "@/constants/routes";
import useDevice from "@/hooks/useDevice";

export default function Page() {
  const router = useRouter();
  const { device } = useDevice();

  if (device && device !== "mobile") {
    router.push(ROUTES.MY.default);
    return null;
  }

  return <Activity />;
}
