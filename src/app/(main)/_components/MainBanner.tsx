"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "@/app/globals.css";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
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
import useDevice from "@/hooks/useDevice";
import { movieAPIs } from "@/services/movie/movieAPIs";

import LeftMoivePost from "./MainBanner/LeftMoivePost";
import RealTimeHotTalk from "./MainBanner/RealTimeHotTalk";
import Banner from "./MainSkeleton/Skeleton";

export default function MainBanner() {
  SwiperCore.use([Scrollbar, Autoplay, Pagination]);
  const [MovieBanner, setMovieBanner] = useState<BannerDTO | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);
  const { device } = useDevice();

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

    if (swiperRef.current && MovieBanner) {
      swiperRef.current.pagination.update();
    }
  }, []);
  return (
    <Suspense fallback={<Banner />}>
      <div className="  px-5 pt-2   Tablet:px-6 Laptop:px-[68px] Laptop:pt-9 Desktop:px-[180px]">
        <div className="relative">
          <Swiper
            spaceBetween={20} // 슬라이드 사이 간격
            slidesPerView={1} // 보여질 슬라이드 수
            loop={true} // 무한 반복
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }} // pagination 설정
            modules={[Autoplay, Pagination]} // 필요한 모듈 추가
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {Array.isArray(MovieBanner) && MovieBanner.length > 0
              ? MovieBanner.map((BannerItem, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Link href={`detail/${BannerItem.movieId}`}>
                        <div
                          className="relative  w-full overflow-hidden rounded-[20px] Tablet:h-[360px] Laptop:h-[489px] Desktop:h-[637px]"
                          style={{
                            backgroundImage: `${device == "laptop" || device == "desktop" ? `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url( https://image.tmdb.org/t/p/original/${BannerItem.backdrop_path})` : `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 1) 100%), url( https://image.tmdb.org/t/p/original/${BannerItem.backdrop_path})`} `,
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
                            <RealTimeHotTalk
                              ReviewList={BannerItem.reviewList}
                            />
                            {/* 실시간 핫한 톡 컴포넌트 */}
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })
              : ""}
          </Swiper>

          {/* 슬라이드 버튼만들어야함  */}
        </div>
        {/* <div
          ref={paginationRef}
          className="absolute bottom-1 right-1 z-50 flex items-center gap-2 Laptop:w-auto"
        /> */}
      </div>
    </Suspense>
  );
}
