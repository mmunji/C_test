import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

import Button from "@/components/buttons/Button";

import { WelcomeSsikongi } from "../../../../public/images";

interface MobileSignUpCompleteProps {
  prevPage: string;
}

export default function MobileSignUpComplete({
  prevPage,
}: MobileSignUpCompleteProps) {
  const nickname = useSearchParams().get("nickname");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center Tablet:hidden">
      <Image
        unoptimized
        src={WelcomeSsikongi}
        alt="씨콩이"
        className="mt-10 h-[160px] w-[300px]"
      />
      <h2 className="mt-10 text-center text-Primary Text-xxl-Bold">
        어서오세요 <br /> {nickname}님!
      </h2>
      <p className="mt-4 Text-m-Medium">
        이제 씨네톡에서 같이 즐거운 시간 보내요 :)
      </p>

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
