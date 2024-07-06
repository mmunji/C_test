import { useState } from "react";
import { SwiperClass } from "swiper/react";

import useDevice from "@/hooks/useDevice";
export default function useMovieSwiper() {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [hovered, sethovered] = useState(false);
  const [, setUpdate] = useState(0);
  const [MovieSlidesPerView, setMovieSlidesPerView] = useState(0);
  const forceUpdate = () => setUpdate((prev) => prev + 1);

  const handlePrev = () => {
    swiper?.slideTo(swiper.activeIndex - Math.floor(MovieSlidesPerView));
  };

  const handleNext = () => {
    swiper?.slideTo(swiper.activeIndex + Math.floor(MovieSlidesPerView));
  };

  return {
    swiper,
    setSwiper,
    hovered,
    sethovered,
    forceUpdate,
    handlePrev,
    handleNext,
  };
}
