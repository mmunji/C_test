"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import SwiperCore from "swiper";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LeftMoivePost from "./MainBanner/LeftMoivePost";
import RealTimeHotTalk from "./MainBanner/RealTimeHotTalk";

export default function MainBanner() {
  SwiperCore.use([Scrollbar, Autoplay, Pagination]);
  return (
    <div className=" mt-2  Tablet:h-[380px] Laptop:mt-9 Laptop:h-[600px] Desktop:h-[810px] ">
      <Swiper
        rewind={true}
        // loop={true} // 슬라이드 루프
        spaceBetween={20} // 슬라이드 사이 간격
        slidesPerView="auto" // 보여질 슬라이드 수
        pagination={true}
        centeredSlides={true}
        // observer={true}
        // observeParents={true}
        modules={[Autoplay, Pagination]}
        className="h-[480px] Tablet:h-[400px]  Laptop:h-[489px] Desktop:h-[690px]"
        // autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {Array(3)
          .fill(0)
          .map((_, index) => {
            return (
              <SwiperSlide key={index} style={{ width: "1560px" }}>
                <div
                  className=" rounded-[35px]  Tablet:h-[360px]  Laptop:h-[489px] Laptop:px-[74px] Desktop:h-[637px]    "
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url('/images/detail/detail-banner-example.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="absolute inset-0  flex flex-col justify-between rounded-[35px] px-[20px] pb-2 pt-8  text-white Tablet:flex-row Tablet:px-9 Tablet:pb-7  Laptop:px-[74px]  Laptop:py-[40px]  Desktop:h-[637px] Desktop:px-[108px] Desktop:py-[60px]"
                    style={{
                      backdropFilter: "blur(5px)",
                      background: "rgba(0, 0, 0, 0.50)",
                    }}
                  >
                    <LeftMoivePost />
                    <hr className="my-2 text-Opacity_W15" />
                    <RealTimeHotTalk /> {/* 실시간 핫한 톡 컴포넌트 */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        <style jsx global>{`
          .swiper-pagination-bullet {
            width: 33.3px !important; /* 너비 조절 */
            height: 4px !important;
            border-radius: 22px !important; /* 너비 조절 */
            background-color: #999490; /* 파란색 */
            margin-top: 30px !important;
          }
          .swiper-pagination-bullet-active {
            background-color: #ff7a00; /* 파란색 */
            width: 33px !important; /* 너비 조절 */
          }
          .swiper-pagination-fraction,
          .swiper-pagination-custom,
          .swiper-horizontal > .swiper-pagination-bullets,
          .swiper-pagination-bullets.swiper-pagination-horizontal {
            display: flex !important;
            justify-content: flex-end !important;
          }
        `}</style>
      </Swiper>
      {/* 슬라이드 버튼만들어야함  */}
    </div>
  );
}
