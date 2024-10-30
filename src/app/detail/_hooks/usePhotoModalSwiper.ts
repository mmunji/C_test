import { useEffect, useState } from "react";
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

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        swiper?.slidePrev();
      } else if (e.key === "ArrowRight") {
        swiper?.slideNext();
      }
    };

    addEventListener("keydown", handleKeyPress);
    return () => removeEventListener("keydown", handleKeyPress);
  }, [swiper]);

  return { swiper, setSwiper, handlePrev, handleNext, forceUpdate };
}
