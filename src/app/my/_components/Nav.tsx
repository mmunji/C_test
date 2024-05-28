"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ROUTES from "@/constants/routes";

import { Archive, Bookmark, User } from "../../../../public/icons";

const LINKS = [
  { href: ROUTES.MY.default, name: "모아보기" },
  { href: ROUTES.MY.favorites(), name: "찜한 작품" },
  { href: ROUTES.MY.account(), name: "개인정보" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="fixed hidden min-h-screen border-r  Tablet:block Tablet:border-D2_Gray Tablet:px-4 Tablet:py-6">
      <div className="hidden h-full flex-col px-20 pb-[164px] pt-16  Desktop:flex">
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
          <span className="">문의 카카오톡 1:1 오픈 채팅방</span>
        </div>
      </div>
      <ul className="flex h-full flex-col gap-4 Desktop:hidden">
        <li>
          <Link href="/">
            <Image src={Archive} width={24} height={24} alt="내 활동" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={Bookmark} width={24} height={24} alt="찜한 작품" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={User} width={24} height={24} alt="개인 정보" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
