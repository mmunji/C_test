import { useState } from "react";
import { SwiperClass } from "swiper/react";

export default function useMovieSwiper() {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [hovered, sethovered] = useState(false);

  return {
    swiper,
    setSwiper,
    hovered,
    sethovered,
  };
}
