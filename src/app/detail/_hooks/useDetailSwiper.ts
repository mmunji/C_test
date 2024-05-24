import { useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";

import useDevice from "@/hooks/useDevice";

export default function useDetailSwiper(
  type: "castAndCrew" | "traillerAndPhoto",
) {
  const { device } = useDevice();
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [, setUpdate] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [castAndCrewSlidesPerView, setCastAndCrewSlidesPerView] = useState(0);
  const [castAndCrewSpaceBetween, setCastAndCrewSpaceBetween] = useState(0);
  const [traillerAndPhotoSlidesPerView, setTraillerAndPhotoSlidesPerView] =
    useState(0);
  const [traillerAndPhotoSpaceBetween, setTraillerAndPhotoSpaceBetween] =
    useState(0);

  const forceUpdate = () => setUpdate((prev) => prev + 1);

  const slidesPerView =
    type === "castAndCrew"
      ? castAndCrewSlidesPerView
      : traillerAndPhotoSlidesPerView;

  const handlePrev = () => {
    swiper?.slideTo(swiper.activeIndex - Math.floor(slidesPerView));
  };

  const handleNext = () => {
    swiper?.slideTo(swiper.activeIndex + Math.floor(slidesPerView));
  };

  useEffect(() => {
    switch (device) {
      case "mobile":
        setCastAndCrewSlidesPerView(3.5);
        setCastAndCrewSpaceBetween(12);
        setTraillerAndPhotoSlidesPerView(1.5);
        setTraillerAndPhotoSpaceBetween(12);
        break;

      case "tablet":
        setCastAndCrewSlidesPerView(7.5);
        setCastAndCrewSpaceBetween(16);
        setTraillerAndPhotoSlidesPerView(2.5);
        setTraillerAndPhotoSpaceBetween(16);
        break;

      case "laptop":
        setCastAndCrewSlidesPerView(6);
        setCastAndCrewSpaceBetween(16);
        setTraillerAndPhotoSlidesPerView(4);
        setTraillerAndPhotoSpaceBetween(20);
        break;

      case "desktop":
        setCastAndCrewSlidesPerView(8);
        setCastAndCrewSpaceBetween(16);
        setTraillerAndPhotoSlidesPerView(4);
        setTraillerAndPhotoSpaceBetween(24);
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
    castAndCrewSpaceBetween,
    traillerAndPhotoSpaceBetween,
  };
}
