import AdminHeaders from "./_components/AdminHeaders";
import SideMenu from "./_components/SideMenu";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <AdminHeaders />
      <section className="flex">
        <SideMenu />
        <main className="px-2">{children}</main>
      </section>
    </div>
  );
}
