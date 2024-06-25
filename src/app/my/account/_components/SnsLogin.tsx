"use client";
import Image from "next/image";

import Button from "@/components/buttons/Button";

import { Naver } from "../../../../../public/icons";

export default function SnsLogin() {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-D1_Gray px-4 py-2 Text-s-Medium Tablet:px-8 Tablet:py-4 Tablet:Text-m-Medium">
      <div className="flex flex-1 items-center gap-4">
        <div className="my-1 flex h-10 w-10 items-center justify-center rounded-lg bg-Naver Tablet:my-0">
          <Image alt="네이버" src={Naver} />
        </div>
        <span className="">네이버 계정 연동 중</span>
      </div>
      <Button variant={"text"} onClick={() => console.log("sdf")}>
        로그아웃
      </Button>
    </div>
  );
}
