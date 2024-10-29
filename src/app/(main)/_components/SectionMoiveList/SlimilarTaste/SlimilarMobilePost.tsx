import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import SmallBadge from "@/components/smallBadge/SmallBadge";

import {
  ChatFillSm,
  EditPencilLineFill,
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

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3">
          <div
            className="h-[40px] w-[40px] rounded-[60px] "
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0) 100%), url(data:image/jpeg;base64,${selectedUser?.profile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div>
            <span className="text-cente text-Silver Text-s-Medium ">
              {selectedUser?.nickname}
            </span>
            <div className="flex items-center   gap-2  text-Gray_Orange Text-s-Medium">
              <span className="flex items-center gap-1">
                <Image
                  src={EditPencilLineFill}
                  alt="글 쓰기"
                  className="h-4 w-4"
                />
                {selectedUser?.reviewCount}
              </span>
              <div className="h-4 border-r-[1px] border-D2_Gray"></div>
              <span className="flex items-center gap-1">
                <Image src={ThumbsUpFillSm} alt="좋아요" className="h-4 w-4" />
                {selectedUser?.null ? selectedUser?.null : "0"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-1 Text-xs-Regular">
          {Array(3)
            .fill(0)
            .map((_, index) => {
              if (!selectedUser?.badges[index]) {
                return null;
              }
              return (
                <SmallBadge
                  key={index}
                  content={selectedUser?.badges[index]?.badge_name}
                  size="sm"
                />
              );
            })}
        </div>
      </div>
      <div>
        <Swiper slidesPerView="auto" spaceBetween={20}>
          {selectedUser?.reviews?.map((ReviewUser, index) => {
            return (
              <SwiperSlide
                key={ReviewUser.review_id}
                className="mt-5  flex h-[250px] w-[156px] flex-col  gap-1 Tablet:h-[261px]"
              >
                <div
                  className="flex h-[230px] w-[156px] flex-col  justify-end gap-1 rounded-2xl px-3  py-4 Text-s-Bold Tablet:h-[240px]"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%), url(${ReviewUser.poster_id ? `https://image.tmdb.org/t/p/original/${ReviewUser.poster_id}` : "/images/ssikongi/PNG/NoImage.png"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex h-[17px]  justify-between">
                    <h1 className="line-clamp-1 text-L_Gray Text-s-Medium Tablet:Text-m-Regular">
                      {ReviewUser.movienm}
                    </h1>
                    <div className="flex  items-center gap-[2px] text-Silver">
                      <Image
                        src={StarFillSm}
                        alt="평점 별"
                        className="h-4 w-4"
                      />
                      <span>{ReviewUser.star}</span>
                    </div>
                  </div>
                  <div className=" flex items-center   text-Silver  Text-s-Regular Tablet:Text-m-Regular">
                    <span className=" line-clamp-2">{ReviewUser.content}</span>
                  </div>
                </div>
                <div className="flex justify-end  gap-2 text-L_Gray Text-xs-Regular">
                  <div className="flex  items-center gap-1 text-L_Gray">
                    <Image
                      src={ThumbsUpFillSm}
                      alt="좋아요"
                      className="h-4 w-4"
                      style={{ color: "#999490" }}
                    />
                    <span>{ReviewUser.rateCount}</span>
                  </div>
                  <div className="flex  items-center gap-1 ">
                    <Image
                      src={ChatFillSm}
                      alt="댓글"
                      className="h-4 w-4 text-L_Gray"
                      style={{ color: "#999490" }}
                    />
                    <span className="text-L_Gray">
                      {ReviewUser.rereviewCount}
                    </span>
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
