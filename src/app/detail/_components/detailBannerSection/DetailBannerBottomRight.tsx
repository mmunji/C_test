import Image from "next/image";
import React from "react";

import { Heart, WritePencil } from "../../../../../public/icons";
import { DetailPoster } from "../../../../../public/images";

export default function DetailBannerBottomRight() {
  return (
    <section className="flex">
      <section className="mt-auto flex Laptop:gap-5 Desktop:gap-8">
        <section>
          <p className="flex h-12 w-12 items-center justify-center text-xl font-Medium leading-[28px] text-Silver">
            0.0
          </p>
          <p className="Text-s-Mediuim text-center">내 평가</p>
        </section>
        <section className="cursor-pointer">
          <Image src={Heart} alt="찜하기" />
          <p className="Text-s-Mediuim text-center">찜하기</p>
        </section>
        <section className="cursor-pointer">
          <Image src={WritePencil} alt="톡 작성" />
          <p className="Text-s-Mediuim text-center">톡 작성</p>
        </section>
      </section>
      <Image
        src={DetailPoster}
        alt="포스터"
        className="Laptop:ml-6 Laptop:h-[258px] Laptop:w-[172px] Desktop:ml-9 Desktop:h-[360px] Desktop:w-60"
      />
    </section>
  );
}
