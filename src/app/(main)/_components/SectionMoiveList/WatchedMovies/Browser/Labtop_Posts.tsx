import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import PostCard from "../../../PostCard";
import PostRating from "../../../Rating/PostRating";
interface WatchMovieType {
  MovieWatchMovies: WatchMovie | null;
}
export default function Labtop_Posts({ MovieWatchMovies }: WatchMovieType) {
  return (
    <div className=" hidden  gap-[24px] Laptop:flex Desktop:flex">
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        className="flex  rounded-xl px-[12px]  py-[24px]"
      >
        {Array.isArray(MovieWatchMovies) && MovieWatchMovies.length > 0
          ? MovieWatchMovies.map((e, index) => {
              return (
                <Link key={index} href={`detail/${e.movieId}`}>
                  <SwiperSlide>
                    <div className="flex flex-col gap-2 ">
                      <PostCard PostType="Post" background={e.poster_path} />
                      <span className="line-clamp-1">{e.movienm}</span>
                      <div className="flex ">
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
