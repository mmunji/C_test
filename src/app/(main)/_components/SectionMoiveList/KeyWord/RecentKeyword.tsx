"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { ChevronRight, ChevronRightMd } from "../../../../../../public/icons";
import RightKeyWords from "./RightKeyWords";
interface RecentKeywordType {
  data: MentionKeword[];
}

export default function RecentKeyword({ data }: RecentKeywordType) {
  const [KeywordListNumber, setKeywordListNumber] = useState<number>(0);
  const HandleKeywords = (index: number) => {
    setKeywordListNumber(index);
  };
  const addKeywordIndex = () => {
    if (KeywordListNumber < data.length - 1) {
      setKeywordListNumber((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between">
        <h2 className="Text-l-Bold Laptop:Text-xxl-Bold Desktop:Text-xxl-Bold">
          지금 많이 언급되는 키워드
        </h2>
        <span className="text-D3_Gray Text-xs-Regular Tablet:Text-s-Regular">
          매일 밤 12시 업데이트
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex  flex-col items-start gap-3 Tablet:gap-4 Laptop:flex-row Laptop:gap-5   Desktop:gap-6">
          <div className="block h-full w-full Laptop:hidden">
            <Swiper
              slidesPerView="auto"
              breakpoints={{
                0: { spaceBetween: 8 },
                768: { spaceBetween: 12 },
              }}
            >
              {data?.map((mention, index) => {
                return (
                  <SwiperSlide key={mention.keyword} className="w-fit">
                    <div
                      className={`relative Text-s-Bold  ${KeywordListNumber == index ? "bg-D1_Gray text-Silver" : "text-L_Gray"} rounded-[36px] px-4 py-2  text-center Tablet:px-5 Tablet:Text-m-Bold`}
                      onClick={() => HandleKeywords(index)}
                    >
                      {mention.keyword}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="Text-S-Bold  hidden gap-3 Laptop:flex Laptop:flex-col Laptop:gap-5">
            {Array.isArray(data) && data.length > 0
              ? data.map((mention, index) => {
                  return (
                    <div
                      key={mention.keyword}
                      className={`cursor-pointer Text-m-Bold Tablet:Text-s-Bold  Laptop:Text-l-Bold  ${KeywordListNumber == index ? "bg-D1_Gray text-Silver" : "text-L_Gray"}  rounded-xl px-5 py-2 text-center Laptop:w-[178px] Desktop:w-[240px] `}
                      onClick={() => HandleKeywords(index)}
                    >
                      {mention.keyword}
                    </div>
                  );
                })
              : ""}
          </div>
          {data ? (
            <RightKeyWords
              addKeywordIndex={addKeywordIndex}
              keywordInfo={data}
              keywordIndex={KeywordListNumber}
              setKeywordListNumber={setKeywordListNumber}
            />
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-end">
          <Link
            href={`search?query=${data[KeywordListNumber]?.keyword}`}
            className="hidden w-fit items-center gap-1 p-2 pr-1 Laptop:flex"
          >
            <span className="text-Gray_Orange Text-m-Medium">더보기</span>
            <Image src={ChevronRightMd} alt="화살표" />
          </Link>
        </div>
      </div>
    </div>
  );
}
