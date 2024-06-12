import Image from "next/image";

import Button from "@/components/buttons/Button";

import { ChevronRightGrayMd } from "../../../../public/icons";

interface SearchTitleProps {
  category: string;
  length?: number;
}

export default function SearchTitle({ category, length }: SearchTitleProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="flex gap-2 Text-l-Bold">
          <strong>{category}</strong>
          <span className="inline-block ">{length}</span>
        </h2>
      </div>
      <div className="">
        <Button variant={"textIconR"} className="text-Gray_Orange">
          전체보기 <Image src={ChevronRightGrayMd} alt="ChevronRightMd" />
        </Button>
      </div>
    </div>
  );
}
