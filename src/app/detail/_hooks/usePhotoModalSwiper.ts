import { useState } from "react";
import { SwiperClass } from "swiper/react";

export default function usePhotoModalSwiper() {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [, setUpdate] = useState(0);
  const forceUpdate = () => setUpdate((prev) => prev + 1);

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  return { swiper, setSwiper, handlePrev, handleNext, forceUpdate };
}
