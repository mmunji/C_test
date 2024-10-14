"use client";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import Button from "@/components/buttons/Button";
import useDevice from "@/hooks/useDevice";

import { ChevronLeftMd, ChevronRightMd } from "../../../../../../public/icons";
import PostCard from "../../PostCard";
import SlimilarMobilePost from "./SlimilarMobilePost";
import SlimilarUser from "./SlimilarUser";

interface ReviewUsersProps {
  ReviewUsers: MovieReviewRecommed[];
  setPickUserNumber: Dispatch<SetStateAction<number>>;
  PickUserNumber: number;
  ChangePickNumber: (index: number) => void;
}

export default function SlimilarPost({
  ReviewUsers,
  setPickUserNumber,
  ChangePickNumber,
  PickUserNumber,
}: ReviewUsersProps) {
  const { device } = useDevice();
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [hovered, sethovered] = useState(false);

  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-col gap-5 rounded-2xl bg-Black py-5 pl-5 Tablet:bg-D1_Gray Laptop:hidden ">
        <SlimilarMobilePost
          UserPost={ReviewUsers}
          PickUserNumber={PickUserNumber}
        />
      </div>
      <div className=" hidden justify-between Laptop:flex">
        <Swiper
          slidesPerView="auto"
          spaceBetween={device == "laptop" ? 20 : 24}
          className="flex  rounded-xl"
        >
          {Array.isArray(ReviewUsers) && ReviewUsers.length > 0
            ? ReviewUsers.map((ReviewUser, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-[368px] Desktop:w-[372px]  "
                  >
                    <SlimilarUser
                      name={ReviewUser.nickname}
                      evaluate={ReviewUser.rateCount}
                      heart={ReviewUser.reviewCount}
                      value={PickUserNumber}
                      Badge={ReviewUser.badges}
                      profile={ReviewUser.profile}
                      ClickIndex={index}
                      onClick={() => ChangePickNumber(index)}
                    />
                  </SwiperSlide>
                );
              })
            : ""}
        </Swiper>
      </div>

      <div className="hidden flex-col gap-[16px] rounded-xl bg-D1_Gray  px-[24px]  py-[28px] text-white Laptop:flex">
        <h1 className="text-Silver Text-xl-Bold">닉네임님의 최근 톡</h1>
        <div
          className="flex gap-[24px]"
          onMouseEnter={() => sethovered(true)}
          onMouseLeave={() => sethovered(false)}
        >
          <Swiper
            slidesPerView="auto"
            spaceBetween={device == "laptop" ? 20 : 24}
            className="flex  rounded-xl"
            onSwiper={(e) => setSwiper(e)}
          >
            {Array.isArray(ReviewUsers) &&
            ReviewUsers.length > 0 &&
            Array.isArray(ReviewUsers[PickUserNumber]?.reviews)
              ? ReviewUsers[PickUserNumber].reviews.map(
                  (_: PostreviewDTO, index: number) => {
                    return (
                      <SwiperSlide
                        key={index}
                        className={`${device == "laptop" ? "h-[296px] w-[174px]" : "h-[396px] w-[240px]"} `}
                      >
                        <Link href={`detail/${_.movie_id}`}>
                          <div className="flex flex-col gap-2">
                            <PostCard
                              content={_.content}
                              background={_.poster_id}
                              StarPostType="StarPost"
                              StarRating={_.star}
                              reviewCount={_.rereviewCount}
                              likeCount={_.rateCount}
                              regDate={_.regDate}
                            />
                            <span className="line-clamp-1 text-Gray_Orange">
                              {_.movienm}
                            </span>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  },
                )
              : ""}
            {swiper && !swiper.isBeginning && (
              <Button
                onClick={() => swiper.slidePrev()}
                variant="arrow1"
                className={`absolute left-2 top-1/4 z-[10]  mt-9  transform   transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-10"} `}
              >
                <Image
                  src={ChevronLeftMd}
                  alt="이전"
                  style={{ color: "#E9E9E9" }}
                />
              </Button>
            )}

            {swiper && !swiper.isEnd && (
              <Button
                onClick={() => swiper.slideNext()}
                variant="arrow2"
                className={`absolute right-4 top-1/4 z-[10]  mt-9  transform transition-opacity duration-300${hovered ? "opacity-100" : "opacity-10"}  `}
              >
                <Image
                  src={ChevronRightMd}
                  alt="다음"
                  style={{ color: "#E9E9E9" }}
                />
              </Button>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
