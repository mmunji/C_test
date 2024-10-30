"use client";
import HeaderDropdown from "@/components/header/HeaderDropdown";

interface HeaderAuthedUserSectionProps {
  children: React.ReactNode;
  isAdmin: boolean;
}

function HeaderAuthedUserSection({
  children,
  isAdmin,
}: HeaderAuthedUserSectionProps) {
  return (
    <section className="hidden items-center Laptop:flex">
      <HeaderDropdown isAdmin={isAdmin}>{children}</HeaderDropdown>
    </section>
  );
}

export default HeaderAuthedUserSection;
