"use client";
import { useEffect, useState } from "react";

import KeyWordPosts from "./KeyWordPosts";
interface KeyWordInfoProps {
  keywordInfo: MentionKeword;
}

export default function RightKeyWords({ keywordInfo }: KeyWordInfoProps) {
  const keyword = keywordInfo?.keyword;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트된 후 애니메이션 시작
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400); // 애니메이션 지연 시간 (필요시 조정)

    return () => clearTimeout(timer);
  }, [keywordInfo]);
  return (
    <div className="h-full w-full">
      <div className={`grid grid-cols-1 gap-3 Tablet:hidden `}>
        {Array(3)
          .fill(0)
          .map((_, index) => {
            if (!keywordInfo?.reviewList?.[index]) {
              return null;
            }
            return (
              <KeyWordPosts
                key={index}
                id={keywordInfo?.reviewList[index]?.review.id}
                nickname={keywordInfo?.reviewList[index]?.nickname}
                movieName={keywordInfo?.reviewList[index]?.review?.movienm}
                star={keywordInfo?.reviewList[index]?.review?.star}
                content={keywordInfo?.reviewList[index]?.review?.content}
                keyword={keyword}
                createdAt={keywordInfo?.reviewList[index]?.review?.createdAt}
                profile={keywordInfo?.reviewList[index]?.profile}
                isVisible={isVisible}
              />
            );
          })}
      </div>
      <div className={`hidden   grid-cols-3 gap-4 Tablet:grid Laptop:hidden `}>
        {Array(6)
          .fill(0)
          .map((_, index) => {
            if (!keywordInfo?.reviewList?.[index]) {
              return null;
            }
            return (
              <KeyWordPosts
                key={index}
                id={keywordInfo?.reviewList[index]?.review.id}
                nickname={keywordInfo?.reviewList[index]?.nickname}
                movieName={keywordInfo?.reviewList[index]?.review?.movienm}
                star={keywordInfo?.reviewList[index]?.review?.star}
                content={keywordInfo?.reviewList[index]?.review?.content}
                keyword={keyword}
                createdAt={keywordInfo?.reviewList[index]?.review?.createdAt}
                profile={keywordInfo?.reviewList[index]?.profile}
                isVisible={isVisible}
              />
            );
          })}
      </div>
      <div
        className={`hidden h-full w-full  grid-cols-4  gap-5 Laptop:grid Desktop:hidden`}
      >
        {Array(8)
          .fill(0)
          .map((_, index) => {
            if (!keywordInfo?.reviewList?.[index]) {
              return null;
            }
            return (
              <KeyWordPosts
                key={index}
                id={keywordInfo?.reviewList[index]?.review.id}
                nickname={keywordInfo?.reviewList[index]?.nickname}
                movieName={keywordInfo?.reviewList[index]?.review?.movienm}
                star={keywordInfo?.reviewList[index]?.review?.star}
                content={keywordInfo?.reviewList[index]?.review?.content}
                keyword={keyword}
                createdAt={keywordInfo?.reviewList[index]?.review?.createdAt}
                profile={keywordInfo?.reviewList[index]?.profile}
                isVisible={isVisible}
              />
            );
          })}
      </div>
      <div
        className={` m hidden transform  grid-cols-5  gap-6 transition-opacity duration-700 ease-in Desktop:grid `}
      >
        {keywordInfo?.reviewList?.map((movie, index) => {
          if (!movie) {
            return null;
          }
          return (
            <KeyWordPosts
              key={index}
              id={movie.review.id}
              nickname={movie.nickname}
              movieName={movie.review?.movienm}
              star={movie.review?.star}
              content={movie.review?.content}
              keyword={keyword}
              createdAt={movie.review?.createdAt}
              profile={movie.profile}
              isVisible={isVisible}
            />
          );
        })}
      </div>
    </div>
  );
}
