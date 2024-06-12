"use client";
import { useEffect, useState } from "react";

import { movieAPIs } from "@/api/movie/movieAPIs";

import RightKeyWords from "./RightKeyWords";
export default function RecentKeyword() {
  const [MentionKewords, setMentionKewords] = useState<MentionKeword | null>(
    null,
  );
  const [KeywordListNumber, setKeywordListNumber] = useState<number>(0);
  // const MovieMasterPiece: MovieHidingPiece = await movieAPIs.getHidingPiece();
  const HandleKeywords = (index: number) => {
    setKeywordListNumber(index);
  };
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // 실제 API 호출로 `movieAPIs.getHidingPiece`를 대체합니다.
        const response = await movieAPIs.getMentionKeword();
        console.log(response);
        setMentionKewords(response);
      } catch (error) {
        console.error("영화를 가져오는 중 오류 발생:", error);
      }
    };

    fetchMovie();
  }, []);
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="Desktop: Text-xxl-Bold Text-l-Bold Laptop:Text-xxl-Bold">
        지금 많이 언급되는 키워드
      </h1>
      <div className="flex flex-col gap-[24px] Laptop:flex-row Desktop:flex-row">
        <div className="Text-S-Bold flex gap-3 Laptop:flex-col Laptop:gap-5 Desktop:flex-col Desktop:gap-5">
          {Array.isArray(MentionKewords) && MentionKewords.length > 0
            ? MentionKewords.map((mention, index) => {
                return (
                  <div
                    key={index}
                    className={`Text-S-Bold  ${KeywordListNumber == index ? "bg-D1_Gray" : ""}  rounded-xl px-5 py-2 text-center Laptop:w-[178px] Desktop:w-[240px]`}
                    onClick={() => HandleKeywords(index)}
                  >
                    {mention.keyword}
                  </div>
                );
              })
            : ""}
        </div>
        {MentionKewords != null ? (
          <RightKeyWords keywordInfo={MentionKewords[KeywordListNumber]} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
