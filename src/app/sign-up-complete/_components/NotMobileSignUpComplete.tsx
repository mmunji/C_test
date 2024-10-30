import Image from "next/image";
import { useSearchParams } from "next/navigation";

import Button from "@/components/buttons/Button";

import { WelcomeSsikongi } from "../../../../public/images";

interface NotMobileSignUpCompleteProps {
  prevPage: string;
}

export default function NotMobileSignUpComplete({
  prevPage,
}: NotMobileSignUpCompleteProps) {
  const nickname = useSearchParams().get("nickname");

  return (
    <div className="hidden items-center justify-center rounded-xl bg-D1_Gray Tablet:flex Tablet:h-[558px] Tablet:w-[472px] Tablet:flex-col Tablet:gap-10 Tablet:px-14 Tablet:py-16 Laptop:h-[438px] Laptop:w-[440px] Laptop:gap-6 Laptop:px-10 Laptop:py-11 Desktop:h-[603px] Desktop:w-[650px] Desktop:gap-10 Desktop:px-[100px] Desktop:py-20">
      <Image
        src={WelcomeSsikongi}
        alt="씨콩이"
        className="Tablet:h-[184px] Tablet:w-[344px] Laptop:h-[150px] Laptop:w-[280px] Desktop:h-[226px] Desktop:w-[422px]"
      />
      <section className="flex flex-col items-center text-center Tablet:gap-4 Laptop:gap-3 Desktop:gap-4">
        <h2 className="text-Primary Text-xxl-Bold">
          어서오세요 <br /> {nickname}님!
        </h2>
        <p className="font-Medium">
          이제 씨네톡에서 같이 즐거운 시간 보내요 :)
        </p>
      </section>
      <Button href={prevPage} size="xl" variant="orange" className="w-full">
        씨네톡 하러가기
      </Button>
    </div>
  );
}
