"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "@/app/globals.css";

import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useDevice from "@/hooks/useDevice";

import LeftMoivePost from "./MainBanner/LeftMoivePost";
import RealTimeHotTalk from "./MainBanner/RealTimeHotTalk";

interface BannerType {
  data: BannerDTO[] | null;
}

export default function MainBanner({ data }: BannerType) {
  const { device } = useDevice();
  return (
    <div className="relative w-full">
      <div id="containerForBullets" />
      <Swiper
        spaceBetween={20} // 슬라이드 사이 간격
        slidesPerView={1} // 보여질 슬라이드 수
        loop={true} // 무한 반복
        pagination={{
          clickable: true,
          el: "#containerForBullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
        }} // pagination 설정
        modules={[Autoplay, Pagination]} // 필요한 모듈 추가
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {data?.map((BannerItem, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={`detail/${BannerItem.movieId}`}>
                <div
                  className="relative h-[374px] w-full overflow-hidden rounded-[20px] Tablet:h-[360px] Laptop:h-[489px] Desktop:h-[637px]"
                  style={{
                    backgroundImage: `${device == "laptop" || device == "desktop" ? `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url( https://image.tmdb.org/t/p/original/${BannerItem.backdrop_path})` : `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 1) 100%), url(https://image.tmdb.org/t/p/original/${BannerItem.backdrop_path})`} `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="absolute inset-0  flex flex-col justify-between rounded-[20px] px-5 pb-4 pt-8  text-white Tablet:flex-row Tablet:px-9 Tablet:pb-7  Laptop:px-[74px]  Laptop:py-[40px]  Desktop:h-[637px] Desktop:px-[108px] Desktop:py-[60px]"
                    style={{
                      backdropFilter: `${device == "laptop" || device == "desktop" ? `blur(5px)` : ""}`,
                      background: `${device == "laptop" || device == "desktop" ? `rgba(0, 0, 0, 0.50)` : ""}`,
                    }}
                  >
                    <LeftMoivePost
                      PostImg={BannerItem.poster_path}
                      keyword={BannerItem.genres[0].name}
                      MovieName={BannerItem.movienm}
                      Rate={BannerItem.rate}
                    />
                    <div className="h-[1px] border-[1px] border-[#FFFFFF] opacity-15 Tablet:hidden"></div>
                    <RealTimeHotTalk ReviewList={BannerItem.reviewList} />
                    {/* 실시간 핫한 톡 컴포넌트 */}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
