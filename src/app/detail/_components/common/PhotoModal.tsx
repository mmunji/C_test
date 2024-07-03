import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import useDevice from "@/hooks/useDevice";
import hexToRGBA from "@/utils/hexToRGBA";

import {
  ChevronLeftLg,
  ChevronRightLg,
  CloseLg,
} from "../../../../../public/icons";
import usePhotoModalSwiper from "../../_hooks/usePhotoModalSwiper";

interface PhotoModalProps {
  openPhotoModal: boolean;
  setOpenPhotoModal: Dispatch<SetStateAction<boolean>>;
  photo: DetailImageDTO[] | undefined;
  photoModalIndex: number | null;
}

export default function PhotoModal({
  openPhotoModal,
  setOpenPhotoModal,
  photo,
  photoModalIndex,
}: PhotoModalProps) {
  const { device } = useDevice();
  const isSm = device === "mobile" || device === "tablet";
  const isLg = device === "laptop" || device === "desktop";
  const [initialRender, setInitialRender] = useState(true);
  const modalOverlayBackGround = hexToRGBA("#000000", 0.4);
  const { swiper, setSwiper, handleNext, handlePrev, forceUpdate } =
    usePhotoModalSwiper();

  useEffect(() => {
    if (!initialRender && (isSm || isLg)) {
      setOpenPhotoModal(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSm, isLg, setOpenPhotoModal]);

  useEffect(() => {
    if (openPhotoModal) {
      setTimeout(() => setInitialRender(false));
    }
  }, [openPhotoModal]);

  return (
    <div
      style={{ backgroundColor: modalOverlayBackGround }}
      className="fixed inset-0 z-10 flex h-full w-full items-center justify-center backdrop-blur-[3px]"
    >
      <div className="relative h-[181px] w-[320px] rounded-lg Tablet:h-[313px] Tablet:w-[556px] Tablet:rounded-xl Laptop:h-[426px] Laptop:w-[756px] Desktop:h-[582px] Desktop:w-[1032px]">
        <Swiper
          initialSlide={photoModalIndex as number}
          onSlideChange={forceUpdate}
          slidesPerView={1}
          onSwiper={(e) => setSwiper(e)}
        >
          {photo?.map((el, i) => (
            <SwiperSlide key={i}>
              <Image
                width={500}
                height={500}
                src={el.filePath}
                alt="포토"
                className="h-full w-full rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {swiper && !swiper.isBeginning && (
          <button
            onClick={handlePrev}
            className={`absolute left-2 top-1/2 z-[5] translate-y-[-50%] Tablet:left-[-42px] Tablet:translate-x-[-100%] Laptop:left-[-28px] Desktop:left-[-40px]`}
          >
            <Image src={ChevronLeftLg} alt="이전" />
          </button>
        )}

        {swiper && !swiper.isEnd && (
          <button
            onClick={handleNext}
            className={`absolute right-2 top-1/2 z-[5] translate-y-[-50%] Tablet:right-[-42px] Tablet:translate-x-[100%] Laptop:right-[-28px] Desktop:right-[-40px]`}
          >
            <Image src={ChevronRightLg} alt="다음" />
          </button>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 Text-m-Medium Tablet:bottom-[72px] Laptop:bottom-4 Desktop:bottom-[68px]">
        <p>
          {(swiper?.activeIndex as number) + 1} · {photo?.length}
        </p>
        <Image
          onClick={() => setOpenPhotoModal(false)}
          src={CloseLg}
          alt="닫기"
          className="m-2 cursor-pointer"
        />
      </div>
    </div>
  );
}
