import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

import Dropdown from "@/components/dropdown/Dropdown";
import ROUTES from "@/constants/routes";
import useLoggedInStore from "@/stores/useLoggedIn";
import tokenManager from "@/utils/tokenManager";

import { CaretDownMd, LogOut, User } from "../../../../public/icons";

interface HeaderAuthedUserSectionProps {
  hasScrolledPast: boolean;
}

function HeaderAuthedUserSection({
  hasScrolledPast,
}: HeaderAuthedUserSectionProps) {
  const dropdownMenu = [
    { icon: User, content: "마이 페이지" },
    { icon: LogOut, content: "로그 아웃" },
  ];
  const pathname = usePathname();
  const router = useRouter();
  const { setLoggedIn } = useLoggedInStore();
  const handleClickDropdown = (i: number) => {
    if (i === 0) router.push(ROUTES.MY.default);
    else if (i === 1) {
      setLoggedIn(false);
      tokenManager.removeToken();
    }
  };

  return (
    <section className="hidden items-center Laptop:flex">
      <div className="mr-3 h-[30px] w-[30px] rounded-full bg-[#d9d9d9]" />

      <p
        className={`mr-2 text-regular font-Medium ${pathname.includes(ROUTES.DETAIL) ? (hasScrolledPast ? "text-Silver" : "text-[rgba(255,255,255,0.6)]") : "text-Silver"}`}
      >
        닉네임
      </p>

      <Dropdown type="icon">
        <Dropdown.Trigger>
          <Image src={CaretDownMd} alt="더보기" className="cursor-pointer" />
        </Dropdown.Trigger>
        <Dropdown.List className="right-0 top-12">
          {dropdownMenu.map((m, i) => (
            <Dropdown.Item
              key={i}
              onClick={() => handleClickDropdown(i)}
              isFocused={m.content === "전체"}
            >
              <Image src={m.icon} alt={m.content} className="mr-2 h-6 w-6" />
              <p className="Text-m-Regular">{m.content}</p>
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
    </section>
  );
}

export default HeaderAuthedUserSection;
