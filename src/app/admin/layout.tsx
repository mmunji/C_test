import AdminHeaders from "./_components/AdminHeaders";
import SideMenu from "./_components/SideMenu";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <AdminHeaders />
      <section className="flex">
        <SideMenu />
        <main className="w-full bg-gray-200 px-2 text-black">{children}</main>
      </section>
    </div>
  );
}
