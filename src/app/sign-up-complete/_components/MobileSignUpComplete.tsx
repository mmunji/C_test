import Image from "next/image";
import React from "react";

import Button from "@/components/buttons/Button";

interface MobileSignUpCompleteProps {
  prevPage: string;
  nickname: string;
}

export default function MobileSignUpComplete({
  prevPage,
  nickname,
}: MobileSignUpCompleteProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center Tablet:hidden">
      <h2 className="text-center text-Primary Text-xxl-Bold">
        어서오세요 {nickname}님!
      </h2>
      <p className="mt-4 Text-m-Medium">
        이제 씨네톡에서 같이 즐거운 시간 보내요 :)
      </p>
      <Image src="" alt="" className="mt-10 h-[137px] w-[256px]" />
      <Button
        size="xl"
        href={prevPage}
        variant="orange"
        className="mt-[72px] w-[calc(100%-40px)]"
      >
        씨네톡 하러가기
      </Button>
    </div>
  );
}
