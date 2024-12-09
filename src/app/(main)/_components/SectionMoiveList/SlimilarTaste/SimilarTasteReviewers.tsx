import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import SmallBadge from "@/components/smallBadge/SmallBadge";
import { cn } from "@/utils/cn";

import {
  EditPencilLineSilverFill,
  ThumbsUpFillLSilverSm,
} from "../../../../../../public/icons";
import { ProfileBlue } from "../../../../../../public/images";

interface SimilarTasteReviewersProps {
  pickUserNumber: number;
  changePickNumber: (num: number) => void;
  reviewUsers: MovieReviewRecommed[];
  setSwiper: React.Dispatch<React.SetStateAction<SwiperClass | undefined>>;
}

export default function SimilarTasteReviewers({
  pickUserNumber,
  changePickNumber,
  reviewUsers,
  setSwiper,
}: SimilarTasteReviewersProps) {
  return (
    <div className="-mr-5 Tablet:-mr-6 Laptop:mr-0">
      <Swiper
        breakpoints={{
          0: { spaceBetween: 16, slidesOffsetAfter: 20 },
          768: { spaceBetween: 20, slidesOffsetAfter: 24 },
          1280: { spaceBetween: 20, slidesOffsetAfter: 0 },
          1920: { spaceBetween: 24, slidesOffsetAfter: 0 },
        }}
        slidesPerView="auto"
        onSwiper={setSwiper}
      >
        {reviewUsers.map((reviewer, index) => (
          <SwiperSlide key={reviewer.userId} className="w-fit cursor-pointer">
            <div
              onClick={() => changePickNumber(index)}
              className={cn(
                `flex flex-col items-center Laptop:w-[368px]  Laptop:items-start Laptop:gap-5 Laptop:rounded-xl Laptop:bg-Black Laptop:px-5 Laptop:py-6 Laptop:hover:bg-D1_Gray Desktop:w-[372px]`,
                pickUserNumber === index && "Laptop:bg-D1_Gray",
              )}
            >
              <div className="flex flex-col items-center gap-1 Laptop:flex-row Laptop:gap-2">
                <div
                  className={cn(
                    `relative h-[60px] w-[60px] overflow-hidden rounded-full Laptop:h-10 Laptop:w-10 Laptop:border-none`,
                    pickUserNumber === index && "border-2 border-Primary",
                  )}
                >
                  <Image
                    fill
                    className="object-cover"
                    alt="유저 프로필"
                    src={
                      reviewer?.profile
                        ? `data:image/png;base64,${reviewer.profile}`
                        : ProfileBlue
                    }
                  />
                </div>
                <span
                  className={cn(
                    pickUserNumber == index
                      ? "Text-xs-Bold"
                      : "Text-xs-Regular",
                    `mt-1 line-clamp-1 text-center Laptop:Text-m-Medium`,
                  )}
                >
                  {reviewer.nickname}
                </span>
              </div>
              <div className="hidden flex-col gap-5 Laptop:flex">
                <div className="flex items-center gap-4 Text-m-Medium">
                  <div className="flex items-center gap-1">
                    <Image src={EditPencilLineSilverFill} alt="평가한 영화" />
                    <span>평가한 영화 {reviewer.reviewCount}</span>
                  </div>
                  <div className="h-4 w-px bg-D3_Gray" />
                  <div className="flex items-center gap-1">
                    <Image src={ThumbsUpFillLSilverSm} alt="좋아요" />
                    <span>받은 좋아요 {reviewer.rateCount ?? 0}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {reviewer.badges.length ? (
                    reviewer.badges.map((badge) => (
                      <SmallBadge
                        key={badge.badge_id}
                        content={badge.badge_name}
                        size="md"
                      />
                    ))
                  ) : (
                    <div className="flex items-center justify-center rounded-lg p-2 text-Gray outline-dashed outline-1 Text-m-Medium">
                      착용한 뱃지가 없어요
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
