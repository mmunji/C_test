import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import SmallBadge from "@/components/smallBadge/SmallBadge";

import {
  ChatFillSm,
  EditPencilLineSm,
  StarFillSm,
  ThumbsUpFillSm,
} from "../../../../../../public/icons";

interface UserPostTypes {
  UserPost: MovieReviewRecommed[];
  PickUserNumber: number;
}
export default function SlimilarMobilePost({
  UserPost,
  PickUserNumber,
}: UserPostTypes) {
  const selectedUser =
    UserPost && UserPost.length > PickUserNumber
      ? UserPost[PickUserNumber]
      : null;
  console.log(selectedUser);
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3">
          <div
            className="h-[40px] w-[40px] rounded-[60px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(data:image/jpeg;base64,${selectedUser?.profile}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="Text-s-Medium  ">
            <span className="text-center">{selectedUser?.nickname}</span>
            <div className="flex  gap-2">
              <span className="flex items-center gap-1">
                <Image
                  src={EditPencilLineSm}
                  alt="글 쓰기"
                  className="h-4 w-4"
                />
                {selectedUser?.reviewCount}
              </span>
              <span className="flex items-center gap-1">
                <Image src={ThumbsUpFillSm} alt="글 쓰기" className="h-4 w-4" />
                {selectedUser?.null ? selectedUser?.null : "0"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-1 Text-xs-Regular">
          {Array(3)
            .fill(0)
            .map((_, index) => {
              if (!selectedUser?.badges[index]?.badge_name) {
                return "";
              }
              return (
                <SmallBadge
                  key={index}
                  content={selectedUser.badges[index]?.badge_name}
                  size="xs"
                />
              );
            })}
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={50} // 슬라이드 사이 간격
          slidesPerView={4} // 보여질 슬라이드 수
          breakpoints={{
            360: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {selectedUser?.reviews?.map((ReviewUser, index) => {
            return (
              <SwiperSlide key={index} className="mt-5  flex flex-col gap-1 ">
                <div className="h-[250px] w-[156px]">
                  <div
                    className="flex h-[230px]  w-[156px] flex-col justify-end rounded-2xl  px-3 py-4 Text-s-Bold"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(${ReviewUser.poster_id})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="flex justify-between ">
                      <h1 className="text-L_Gray Text-xs-Regular">
                        {ReviewUser.movienm}
                      </h1>
                      <div className="flex  gap-1">
                        <Image
                          src={StarFillSm}
                          alt="평점 별"
                          className="h-4 w-4"
                        />
                        <span>{ReviewUser.star}</span>
                      </div>
                    </div>
                    <span className=" line-clamp-1  Text-s-Regular ">
                      {ReviewUser.content}
                    </span>
                  </div>
                  <div className="flex justify-end  gap-2 text-L_Gray Text-xs-Regular">
                    <div className="flex  gap-1">
                      <Image
                        src={ThumbsUpFillSm}
                        alt="좋아요"
                        className="h-4 w-4 text-L_Gray"
                      />
                      {ReviewUser.rateCount}
                    </div>
                    <div className="flex gap-1">
                      <Image
                        src={ChatFillSm}
                        alt="댓글"
                        className="h-4 w-4 text-L_Gray"
                      />
                      <span>{ReviewUser.rereviewCount}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
