"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ROUTES from "@/constants/routes";

import { Archive, Bookmark, User } from "../../../../public/icons";

const LINKS = [
  { href: ROUTES.MY.default, name: "모아보기", svg: Archive },
  { href: ROUTES.MY.favorites(), name: "찜한 작품", svg: Bookmark },
  { href: ROUTES.MY.account(), name: "개인정보", svg: User },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="fixed hidden h-screen border-r border-D2_Gray Tablet:flex">
      <div className="hidden h-full w-[480px] flex-col px-20  pb-[164px] pt-16 Desktop:flex">
        <div className="flex flex-col gap-[54px]">
          <h2 className="Text-xl-Bold">마이 페이지</h2>
          <ul className="mb-[363px] flex w-[320px] flex-col gap-6 Text-l-Bold">
            {LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li className="" key={link.name}>
                  <Link
                    href={link.href}
                    className={clsx(
                      isActive && "bg-D2_Gray",
                      `inline-flex w-full rounded-xl px-5 py-3 hover:bg-D1_Gray hover:text-Gray_Orange active:bg-D2_Gray active:text-Silver`,
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-4 border-t border-Gray text-Gray Text-m-Medium">
          <span className="mt-[52px]">개인정보 처리방침</span>
          <span className="">
            문의{" "}
            <Link
              className="underline"
              href="http://pf.kakao.com/_xmWUxmG"
              target="_blank"
            >
              카카오톡 1:1 오픈 채팅방
            </Link>
          </span>
        </div>
      </div>
      <ul className="h-full w-[72px] flex-col gap-4 px-4 pt-6 Tablet:flex Desktop:hidden">
        {LINKS.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="inline-flex p-2">
              <Image src={link.svg} width={24} height={24} alt={link.name} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
