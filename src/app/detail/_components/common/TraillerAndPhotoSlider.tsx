import Image from "next/image";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useDetailSwiper from "@/app/detail/_hooks/useDetailSwiper";
import { trailerAndPhoto } from "@/app/detail/fakeData";
import Button from "@/components/buttons/Button";

import { ChevronLeftMd, ChevronRightMd } from "../../../../../public/icons";

export default function TrailerAndPhotoSlider() {
  const {
    hovered,
    setHovered,
    swiper,
    setSwiper,
    forceUpdate,
    handleNext,
    handlePrev,
    traillerAndPhotoSpaceBetween,
  } = useDetailSwiper("traillerAndPhoto");

  return (
    <div
      className="relative mt-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={traillerAndPhotoSpaceBetween}
        slidesPerView={"auto"}
        onSlideChange={forceUpdate}
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        {trailerAndPhoto.map((el, i) => (
          <SwiperSlide
            key={i}
            className="max-w-[320px] Tablet:max-w-[352px] Laptop:max-w-[271px] Desktop:max-w-[372px]"
          >
            <Image src={el} alt="" className="w-full" />
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
