import Image from "next/image";
import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useCastAndCrewSwiper from "@/app/detail/_hooks/useCastAndCrewSwiper";
import { castAndCrew } from "@/app/detail/fakeData";

import { NextArrow, PrevArrow } from "../../../../../../public/icons";

interface CastProps {
  device: Device;
}

export default function Cast({ device }: CastProps) {
  const {
    hovered,
    setHovered,
    swiper,
    setSwiper,
    forceUpdate,
    handleNext,
    handlePrev,
    slidesPerView,
  } = useCastAndCrewSwiper(device);

  return (
    <div
      className="relative mt-5 h-[calc(256px-60px)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={12}
        slidesPerView={slidesPerView}
        onSlideChange={forceUpdate}
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

      {swiper && !swiper.isBeginning && (
        <button
          onClick={handlePrev}
          className={`absolute hidden Laptop:flex ${hovered ? "opacity-100" : "opacity-0"} left-0 top-1/2 z-10 flex h-11 w-11 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-full bg-[#FFFFFF19] transition-opacity duration-300`}
        >
          <Image src={PrevArrow} alt="이전" />
        </button>
      )}

      {swiper && !swiper.isEnd && (
        <button
          onClick={handleNext}
          className={`absolute hidden Laptop:flex ${hovered ? "opacity-100" : "opacity-0"} right-0 top-1/2 z-10 flex h-11 w-11 translate-x-[50%] translate-y-[-50%] items-center justify-center rounded-full bg-[#FFFFFF19] transition-opacity duration-300`}
        >
          <Image src={NextArrow} alt="다음" />
        </button>
      )}
    </div>
  );
}
