"use client";
import { MyResponsiveLine } from "./_components/Chart";

export default function AdminMain() {
  return (
    <main className="flex min-h-screen w-full flex-col  p-24">
      <div className="Text-xl-Regular z-10 max-w-5xl  font-mono ">
        <h1>통계</h1>
      </div>
      <div>
        <MyResponsiveLine />
      </div>
    </main>
  );
}
