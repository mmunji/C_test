import Image from "next/image";

import { FullLogo } from "@/../public/images";
export default function Header() {
  return (
    <div className="flex justify-between border-b border-D2_Gray p-5">
      <div className="absolute left-[50%] h-5 w-[120px] translate-x-[-50%] Tablet:relative Tablet:left-0 Tablet:h-6 Tablet:w-[144px] Tablet:translate-x-0 Laptop:h-8 Laptop:w-[192px]">
        <Image src={FullLogo} alt="로고" />
      </div>
      <div>
        <h1>buttons</h1>
      </div>
    </div>
  );
}
