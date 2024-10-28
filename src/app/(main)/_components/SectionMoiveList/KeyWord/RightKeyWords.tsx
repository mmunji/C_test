"use client";
import { useEffect, useState } from "react";

import KeyWordPosts from "./KeyWordPosts";
interface KeyWordInfoProps {
  keywordInfo: MentionKeword[];

  keywordIndex: number;
}

export default function RightKeyWords({
  keywordInfo,
  keywordIndex,
}: KeyWordInfoProps) {
  const keyword = keywordInfo[keywordIndex]?.keyword;
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
            if (!keywordInfo[keywordIndex]?.reviewList?.[index]) {
              return null;
            }
            return (
              <KeyWordPosts
                key={index}
                id={keywordInfo[keywordIndex]?.reviewList[index]?.id}
                nickname={
                  keywordInfo[keywordIndex]?.reviewList[index]?.nickname
                }
                movieName={
                  keywordInfo[keywordIndex]?.reviewList[index]?.movienm
                }
                star={keywordInfo[keywordIndex]?.reviewList[index]?.star}
                content={keywordInfo[keywordIndex]?.reviewList[index]?.content}
                keyword={keyword}
                createdAt={
                  keywordInfo[keywordIndex]?.reviewList[index]?.createdAt
                }
                profile={keywordInfo[keywordIndex]?.reviewList[index]?.profile}
                isVisible={isVisible}
              />
            );
          })}
      </div>
      <div className={`hidden   grid-cols-3 gap-4 Tablet:grid Laptop:hidden `}>
        {Array(6)
          .fill(0)
          .map((_, index) => {
            if (!keywordInfo[keywordIndex]?.reviewList?.[index]) {
              return null;
            }
            return (
              <KeyWordPosts
                key={index}
                id={keywordInfo[keywordIndex]?.reviewList[index]?.id}
                nickname={
                  keywordInfo[keywordIndex]?.reviewList[index]?.nickname
                }
                movieName={
                  keywordInfo[keywordIndex]?.reviewList[index]?.movienm
                }
                star={keywordInfo[keywordIndex]?.reviewList[index]?.star}
                content={keywordInfo[keywordIndex]?.reviewList[index]?.content}
                keyword={keyword}
                createdAt={
                  keywordInfo[keywordIndex]?.reviewList[index]?.createdAt
                }
                profile={keywordInfo[keywordIndex]?.reviewList[index]?.profile}
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
            if (!keywordInfo[keywordIndex]?.reviewList?.[index]) {
              return null;
            }
            return (
              <KeyWordPosts
                key={index}
                id={keywordInfo[keywordIndex]?.reviewList[index]?.id}
                nickname={
                  keywordInfo[keywordIndex]?.reviewList[index]?.nickname
                }
                movieName={
                  keywordInfo[keywordIndex]?.reviewList[index]?.movienm
                }
                star={keywordInfo[keywordIndex]?.reviewList[index]?.star}
                content={keywordInfo[keywordIndex]?.reviewList[index]?.content}
                keyword={keyword}
                createdAt={
                  keywordInfo[keywordIndex]?.reviewList[index]?.createdAt
                }
                profile={keywordInfo[keywordIndex]?.reviewList[index]?.profile}
                isVisible={isVisible}
              />
            );
          })}
      </div>
      <div
        className={`  hidden transform  grid-cols-5  gap-6 transition-opacity duration-700 ease-in Desktop:grid `}
      >
        {keywordInfo[keywordIndex]?.reviewList.map((movie, index) => {
          if (!movie) {
            return null;
          }
          return (
            <KeyWordPosts
              key={index}
              id={movie.id}
              nickname={movie.nickname}
              movieName={movie.movienm}
              star={movie.star}
              content={movie.content}
              keyword={keyword}
              createdAt={movie.createdAt}
              profile={movie.profile}
              isVisible={isVisible}
            />
          );
        })}
      </div>
    </div>
  );
}
