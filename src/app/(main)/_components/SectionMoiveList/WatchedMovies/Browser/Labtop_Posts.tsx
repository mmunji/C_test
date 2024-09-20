import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import useDevice from "@/hooks/useDevice";

import PostCard from "../../../PostCard";
import PostRating from "../../../Rating/PostRating";
interface WatchMovieType {
  MovieWatchMovies: WatchMovie | null;
}
export default function Labtop_Posts({ MovieWatchMovies }: WatchMovieType) {
  const { device } = useDevice();
  return (
    <div className=" hidden  w-full gap-[24px] rounded-xl  px-[12px] py-[24px] Laptop:flex">
      <Swiper slidesPerView="auto" spaceBetween={20}>
        {Array.isArray(MovieWatchMovies) && MovieWatchMovies.length > 0
          ? MovieWatchMovies.map((e, index) => {
              return (
                <Link key={index} href={`detail/${e.movieId}`}>
                  <SwiperSlide
                    className={`${device == "laptop" ? "h-[328px] w-[174px]" : "h-[440px] w-[220px]"}`}
                  >
                    <div className="flex flex-col  gap-2 ">
                      <PostCard PostType="Post" background={e.poster_path} />
                      <span className="line-clamp-1 text-left">
                        {e.movienm}
                      </span>
                      <div>
                        <PostRating />
                      </div>
                    </div>
                  </SwiperSlide>
                </Link>
              );
            })
          : ""}
      </Swiper>
    </div>
  );
}
