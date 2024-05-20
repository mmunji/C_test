import { useState } from "react";
import { SwiperClass } from "swiper/react";

export default function useCastAndCrewSwiper() {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [, setUpdate] = useState(0);
  const [hovered, setHovered] = useState(false);

  const forceUpdate = () => setUpdate((prev) => prev + 1);

  const handlePrev = () => {
    swiper?.slideTo(swiper.activeIndex - 6);
  };
  const handleNext = () => {
    swiper?.slideTo(swiper.activeIndex + 6);
  };

  return {
    swiper,
    setSwiper,
    hovered,
    setHovered,
    forceUpdate,
    handlePrev,
    handleNext,
  };
}
