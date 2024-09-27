"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Tab, { TabButton } from "@/app/search/_components/Tab";
import useQueryString from "@/app/search/_hooks/useQueryString";
import Button from "@/components/buttons/Button";
import Dropdown from "@/components/dropdown/dropdown";
import ROUTES from "@/constants/routes";

import { Filter } from "../../../../public/icons";

interface ActivityHeaderProps {
  reviewLength: number;
  logLength: number;
}

const filterMap = { desc: "최신순", asc: "오래된순", like: "좋아요순" };

export default function ActivityHeader({
  logLength,
  reviewLength,
}: ActivityHeaderProps) {
  const searchParams = useSearchParams();
  const { tab, filter } = useQueryString();
  const router = useRouter();
  const pathname = usePathname();
  const handleChangeSort = (sort: "desc" | "asc" | "like") => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort);
    router.push(`${pathname}?${params}`, { scroll: false });
  };
  return (
    <div className="flex items-center justify-between">
      <Tab>
        <TabButton isDefault>톡 {reviewLength}</TabButton>
        <TabButton>평가로그 {logLength}</TabButton>
      </Tab>
      <Dropdown>
        <Dropdown.Trigger>
          <Button variant={"textIconL"} className="Text-s-Medium">
            <Image alt="필터 아이콘" src={Filter} />
            <span>
              {filterMap?.[filter as keyof typeof filterMap] ||
                filterMap["desc"]}
            </span>
          </Button>
        </Dropdown.Trigger>
        <Dropdown.List>
          <Dropdown.Item onClick={() => handleChangeSort("desc")}>
            <Link scroll={false} href={{ query: { tab, filter: "desc" } }}>
              최신순
            </Link>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleChangeSort("asc")}>
            오래된순
          </Dropdown.Item>
          {tab === "톡" && (
            <Dropdown.Item onClick={() => handleChangeSort("like")}>
              좋아요순
            </Dropdown.Item>
          )}
        </Dropdown.List>
      </Dropdown>
    </div>
  );
}
