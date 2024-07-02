import Image from "next/image";
import { useSearchParams } from "next/navigation";

import Button from "@/components/buttons/Button";

interface NotMobileSignUpCompleteProps {
  prevPage: string;
}

export default function NotMobileSignUpComplete({
  prevPage,
}: NotMobileSignUpCompleteProps) {
  const nickname = useSearchParams().get("nickname");

  return (
    <div className="hidden h-[100vh] w-[100vw] items-center justify-center rounded-xl bg-D1_Gray Tablet:flex Tablet:h-[520px] Tablet:w-[472px] Tablet:flex-col Tablet:gap-10 Tablet:px-14 Tablet:py-16 Laptop:h-[404px] Laptop:w-[440px] Laptop:gap-6 Laptop:px-10 Laptop:py-11 Desktop:h-[603px] Desktop:w-[622px] Desktop:gap-10 Desktop:px-[100px] Desktop:py-20">
      <Image
        src=""
        alt=""
        className="w-full Tablet:h-[185px] Laptop:h-[150px] Desktop:h-[227px]"
      />
      <section className="flex flex-col items-center text-center Tablet:gap-4 Laptop:gap-3 Desktop:gap-4">
        <h2 className="text-Primary Text-xxl-Bold">어서오세요 {nickname}님!</h2>
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
