"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "@/app/globals.css";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SwiperCore from "swiper";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import { movieAPIs } from "@/services/movie/movieAPIs";

import LeftMoivePost from "./MainBanner/LeftMoivePost";
import RealTimeHotTalk from "./MainBanner/RealTimeHotTalk";

export default function MainBanner() {
  SwiperCore.use([Scrollbar, Autoplay, Pagination]);
  const [MovieBanner, setMovieBanner] = useState<BannerDTO | null>(null);
  // const MovieMasterPiece: MovieHidingPiece = await movieAPIs.getHidingPiece();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await movieAPIs.getMovieMainBanner();
        setMovieBanner(response);
      } catch (error) {
        console.error("영화를 가져오는 중 오류 발생:", error);
      }
    };

    fetchMovie();
  }, []);
  return (
    <div className=" ml-5 mt-2  h-[450px] Tablet:h-[460px] Laptop:mt-9 Laptop:h-[600px] Desktop:h-[690px]">
      {!MovieBanner ? (
        <div className="flex items-center justify-center px-5 py-5">
          <LoadingSpinner size="2xl" color="primary" />
        </div>
      ) : (
        <Swiper
          spaceBetween={20} // 슬라이드 사이 간격
          slidesPerView={"auto"} // 보여질 슬라이드 수
          pagination={true}
          centeredSlides={true}
          autoHeight={true}
          rewind={true}
          // loop={true}
          modules={[Autoplay, Pagination]}
          className="h-[450px] Tablet:h-[500px]  Laptop:h-[510px] Desktop:h-[690px]"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {Array.isArray(MovieBanner) && MovieBanner.length > 0
            ? MovieBanner.map((BannerItem, index) => {
                return (
                  <SwiperSlide key={index} className="responsive-slide">
                    <Link href={`detail/${BannerItem.movieId}`}>
                      <div
                        className=" h-[421px] rounded-[20px]  Tablet:h-[360px]  Laptop:h-[489px] Laptop:px-[74px] Desktop:h-[637px]"
                        style={{
                          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url( https://image.tmdb.org/t/p/original/${BannerItem.backdrop_path})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div
                          className="absolute inset-0  flex flex-col justify-between rounded-[20px] px-5 pb-4 pt-8  text-white Tablet:flex-row Tablet:px-9 Tablet:pb-7  Laptop:px-[74px]  Laptop:py-[40px]  Desktop:h-[637px] Desktop:px-[108px] Desktop:py-[60px]"
                          style={{
                            backdropFilter: "blur(5px)",
                            background: "rgba(0, 0, 0, 0.50)",
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
              })
            : ""}
          <style jsx global>{`
            .swiper-pagination-bullet {
              width: 22px !important; /* 너비 조절 */
              height: 4px !important;
              border-radius: 22px !important; /* 너비 조절 */
              background-color: #545250;
            }
            .swiper-pagination-bullet-active {
              background-color: #ff7a00;
              width: 22px !important; /* 너비 조절 */
            }
            .swiper-pagination-fraction,
            .swiper-pagination-custom,
            .swiper-horizontal > .swiper-pagination-bullets,
            .swiper-pagination-bullets.swiper-pagination-horizontal {
              display: flex !important;
              justify-content: center !important;
            }
            .swiper .swiper-pagination {
              position: relative;
              margin-top: 20px !important;
            }
            @media (min-width: 768px) {
              .swiper .swiper-pagination {
                position: relative;
              }
            }
            @media (min-width: 1439px) {
              .responsive-slide {
                width: 1144px !important;
              }
            }
            @media (min-width: 1280px) {
              .responsive-slide {
                width: 1144px !important;
              }
              .swiper-pagination-bullet {
                width: 33.3px !important; /* 너비 조절 */
              }
              .swiper-pagination-bullet-active {
                width: 33px !important; /* 너비 조절 */
              }
            }
            @media (min-width: 1920px) {
              .responsive-slide {
                width: 1560px !important;
              }
            }
          `}</style>
        </Swiper>
      )}
      {/* 슬라이드 버튼만들어야함  */}
    </div>
  );
}
