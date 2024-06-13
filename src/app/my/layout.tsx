import Sidebar from "@/app/my/_components/Sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Sidebar />
      <div className="Tablet:ml-[72px] Desktop:ml-[480px]">
        <div
          className="mx-auto w-full max-w-[948px] px-0 pb-[100px]
        Tablet:flex-1 Tablet:px-10 Tablet:pb-40 Tablet:pt-10
        Laptop:mx-auto Laptop:px-0 Laptop:pb-[180px] Laptop:pt-7
        Desktop:pb-[200px] Desktop:pt-20"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
