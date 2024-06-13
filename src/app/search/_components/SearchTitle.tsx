import Image from "next/image";

import Button from "@/components/buttons/Button";

import { ChevronRightGrayMd } from "../../../../public/icons";

interface SearchTitleProps {
  category: string;
  length?: number;
  handleTabChange: (category: string) => void;
  isActiveTabIndex: number;
  isMobile: boolean;
}

export default function SearchTitle({
  category,
  length,
  handleTabChange,
  isActiveTabIndex,
  isMobile,
}: SearchTitleProps) {
  if (isActiveTabIndex) return null;

  return (
    <div className="flex items-center justify-between">
      <div className="flex Mobile:h-[37px] Tablet:h-[40px]">
        <h2 className="flex gap-2 Text-l-Bold">
          <strong>{category}</strong>
          <span className="inline-block ">{length}</span>
        </h2>
      </div>
      {!isActiveTabIndex && length ? (
        <div className="">
          <Button
            onClick={() => handleTabChange(`${category} ${length}`)}
            variant={"textIconR"}
            className="h-fit text-Gray_Orange Text-s-Medium"
          >
            전체보기{" "}
            <Image
              src={ChevronRightGrayMd}
              alt="ChevronRightMd"
              width={isMobile ? 16 : 24}
              height={isMobile ? 16 : 24}
            />
          </Button>
        </div>
      ) : null}
    </div>
  );
}
