import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

import {
  EditPencilLineMd,
  EditPencilLineSm,
} from "../../../../../../../public/icons";

interface MyKeywordProps {
  myKeyword: MyKeyword;
  isClickedEdit: boolean;
  setIsClickedEdit: Dispatch<SetStateAction<boolean>>;
}

interface MyKeyword {
  keywordId: number | null;
  keyword: string;
  count: number;
}

function MyKeyword({
  myKeyword,
  isClickedEdit,
  setIsClickedEdit,
}: MyKeywordProps) {
  return (
    <div className="relative flex h-[45px] w-full items-center rounded-xl bg-[rgba(0,0,0,0.2)] px-4">
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 Text-s-Medium Tablet:Text-m-Medium">
        {myKeyword.keyword}
      </p>
      <div
        onClick={() => setIsClickedEdit(!isClickedEdit)}
        className="ml-auto cursor-pointer"
      >
        <Image
          unoptimized
          src={EditPencilLineSm}
          alt="편집"
          className="h-4 w-4 Tablet:hidden"
        />
        <Image
          unoptimized
          src={EditPencilLineMd}
          alt="편집"
          className="hidden h-6 w-6 Tablet:block"
        />
      </div>
    </div>
  );
}

export default MyKeyword;
