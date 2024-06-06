import Image from "next/image";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useDetailSwiper from "@/app/detail/_hooks/useDetailSwiper";
import { castAndCrew } from "@/app/detail/fakeData";
import Button from "@/components/buttons/Button";

import { ChevronLeftMd, ChevronRightMd } from "../../../../../public/icons";

export default function CastAndCrewSlider() {
  const {
    hovered,
    setHovered,
    swiper,
    setSwiper,
    forceUpdate,
    handleNext,
    handlePrev,
    castAndCrewSpaceBetween,
  } = useDetailSwiper("castAndCrew");

  return (
    <div
      className="relative mt-5 h-[calc(256px-60px)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={castAndCrewSpaceBetween}
        slidesPerView={"auto"}
        onSlideChange={forceUpdate}
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        {castAndCrew.map((el, i) => (
          <SwiperSlide
            key={i}
            className="min-h-[196px] max-w-[82px] rounded-[8px] bg-D1_Gray"
          >
            <Image
              src={el.src}
              alt={el.name}
              className="h-[112px] rounded-[8px]"
            />
            <section className="h-[79px] px-2 pb-3 pt-2">
              <p className="mb-2 line-clamp-2 overflow-hidden text-ellipsis text-center text-Silver Text-s-Medium">
                {el.name}
              </p>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-L_Gray Text-xs-Regular">
                {el.casting}
              </p>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {swiper && !swiper.isBeginning && (
        <Button
          onClick={handlePrev}
          className={`absolute hidden Laptop:flex ${hovered ? "opacity-100" : "opacity-0"} left-0 top-1/2 z-[5] flex h-11 w-11 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-full bg-[#FFFFFF19] transition-opacity duration-300`}
        >
          <Image src={ChevronLeftMd} alt="이전" />
        </Button>
      )}

      {swiper && !swiper.isEnd && (
        <Button
          onClick={handleNext}
          className={`absolute hidden Laptop:flex ${hovered ? "opacity-100" : "opacity-0"} right-0 top-1/2 z-[5] flex h-11 w-11 translate-x-[50%] translate-y-[-50%] items-center justify-center rounded-full bg-[#FFFFFF19] transition-opacity duration-300`}
        >
          <Image src={ChevronRightMd} alt="다음" />
        </Button>
      )}
    </div>
  );
}
