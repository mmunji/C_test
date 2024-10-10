import Image from "next/image";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useDetailSwiper from "@/app/detail/_hooks/useDetailSwiper";
import Button from "@/components/buttons/Button";

import { ChevronLeftMd, ChevronRightMd } from "../../../../../public/icons";
import { DefaultProfile } from "../../../../../public/images";

interface CastAndCrewSliderProps {
  type: "cast" | "crew";
  cast?: DetailCastDTO[];
  crew?: DetailCrewDTO[];
}

export default function CastAndCrewSlider({
  type,
  cast,
  crew,
}: CastAndCrewSliderProps) {
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

  const twentyCast = cast?.slice(0, 32);
  const twentyCrew = crew?.slice(0, 32);

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
        {type === "crew" &&
          twentyCrew?.map((el, i) => {
            const profileImage = el?.profilePath
              ? el.profilePath
              : DefaultProfile;

            return (
              <SwiperSlide
                key={i}
                className="min-h-[196px] max-w-[82px] rounded-[8px] bg-D1_Gray"
              >
                <Image
                  width={100}
                  height={100}
                  src={profileImage}
                  alt={el.name}
                  className="h-[112px] rounded-[8px] object-cover"
                />
                <section className="flex h-[79px] flex-col px-2 py-2">
                  <p className="line-clamp-2 h-10 overflow-hidden text-ellipsis break-all leading-[150%] text-Silver Text-s-Medium">
                    {el.name}
                  </p>
                  <p className="mt-auto overflow-hidden text-ellipsis whitespace-nowrap leading-[140%] text-L_Gray Text-xs-Regular">
                    {el.job}
                  </p>
                </section>
              </SwiperSlide>
            );
          })}
        {type === "cast" &&
          twentyCast?.map((el, i) => {
            const profileImage = el?.profilePath
              ? el.profilePath
              : DefaultProfile;

            return (
              <SwiperSlide
                key={i}
                className="min-h-[196px] max-w-[82px] rounded-[8px] bg-D1_Gray"
              >
                <Image
                  width={100}
                  height={100}
                  src={profileImage}
                  alt={el.name}
                  className="h-[112px] rounded-[8px] object-cover"
                />
                <section className="flex h-[79px] flex-col px-2 py-2">
                  <p className="line-clamp-2 h-10 overflow-hidden text-ellipsis break-all leading-[150%] text-Silver Text-s-Medium">
                    {el.name}
                  </p>
                  <p className="mt-auto overflow-hidden text-ellipsis whitespace-nowrap leading-[140%] text-L_Gray Text-xs-Regular">
                    {el.character}
                  </p>
                </section>
              </SwiperSlide>
            );
          })}
      </Swiper>

      {swiper && !swiper.isBeginning && (
        <Button
          onClick={handlePrev}
          variant="arrow1"
          className={`absolute hidden Laptop:flex ${hovered ? "opacity-100" : "opacity-0"} left-0 top-1/2 z-[5] translate-x-[-50%] translate-y-[-50%] transition-opacity duration-300`}
        >
          <Image src={ChevronLeftMd} alt="이전" />
        </Button>
      )}

      {swiper && !swiper.isEnd && (
        <Button
          onClick={handleNext}
          variant="arrow2"
          className={`absolute hidden Laptop:flex ${hovered ? "opacity-100" : "opacity-0"} right-0 top-1/2 z-[5] translate-x-[50%] translate-y-[-50%] transition-opacity duration-300`}
        >
          <Image src={ChevronRightMd} alt="다음" />
        </Button>
      )}
    </div>
  );
}
