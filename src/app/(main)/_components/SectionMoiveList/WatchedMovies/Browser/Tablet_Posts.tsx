import { Swiper, SwiperSlide } from "swiper/react";

import SpeechBubble from "@/components/speechBubble/SpeechBubble";

import PostRating from "../../../Rating/PostRating";
interface WatchMovieType {
  MovieWatchMovies: WatchMovie | null;
}
export default function Tablet_Posts({ MovieWatchMovies }: WatchMovieType) {
  return (
    <div>
      <div className="mx-auto  hidden w-[557px] items-center rounded-xl bg-D1_Gray Tablet:flex Laptop:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          className="flex  rounded-xl px-[12px]  py-[24px]"
        >
          {Array.isArray(MovieWatchMovies) && MovieWatchMovies.length > 0
            ? MovieWatchMovies.map((e, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center gap-3"
                  >
                    <div
                      className="h-[280px] w-[200px] rounded-xl"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0) 100%), url('${e.poster_path})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="flex flex-col items-center justify-center gap-5">
                      <div className="flex flex-col items-center justify-center gap-2  px-5 py-2">
                        <h1 className="Text-I-Medium">{e.movienm}</h1>
                        <div className="Text-I-Mi flex gap-[10px] text-L_Gray">
                          <span>{e.release_date}</span>
                          <span>|</span>
                          <span>{e.genres[0].name}</span>
                        </div>
                      </div>
                      <div>
                        <h1 className="mt-8 text-center Text-l-Bold">0.0</h1>
                        <div className="flex ">
                          <PostRating />
                        </div>
                      </div>
                      <SpeechBubble dir="top">
                        로그인 하고 별을 눌러 평가해보세요 :)
                      </SpeechBubble>
                    </div>
                  </SwiperSlide>
                );
              })
            : ""}
        </Swiper>
      </div>
      <div className="hidden Tablet:flex Laptop:hidden">
        <button className="mx-auto mt-5 w-[392px] rounded-xl border-[1px] border-L_Gray px-5 py-3 text-L_Gray Text-s-Regular  ">
          아직 안봤어요
        </button>
      </div>
    </div>
  );
}
