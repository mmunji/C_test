import { useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";

export default function useCastAndCrewSwiper(device: Device) {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [, setUpdate] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(0);

  const forceUpdate = () => setUpdate((prev) => prev + 1);

  const handlePrev = () => {
    swiper?.slideTo(swiper.activeIndex - 6);
  };
  const handleNext = () => {
    swiper?.slideTo(swiper.activeIndex + 6);
  };

  useEffect(() => {
    switch (device) {
      case "mobile":
        setSlidesPerView(3.5);
        break;

      case "tablet":
        setSlidesPerView(7.5);
        break;

      case "laptop":
        setSlidesPerView(6);
        break;

      case "desktop":
        setSlidesPerView(8);
        break;

      default:
        break;
    }
  }, [device]);

  return {
    swiper,
    setSwiper,
    hovered,
    setHovered,
    forceUpdate,
    handlePrev,
    handleNext,
    slidesPerView,
  };
}
