import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

import Dropdown from "@/components/dropdown/dropdown";
import ROUTES from "@/constants/routes";
import { logout } from "@/services/my/actions";
import useLoggedInStore from "@/stores/useLoggedIn";
import useScrollStore from "@/stores/useScrollStore";

import {
  BestTalkFire,
  CaretDownMd,
  HeartFillMd,
  LogOut,
  User,
} from "../../../public/icons";

const dropdownMenu = [
  { icon: User, content: "마이페이지", href: ROUTES.MY.default },
  { icon: LogOut, content: "로그아웃", href: "" },
  { icon: BestTalkFire, content: "관리자", href: ROUTES.ADMIN },
];

export default function HeaderDropdown({
  children,
  isAdmin,
}: {
  children: React.ReactNode;
  isAdmin: boolean;
}) {
  const hasScrolledPast = useScrollStore((state) => state.hasScrolledPast);
  const pathname = usePathname();
  const handleLogout = useLoggedInStore((state) => state.logout);

  const handleClickDropdown = (href: string | null) => {
    if (href) return;
    logout();
    handleLogout();
  };

  return (
    <Dropdown type="icon">
      <Dropdown.Trigger>
        <div className="flex items-center">
          <div
            className={`mr-2 flex items-center gap-3 text-regular font-Medium ${pathname.includes(ROUTES.DETAIL) ? (hasScrolledPast ? "text-Silver" : "text-[rgba(255,255,255,0.6)]") : "text-Silver"}`}
          >
            {children}
          </div>
          <Image src={CaretDownMd} alt="더보기" className="cursor-pointer" />
        </div>
      </Dropdown.Trigger>
      <Dropdown.List className="left-1/2 top-[43px] -translate-x-1/2">
        {dropdownMenu.map((m, i) => {
          // if (!isAdmin && i === dropdownMenu.length - 1) return null;
          return (
            <Dropdown.Item
              className="justify-start"
              key={m.content}
              href={m.href}
              onClick={() => handleClickDropdown(m.href)}
              isFocused={m.content === "전체"}
            >
              <div className="flex items-center gap-2">
                <Image src={m.icon} alt={m.content} className="h-6 w-6" />
                <p className="min-w-fit Text-m-Regular">{m.content}</p>
              </div>
            </Dropdown.Item>
          );
        })}
      </Dropdown.List>
    </Dropdown>
  );
}
