import Image from "next/image";
import React, { useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { castAndCrew } from "@/app/detail/fakeData";

import { NextArrow, PrevArrow } from "../../../../../../public/icons";

export default function Crew() {
  const [swiper, setSwiper] = useState<SwiperClass>();

  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <div className="relative mt-5 h-[calc(256px-60px)]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={12}
        slidesPerView={6}
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        {castAndCrew.map((el, i) => (
          <SwiperSlide
            key={i}
            className="min-h-[196px] rounded-[8px] bg-D1_Gray"
          >
            <Image
              src={el.src}
              alt={el.name}
              className="h-[112px] rounded-[8px]"
            />
            <section className="px-2 pb-3 pt-2">
              <p className="Text-s-Medium mb-2 line-clamp-2 overflow-hidden text-ellipsis text-center text-Silver">
                {el.name}
              </p>
              <p className="Text-xs-Regular overflow-hidden text-ellipsis whitespace-nowrap text-L_Gray">
                {el.casting}
              </p>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 z-10 flex h-11 w-11 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-full bg-[#FFFFFF19]"
      >
        <Image src={PrevArrow} alt="이전" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-[50%] translate-y-[-50%] items-center justify-center rounded-full bg-[#FFFFFF19]"
      >
        <Image src={NextArrow} alt="다음" />
      </button>
    </div>
  );
}
