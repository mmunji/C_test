import Nav from "@/app/my/_components/Nav";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[100px]">
      <div className="Tablet:flex">
        <Nav />
        <div className="px-0 Tablet:ml-[57px] Tablet:flex-1 Tablet:px-10 Desktop:ml-[480px]">
          {children}
        </div>
      </div>
    </div>
  );
}
