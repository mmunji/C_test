"use client";
import { useEffect, useState } from "react";

import { adminAPIs } from "@/services/admin/adminAPIs";

import { MyResponsiveLine } from "./_components/Chart";
import useAdminStorge from "./_hooks/useAdminStorge";

export default function AdminMain() {
  const { UserVisitors, ReviewCount, KeywordCount } = useAdminStorge() as {
    UserVisitors: Users[] | undefined;
    ReviewCount: Users[] | undefined;
    KeywordCount: Users[] | undefined;
  };
  return (
    <main className="flex min-h-screen w-full flex-col  p-24">
      <div className="Text-xl-Regular z-10 max-w-5xl  font-mono ">
        <h1>통계</h1>
      </div>
      <div>
        <MyResponsiveLine
          Visitor={UserVisitors}
          ReviewCount={ReviewCount}
          KeywordCount={KeywordCount}
        />
      </div>
    </main>
  );
}
